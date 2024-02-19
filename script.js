document.querySelectorAll('.thumbnail').forEach(item => {
    item.addEventListener('click', function() {
        const year = this.getAttribute('data-year');
        let iframeSrc;

        // Check if the thumbnail is for the year 2022
        if (year === "2022") {
            // Set the iframeSrc to the special link for 2022
            iframeSrc = "https://allanrodz.github.io/SimplePDF/";
        } else {
            // Set the iframeSrc to the standard link for other years
            iframeSrc = `https://allanrodz.github.io/yearbook${year}/`;
        }

        // Now, use the determined iframeSrc for the iframe and display it
        document.getElementById('yearbookFrame').src = iframeSrc;
        document.getElementById('overlay').style.display = 'flex';
    });
});


document.getElementById('overlay').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

