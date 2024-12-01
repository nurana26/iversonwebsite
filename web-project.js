document.addEventListener("DOMContentLoaded", () => {
    
    const header = document.querySelector(".header");
    const greeting = document.createElement("p");
    greeting.textContent = "Welcome to our Web Project Tracker!";
    greeting.style.fontStyle = "italic";
    header.appendChild(greeting);

    
    const profileSection = document.querySelector(".team-profiles");
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Profile Links";
    toggleButton.style.margin = "10px 0";
    toggleButton.style.padding = "10px";
    toggleButton.style.backgroundColor = "#4caf50";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "5px";
    toggleButton.style.cursor = "pointer";

    profileSection.insertBefore(toggleButton, profileSection.firstChild);

    toggleButton.addEventListener("click", () => {
        const profileLinks = document.querySelector(".profile-links");
        if (profileLinks.style.display === "none") {
            profileLinks.style.display = "block";
            toggleButton.textContent = "Hide Profile Links";
        } else {
            profileLinks.style.display = "none";
            toggleButton.textContent = "Show Profile Links";
        }
    });

    // Initially hide profile links
    const profileLinks = document.querySelector(".profile-links");
    profileLinks.style.display = "none";
});
