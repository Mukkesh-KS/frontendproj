document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form reload

    const dobInput = document.getElementById('dob').value;

    if (!dobInput) {
        document.getElementById('age').textContent = "Please enter a valid date.";
        return;
    }


    const dob = new Date(dobInput);
    const today = new Date();

    if (dob > today) {
        document.getElementById('age').textContent = "Date of birth cannot be in the future.";
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('age').textContent = `Your age is ${age} years old`;
});

