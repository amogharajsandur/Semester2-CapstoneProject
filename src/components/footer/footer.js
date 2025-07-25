let footerElement = document.querySelector("footer"); // Use querySelector for a single element

let footer = `
    <p>© OmVaibhava Store X <a target="_blank" href="https://www.linkedin.com/in/amogharajsandur/">Amogha Raj Sandur</a></p>
    <nav class="social-icons">
        <a href="https://www.instagram.com/amogharajsandur/" target="_blank"><img draggable="false" src="assets/icons/instagram-icon.svg" alt="instagram-icon"></a>
        <a href="https://www.linkedin.com/in/amogharajsandur/" target="_blank"><img draggable="false" src="assets/icons/linkedin-icon.svg" alt="linkedin-icon"></a>
        <a href="https://www.youtube.com/@amogharajsandur" target="_blank"><img draggable="false" src="assets/icons/yt-icon.svg" alt="youtube-icon"></a>
    </nav>
`;

function footerRenderer() {
    if (footerElement) {
        footerElement.innerHTML = footer;
        // console.log("footer inserted");
    } else {
        console.error("Footer element not found!");
    }
}
footerRenderer();