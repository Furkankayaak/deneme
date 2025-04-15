document.addEventListener('DOMContentLoaded', () => {

    // --- Optional: Hamburger Menu Click Toggle (Keep if using) ---
    const hamburgerContainer = document.querySelector('.hamburger-container');
    const mainMenu = document.querySelector('.main-menu');

    if (hamburgerContainer && mainMenu) {
        const hamburgerIcon = hamburgerContainer.querySelector('.hamburger-icon');

        hamburgerIcon.addEventListener('click', (event) => {
             event.stopPropagation();
            mainMenu.classList.toggle('open');
            // Optional: Add body class to prevent scrolling when menu open
            document.body.classList.toggle('menu-open-no-scroll');
        }); // End of hamburgerIcon click listener

        document.addEventListener('click', (event) => {
            // Check if the click is outside the menu AND outside the hamburger icon
            if (mainMenu.classList.contains('open') && !mainMenu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
                 mainMenu.classList.remove('open');
                 document.body.classList.remove('menu-open-no-scroll');
            }
        }); // End of document click listener
    } // End of if(hamburgerContainer && mainMenu)

}); // End of DOMContentLoaded listener

// NO MORE CODE AFTER THIS LINE IN script.js