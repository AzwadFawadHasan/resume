window.addEventListener('load', function() {
    // Set a timeout to wait for 1500ms
    setTimeout(function() {
        // Select the icon element
        const achievementsIcon = document.getElementById('achievements-icon');
        
        // Show the icon by setting display to 'inline-block'
        achievementsIcon.style.display = 'inline-block';
    }, 1500); // 1500ms = 1.5 seconds
});
// Wait for the window to fully load
window.addEventListener('load', function() {
    // Set a timeout to wait for 1 second after the load event
    setTimeout(function() {
        // Select the icon element
        const aboutIcon = document.getElementById('about-icon');
        const eduIcon = document.getElementById('edu-icon');
        const workIcon = document.getElementById('work-icon');
        const pubIcon = document.getElementById('pub-icon');
        const codingIcon = document.getElementById('coding-icon');
        
        const achievementsIcon = document.getElementById('achievements-icon');
        const research_interestIcon = document.getElementById('research_interest-icon');
        const volunteeringIcon = document.getElementById('volunteering-icon');
        const tech_stackIcon = document.getElementById('tech_stack-icon');
        const certIcon = document.getElementById('cert-icon');
        const blogIcon = document.getElementById('blog-icon');
        const miscIcon = document.getElementById('misc-icon');
        
        
        // Remove the delay and state attributes
        aboutIcon.removeAttribute('delay');
        aboutIcon.removeAttribute('state');

        // Remove the delay and state attributes
        eduIcon.removeAttribute('delay');
        eduIcon.removeAttribute('state');

        // Remove the delay and state attributes
        workIcon.removeAttribute('delay');
        workIcon.removeAttribute('state');

        // Remove the delay and state attributes
        pubIcon.removeAttribute('delay');
        pubIcon.removeAttribute('state');

        // achievementsIcon.style.display = 'inline-block';

        // Remove the delay and state attributes
        codingIcon.removeAttribute('delay');
        codingIcon.removeAttribute('state');

        // Remove the delay and state attributes
        achievementsIcon.removeAttribute('delay');
        achievementsIcon.removeAttribute('state');

        // Remove the delay and state attributes
        research_interestIcon.removeAttribute('delay');
        research_interestIcon.removeAttribute('state');

        // Remove the delay and state attributes
        volunteeringIcon.removeAttribute('delay');
        volunteeringIcon.removeAttribute('state');

        // Remove the delay and state attributes
        tech_stackIcon.removeAttribute('delay');
        tech_stackIcon.removeAttribute('state');

        // Remove the delay and state attributes
        certIcon.removeAttribute('delay');
        certIcon.removeAttribute('state');

        // Remove the delay and state attributes
        blogIcon.removeAttribute('delay');
        blogIcon.removeAttribute('state');

        // Remove the delay and state attributes
        miscIcon.removeAttribute('delay');
        miscIcon.removeAttribute('state');

        
        // Change the trigger to 'boomerang'
        aboutIcon.setAttribute('trigger', 'boomerang');
        eduIcon.setAttribute('trigger', 'boomerang');
        workIcon.setAttribute('trigger', 'boomerang');
        pubIcon.setAttribute('trigger', 'boomerang');
        codingIcon.setAttribute('trigger', 'boomerang');
        achievementsIcon.setAttribute('trigger', 'boomerang');
        research_interestIcon.setAttribute('trigger', 'boomerang');
        volunteeringIcon.setAttribute('trigger', 'boomerang');
        tech_stackIcon.setAttribute('trigger', 'boomerang');
        certIcon.setAttribute('trigger', 'boomerang');
        blogIcon.setAttribute('trigger', 'boomerang');
        miscIcon.setAttribute('trigger', 'boomerang');
    }, 4300); // 1000ms = 1 second
});





