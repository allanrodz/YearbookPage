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

function toggleFullscreen() {
    const iframe = document.getElementById('yearbookFrame');
    const button = document.getElementById('fullscreenButton');
    
    if (!document.fullscreenElement) {
        // Enter fullscreen
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { // Firefox
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { // IE/Edge
            iframe.msRequestFullscreen();
        }
        button.textContent = "Exit Fullscreen";
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        button.textContent = "View Fullscreen";
    }
}

// Listen for fullscreen change events to update button text accordingly
document.addEventListener('fullscreenchange', () => {
    const button = document.getElementById('fullscreenButton');
    if (!document.fullscreenElement) {
        button.textContent = "View Fullscreen";
    } else {
        button.textContent = "Exit Fullscreen";
    }
});
document.addEventListener('webkitfullscreenchange', () => {
    const button = document.getElementById('fullscreenButton');
    if (!document.webkitFullscreenElement) {
        button.textContent = "View Fullscreen";
    } else {
        button.textContent = "Exit Fullscreen";
    }
});
document.addEventListener('mozfullscreenchange', () => {
    const button = document.getElementById('fullscreenButton');
    if (!document.mozFullScreenElement) {
        button.textContent = "View Fullscreen";
    } else {
        button.textContent = "Exit Fullscreen";
    }
});
document.addEventListener('msfullscreenchange', () => {
    const button = document.getElementById('fullscreenButton');
    if (!document.msFullscreenElement) {
        button.textContent = "View Fullscreen";
    } else {
        button.textContent = "Exit Fullscreen";
    }
});
