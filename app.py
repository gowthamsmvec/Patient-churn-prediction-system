from flask import Flask, render_template,request,jsonify
from pymongo import MongoClient
import pickle
import numpy as np

app = Flask(__name__, static_url_path='/assert', static_folder='static/assert')

def get_db_connection():
    try:
        # Replace the connection string with your own MongoDB Atlas connection string
        client = MongoClient("mongodb+srv://user_cred_cts:bOq9oGvnk01PthSr@trainlab.ctgfbea.mongodb.net/?retryWrites=true&w=majority&appName=trainlab")
        db = client['cts-project']  # Replace 'mydatabase' with your database name
        print("Connected to MongoDB Atlas successfully!")
        return db
    except Exception as e:
        print(f"Error connecting to MongoDB Atlas: {e}")
        return None

with open('churn_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('label_encoders.pkl', 'rb') as encoder_file:
    label_encoders = pickle.load(encoder_file)


db = get_db_connection()
@app.route('/')
def home():
    return render_template('index.html')  

@app.route('/index.html')
def index():
    return render_template('index.html')  




@app.route('/predictions', methods=['POST'])
def render_predictions():
    # Get patient data from the request body
    patient_data = request.json  # Assuming the input data is in JSON format

    # Perform encoding for categorical variables
    for column, encoder in label_encoders.items():
        if column in patient_data:
            patient_data[column] = encoder.transform([patient_data[column]])[0]

    # Convert the patient data to the appropriate format for model prediction
    input_data = np.array([patient_data.values()])

    # Make prediction
    prediction = model.predict(input_data)

    # Prepare the response
    response = {'prediction': prediction[0]}

    return jsonify(response)

@app.route('/reports.html')
def render_report():
    # Fetch search query and filter type from the request
    search_query = request.args.get('search_query', '')
    churn_filter = request.args.get('churn', '1')  # Default to 'Churn'
    collection = db['patients']
    
    # Create the filter criteria for MongoDB query
    query_filter = {"Churn": int(churn_filter)}

    # If search query is provided, add a regex search filter for 'Patient Name'
    if search_query:
        query_filter["Patient Name"] = {'$regex': search_query, '$options': 'i'}

    # Fetch data from MongoDB with the query filter and limit to 20 records
    records = list(collection.find(query_filter).limit(10))

    return render_template('reports.html', records=records)
    # return render_template('reports.html')

@app.route('/search')
def search_report():
    search_query = request.args.get('search_query', '')
    churn = request.args.get('churn', '1')
    collection = db['patients']
    # Create the filter criteria for MongoDB query
    query_filter = {"Churn": int(churn)}

    # If search query is provided, add a regex search filter for 'Patient Name'
    if search_query:
        query_filter["Patient Name"] = {'$regex': search_query, '$options': 'i'}

    # Fetch data from MongoDB with the query filter
    records = list(collection.find(query_filter).limit(10))

    return render_template('reports.html', records=records)

@app.route('/dashboard.html')
def render_dashboard():
    collection = db['patients']
    churn_1_count = collection.count_documents({"Churn": 1})
    churn_0_count = collection.count_documents({"Churn": 0})
    total_records = collection.count_documents({})
    res= {
        "churn": churn_1_count,
        "n_churn": churn_0_count,
        "total_records": total_records
    }
    pipeline = [
        {"$match": {"Churn": 1}},  # Filter only churned patients
        {"$group": {"_id": "$Conditions", "churn_count": {"$sum": 1}}}
    ]
    
    results = collection.aggregate(pipeline)
    
    # Prepare data for the bar chart
    conditions = []
    churn_counts = []
    
    for result in results:
        conditions.append(result['_id'])
        churn_counts.append(result['churn_count'])

    # print(conditions, churn_counts)
    return render_template('dashboard.html',res = res,condition_names = conditions,churn_counts = churn_counts,c=churn_1_count,n_c=churn_0_count,t=total_records)


if __name__ == '__main__':
    app.run(debug=True)