// Wait for 5 seconds before starting to listen for the click event
setTimeout(function() {
// Get the nav item and the icon element by their IDs
const aboutLink = document.getElementById('about-link');
const eduLink = document.getElementById('edu-link');
const workLink = document.getElementById('work-link');
const pubLink = document.getElementById('pub-link');
const codingLink = document.getElementById('coding-link');
const achievementsLink = document.getElementById('achievements-link');
const research_interestLink = document.getElementById('research_interest-link');
const volunteeringLink = document.getElementById('volunteering-link');
const tech_stackLink = document.getElementById('tech_stack-link');
const certLink = document.getElementById('cert-link');
const blogLink = document.getElementById('blog-link');
const miscLink = document.getElementById('misc-link');

const aboutIcon = document.getElementById('about-icon');
const eduIcon = document.getElementById('edu-icon');
const workIcon = document.getElementById('work-icon');
const pubIcon = document.getElementById('pub-icon');
const codingIcon = document.getElementById('coding-icon');
const achievementsIcon = document.getElementById('achievements-icon');
const research_interestIcon = document.getElementById('research_interest-icon');
const volunteeringIcon = document.getElementById('volunteering-icon');
const tech_stackIcon = document.getElementById('tech_stack-icon');
const certIcon = document.getElementById('cert-icon');
const blogIcon = document.getElementById('blog-icon');
const miscIcon = document.getElementById('misc-icon');

// Listen for a click event on the nav item
aboutLink.addEventListener('click', function() {
// Change the trigger to "loop" when clicked
aboutIcon.setAttribute('trigger', 'loop');
// Wait for 1 second, then change the trigger to "boomerang"
setTimeout(function() {
    aboutIcon.setAttribute('trigger', 'boomerang');
    }, 1000); // 1 second delay
});

// Listen for a click event on the nav item
eduLink.addEventListener('click', function() {
// Change the trigger to "loop" when clicked
eduIcon.setAttribute('trigger', 'loop');
// Wait for 1 second, then change the trigger to "boomerang"
setTimeout(function() {
    eduIcon.setAttribute('trigger', 'boomerang');
    }, 1000); // 1 second delay
});



// Listen for a click event on the nav item
workLink.addEventListener('click', function() {
// Change the trigger to "loop" when clicked
workIcon.setAttribute('trigger', 'loop');
// Wait for 1 second, then change the trigger to "boomerang"
setTimeout(function() {
    workIcon.setAttribute('trigger', 'boomerang');
    }, 1000); // 1 second delay
});


// Listen for a click event on the nav item
pubLink.addEventListener('click', function() {
// Change the trigger to "loop" when clicked
pubIcon.setAttribute('trigger', 'loop');
// Wait for 1 second, then change the trigger to "boomerang"
setTimeout(function() {
    pubIcon.setAttribute('trigger', 'boomerang');
    }, 1000); // 1 second delay
});


// Listen for a click event on the nav item
codingLink.addEventListener('click', function() {
// Change the trigger to "loop" when clicked
codingIcon.setAttribute('trigger', 'loop');
// Wait for 1 second, then change the trigger to "boomerang"
setTimeout(function() {
    codingIcon.setAttribute('trigger', 'boomerang');
    }, 1000); // 1 second delay
});


// Listen for a click event on the nav item
achievementsLink.addEventListener('click', function() {
// Change the trigger to "loop" when clicked
achievementsIcon.setAttribute('trigger', 'loop');
// Wait for 1 second, then change the trigger to "boomerang"
setTimeout(function() {
    achievementsIcon.setAttribute('trigger', 'boomerang');
    }, 1000); // 1 second delay
});


// Listen for a click event on the nav item
research_interestLink.addEventListener('click', function() {
// Change the trigger to "loop" when clicked
research_interestIcon.setAttribute('trigger', 'loop');
// Wait for 1 second, then change the trigger to "boomerang"
setTimeout(function() {
    research_interestIcon.setAttribute('trigger', 'boomerang');
    }, 1000); // 1 second delay
});



// Listen for a click event on the nav item
volunteeringLink.addEventListener('click', function() {
// Change the trigger to "loop" when clicked
volunteeringIcon.setAttribute('trigger', 'loop');
// Wait for 1 second, then change the trigger to "boomerang"
setTimeout(function() {
    volunteeringIcon.setAttribute('trigger', 'boomerang');
    }, 1000); // 1 second delay
});
    


// Listen for a click event on the nav item
tech_stackLink.addEventListener('click', function() {
    // Change the trigger to "loop" when clicked
    tech_stackIcon.setAttribute('trigger', 'loop');
    // Wait for 1 second, then change the trigger to "boomerang"
    setTimeout(function() {
        tech_stackIcon.setAttribute('trigger', 'boomerang');
        }, 1000); // 1 second delay
    });
    



// Listen for a click event on the nav item
certLink.addEventListener('click', function() {
    // Change the trigger to "loop" when clicked
    certIcon.setAttribute('trigger', 'loop');
    // Wait for 1 second, then change the trigger to "boomerang"
    setTimeout(function() {
        certIcon.setAttribute('trigger', 'boomerang');
        }, 1000); // 1 second delay
    });

    
// Listen for a click event on the nav item
pubLink.addEventListener('click', function() {
    // Change the trigger to "loop" when clicked
    pubIcon.setAttribute('trigger', 'loop');
    // Wait for 1 second, then change the trigger to "boomerang"
    setTimeout(function() {
        pubIcon.setAttribute('trigger', 'boomerang');
        }, 1000); // 1 second delay
    });

    

// Listen for a click event on the nav item
blogLink.addEventListener('click', function() {
    // Change the trigger to "loop" when clicked
    blogIcon.setAttribute('trigger', 'loop');
    // Wait for 1 second, then change the trigger to "boomerang"
    setTimeout(function() {
        blogIcon.setAttribute('trigger', 'boomerang');
        }, 1000); // 1 second delay
    });
    
miscLink.addEventListener('click', function() {
    // Change the trigger to "loop" when clicked
    miscIcon.setAttribute('trigger', 'loop');
    // Wait for 1 second, then change the trigger to "boomerang"
    setTimeout(function() {
        miscIcon.setAttribute('trigger', 'boomerang');
        }, 1000); // 1 second delay
    });
    



}, 5000); // 5 seconds delay before starting to listen






