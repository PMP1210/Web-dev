alert("welcome to web development")

function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the form element
    const form = event.target;

    // Create a FormData object
    const formData = new FormData(form);

    // Get the values
    const username = formData.get('username');
    const gender = formData.get('gender');
    const hobbies = formData.getAll('hobby');
    const description = formData.get('description');
    const birthYear = formData.get('birthYear');

    // Validate the username
    if (!/^[A-Za-z]+$/.test(username)) {
        alert("Please enter only alphabetic characters.");
        return false;
    }

    if (gender == "Female") {
        alert("we don't accept the female form.")
        return false
    }

    if (hobbies.length <= 0) {
        alert("we require atleast one hobby")
        return false
    }

    if (hobbies.includes("Dancing")) {
        alert("we don't require dancing hobbi.")
        return false
    }
    // Display the values (for testing purposes)
    console.log('Username:', username);
    console.log('Gender:', gender);
    console.log('Hobbies:', hobbies);
    console.log('Description:', description);
    console.log('Birth Year:', birthYear);

    // Continue form submission or further validation here
    return true;
}
z