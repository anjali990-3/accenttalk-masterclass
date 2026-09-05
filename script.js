function syncCountryAndCode(selectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const targetCountryName = selectedOption.getAttribute('data-country');
    const countryDropdown = document.querySelector('select[name="entry.754249041"]');
    const customInput = document.getElementById('customCountryInput');

    if (targetCountryName === 'Other') {
        countryDropdown.value = 'Other';
        customInput.style.display = 'block';
        customInput.required = true;
    } else {
        customInput.style.display = 'none';
        customInput.required = false;
        customInput.value = '';
        
        // Automatically selects matching country in the lower dropdown
        for (let option of countryDropdown.options) {
            if (option.value === targetCountryName) {
                countryDropdown.value = targetCountryName;
                break;
            }
        }
    }
}

const webinarForm = document.getElementById('webinarForm');

webinarForm.addEventListener('submit', function() {
    setTimeout(function() {
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('thankyou-container').style.display = 'block';
    }, 500);
});
