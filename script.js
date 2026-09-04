function syncCountryAndCode(selectObj) {
    const customInput = document.getElementById('customCountryInput');
    
    if (selectObj.value === 'Other') {
        customInput.style.display = 'block';
        customInput.required = true;
    } else {
        customInput.style.display = 'none';
        customInput.required = false;
        customInput.value = '';
    }
}

const webinarForm = document.getElementById('webinarForm');

webinarForm.addEventListener('submit', function() {
    setTimeout(function() {
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('thankyou-container').style.display = 'block';
    }, 500);
});