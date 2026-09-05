function checkProfession(selectElement) {
    const otherInput = document.getElementById('otherProfessionInput');
    
    if (selectElement.value === 'Other') {
        otherInput.style.display = 'block';
        otherInput.required = true;
        // Temporarily disable name on the dropdown so only the custom text field submits to Google Forms
        selectElement.removeAttribute('name'); 
    } else {
        otherInput.style.display = 'none';
        otherInput.required = false;
        otherInput.value = ''; // Clear text if changed
        selectElement.setAttribute('name', 'entry.928849682'); // Restore name attribute to dropdown
    }
}

const webinarForm = document.getElementById('webinarForm');

webinarForm.addEventListener('submit', function() {
    setTimeout(function() {
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('thankyou-container').style.display = 'block';
    }, 500);
});
