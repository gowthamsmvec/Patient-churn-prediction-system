<div class="hero__caption">
    <span>Committed to success</span>
    <h1 class="cd-headline letters scale">
        We care about our 
        <strong class="cd-words-wrapper">
            <b class="is-visible">patient</b>
            <b>client</b>
        </strong>
    </h1>
    <p data-animation="fadeInLeft" data-delay="0.1s">We will analyze every detail, ensuring that the patient churn prediction system provides accurate insights, tailored for effective decision-making.</p>
</div>
    // Wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Example dynamic content update
        const headingElement = document.querySelector('.sub-container-heading h1');
        const textElement = document.querySelector('.sub-container-text p');
        
        // Function to update content
        function updateContent(heading, text) {
            headingElement.textContent = heading;
            textElement.textContent = text;
        }
        
        // Example data (could come from an API or other source)
        const newHeading = "Updated Patient Churn Prediction System";
        const newText = "We are now providing the latest insights on patient churn with enhanced accuracy.";

        // Update content
        updateContent(newHeading, newText);
    });

