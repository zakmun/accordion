// Get elements with the class 'content-container' from the HTML
const accordion = document.getElementsByClassName('content-container');

// Iterate over each element with the class 'content-container'
for (i = 0; i < accordion.length;  i++) {
    // Add an event listener to each 'content-container' element
    accordion[i].addEventListener("click", function() {
        // Toggle the 'active' class for the clicked 'content-container'
        this.classList.toggle('active');
    });
}
