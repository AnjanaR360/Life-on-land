document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    const pages = document.querySelectorAll(".page");
    const userDetailsList = document.getElementById("userDetailsList");
    let currentPage = 0;

    function updateProgress() {
        const percent = (currentPage / (pages.length - 1)) * 100;
        progressBar.value = percent;
        progressText.textContent = `Progress: ${percent.toFixed(0)}%`;
    }

    function showPage(index) {
        pages[currentPage].style.display = "none";
        pages[index].style.display = "block";
        currentPage = index;
        updateProgress();
        updateUserDetails();
    }

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validateCurrentPage() {
        const inputs = pages[currentPage].querySelectorAll("input[required], select[required]");
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim() && input.type !== 'password') { // Skip validation for password fields
                alert(`Please fill out the ${input.name} field.`);
                isValid = false;
                return;
            }

            if (input.name === "email" && !validateEmail(input.value)) {
                alert("Invalid email address.");
                isValid = false;
                return;
            }

            if (input.name === "confirmPassword" && input.value !== form.elements.password.value) {
                alert("Passwords do not match.");
                isValid = false;
                return;
            }
        });

        return isValid;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (validateCurrentPage()) {
            // Show an alert when the form is submitted
            alert("Form submitted successfully!");
            // Optionally reset form or redirect user here
        }
    });

    document.querySelectorAll(".next").forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            if (validateCurrentPage() && currentPage < pages.length - 1) {
                showPage(currentPage + 1);
            }
        });
    });

    document.querySelectorAll(".prev").forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            if (currentPage > 0) {
                showPage(currentPage - 1);
            }
        });
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (validateCurrentPage()) {
            alert("User Details Submitted");
            form.reset(); // Reset the form
            showPage(0); // Go back to the first page
            userDetailsList.innerHTML = ''; // Clear user details
        }
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    function updateUserDetails() {
        userDetailsList.innerHTML = ''; // Clear existing details
        Array.from(form.elements).forEach(element => {
            if (element.name && element.type !== 'password') { // Exclude password fields
                const listItem = document.createElement('li');
                const labelSpan = document.createElement('span');
                labelSpan.textContent = `${capitalizeFirstLetter(element.name)}: `;
                labelSpan.style.fontWeight = 'bold';
                
                const valueSpan = document.createElement('span');
                valueSpan.textContent = element.value;
    
                listItem.appendChild(labelSpan);
                listItem.appendChild(valueSpan);
    
                userDetailsList.appendChild(listItem);
            }
        });
    }
    
    showPage(0); // Initialize the form on the first page
});
