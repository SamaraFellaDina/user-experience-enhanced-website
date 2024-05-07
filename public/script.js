const likeButton = document.querySelectorAll("#share")

document.addEventListener('DOMContentLoaded', function() {
    const likeCheckbox = document.querySelector('.checkbox-button input[type="checkbox"]');
    const likeText = document.getElementById('checkbox-button'); // Assuming there's an element displaying the like count
    
    // Add event listener to the checkbox for change event
    likeCheckbox.addEventListener('change', async function() {
        let likeCount = parseInt(likeText.textContent);

        // Increment or decrement the like count based on the checkbox state
        if (this.checked) {
            likeCount++;
        } else {
            likeCount--;
        }

        // Update the like count display
        likeText.textContent = likeCount;

        // Update the like count in the API
        fetch(form.action, {
            method: form.method,
            body: new URLSearchParams({'shares': shares})
        }).then(function(response) {
            return response.text()
        }).then(function(responseHTML) {
            console.log(responseHTML);
        });
    });
});
