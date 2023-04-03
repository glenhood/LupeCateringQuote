document.getElementById("fieldsform").addEventListener('Submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the form data
    var formData = new FormData(this);

    // Build the query string
    var queryString = '';
    for (var pair of formData.entries()) {
        queryString += encodeURIComponent(pair[0]) + '=' + encodeURIComponent(pair[1]) + '&';
    }

    // Redirect to the next page with the query string
    window.location.href = "Lupe.html";
});

console.log(queryString)
