// =========================================
// EASTER EGG 1: The Recruitment Node
// =========================================
const asciiArt = `
  ____ ___ _   _  ____ 
 / ___|_ _| \\ | |/ ___|
 \\___ \\| ||  \\| | |  _ 
  ___) | || |\\  | |_| |
 |____/___|_| \\_|\\____|
`;
console.log(`%c${asciiArt}`, "color: #B38F00; font-family: monospace; font-weight: bold;");
console.log("%cWelcome to the SING Lab.", "color: #B38F00; font-size: 16px; font-weight: bold;");
console.log("%cYou have discovered a hidden narrative branch. If you are reading this, you clearly have the curiosity required for expressive intelligence research. Introduce yourself at our next event.", "color: #3A4F6B; font-style: italic;");

// A dictionary of clean SVG paths for our social icons
const svgIcons = {
    github: '<svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
    twitter: '<svg viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg>',
    linkedin: '<svg viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>',
    website: '<svg viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/></svg>'
};

function openTab(evt, tabName) {
    // Get all elements with class="tab-content" and hide them
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Get all elements with class="tab-btn" and remove the class "active"
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", () => {
    
    // Hamburger Menu Logic
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Only run if the elements exist on the page
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });
    }

});

// =========================================
// Active Navigation State Logic
// =========================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Get the current file name from the URL (e.g., "people.html")
    const currentPath = window.location.pathname.split("/").pop();

    // 2. Select all links inside the navigation menu
    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(link => {
        const href = link.getAttribute("href");
        
        // 3. If the link's href matches the current URL, add the 'active' class
        // (Also handles the edge case where the URL is just the root domain)
        if (currentPath === href || (currentPath === "" && href === "index.html")) {
            link.classList.add("active");
        }
    });
});

// =========================================
// Hero Header Glitch/Scramble Easter Egg
// =========================================
const glitchTarget = document.getElementById('glitch-target');

if (glitchTarget) {
    // Dynamically grab the text of the header so it works on any page
    const originalText = glitchTarget.innerText;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    let isGlitching = false;

    // Add a pointer cursor so users know it is interactive
    glitchTarget.style.cursor = 'pointer';
    glitchTarget.style.userSelect = 'none';

    glitchTarget.addEventListener('click', () => {
        if (isGlitching) return;
        isGlitching = true;

        let iterations = 0;
        const maxIterations = 15;
        
        const interval = setInterval(() => {
            glitchTarget.innerText = originalText.split('')
                .map((char, index) => {
                    // Preserve spaces so the layout doesn't break
                    if (char === ' ') return ' '; 
                    
                    // Reveal original characters sequentially
                    if (index < iterations / (maxIterations / originalText.length)) {
                        return originalText[index];
                    }
                    
                    // Scramble the rest
                    return characters[Math.floor(Math.random() * characters.length)];
                })
                .join('');
            
            iterations++;
            
            if (iterations >= maxIterations) {
                clearInterval(interval);
                glitchTarget.innerText = originalText;
                isGlitching = false;
            }
        }, 50); // Speed of the scramble
    });
}

// =========================================
// Symposium Countdown Timer
// =========================================
const countdownElement = document.getElementById('symposium-countdown');

if (countdownElement) {
    // Set to June 5, 2026
    const symposiumDate = new Date('June 5, 2026 09:00:00').getTime();

    const updateTimer = setInterval(() => {
        const now = new Date().getTime();
        const distance = symposiumDate - now;

        if (distance < 0) {
            clearInterval(updateTimer);
            countdownElement.innerHTML = "<div class='time-box'><span>LIVE</span><small>Event Started</small></div>";
            return;
        }

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        // Inject the HTML
        countdownElement.innerHTML = `
            <div class="time-box">
                <span>${days}</span>
                <small>Days</small>
            </div>
            <div class="time-box">
                <span>${hours}</span>
                <small>Hours</small>
            </div>
            <div class="time-box">
                <span>${minutes}</span>
                <small>Mins</small>
            </div>
        `;
    }, 1000);
}

// =========================================
// JSON Data Fetching: Publications
// =========================================
const pubContainer = document.getElementById('publications-container');

if (pubContainer) {
    // Fetch the local JSON file
    fetch('publications.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not load publications data.");
            }
            return response.json();
        })
        .then(data => {
            // Remove the "Loading..." message
            pubContainer.innerHTML = '';

            // Loop through each year in the JSON
            data.forEach((yearBlock, index) => {
                
                // Create and append the Year header (<h2>)
                const yearHeader = document.createElement('h2');
                yearHeader.textContent = yearBlock.year;
                if (index > 0) yearHeader.style.marginTop = "3rem"; // Add spacing for older years
                pubContainer.appendChild(yearHeader);

                // Create the unordered list (<ul>)
                const pubList = document.createElement('ul');
                pubList.className = 'pub-list';

                // Loop through each paper in that year
                yearBlock.papers.forEach(paper => {
                    const listItem = document.createElement('li');
                    listItem.className = 'pub-item';
                    
                    // Handle optional details
                    const detailsHTML = paper.details ? `, ${paper.details}` : '';
                    
                    // Handle dynamic link buttons
                    let linksHTML = '<div class="pub-actions">';
                    if (paper.links) {
                        if (paper.links.pdf) {
                            linksHTML += `<a href="${paper.links.pdf}" target="_blank" class="pub-action-btn">PDF</a>`;
                        }
                        if (paper.links.bibtex) {
                            linksHTML += `<a href="${paper.links.bibtex}" target="_blank" class="pub-action-btn">BibTeX</a>`;
                        }
                    }
                    linksHTML += '</div>';
                    
                    // Inject the paper details using template literals
                    listItem.innerHTML = `
                        <div class="pub-title">${paper.title}</div>
                        <div class="pub-authors">${paper.authors}</div>
                        <div class="pub-venue-block">
                            <span class="pub-venue">${paper.venue}</span>${detailsHTML}
                        </div>
                        ${linksHTML}
                    `;
                    pubList.appendChild(listItem);
                });

                // Append the finished list to the main container
                pubContainer.appendChild(pubList);
            });
        })
        .catch(error => {
            pubContainer.innerHTML = `<p style="color: red;">Error loading publications. Please check your connection.</p>`;
            console.error("Fetch error:", error);
        });
}

// =========================================
// JSON Data Fetching: Projects
// =========================================
const projectsGrid = document.getElementById('projects-grid');

if (projectsGrid) {
    // Fetch the local JSON file
    fetch('projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not load projects data.");
            }
            return response.json();
        })
        .then(data => {
            // Remove the "Loading..." message
            projectsGrid.innerHTML = '';

            // Loop through each project in the JSON array
            data.forEach(project => {
                
                // Create the card container
                const card = document.createElement('div');
                card.className = 'project-card';
                
                // Inject the project details using template literals
                card.innerHTML = `
                    <img src="${project.imageSrc}" alt="${project.imageAlt}" class="image-frame" style="min-height: 200px; margin-bottom: 1.5rem;">
                    <h3>${project.title}</h3>
                    <span class="project-meta">${project.category} | ${project.status}</span>
                    <p>${project.description}</p>
                `;
                
                // Append the finished card to the grid
                projectsGrid.appendChild(card);
            });
        })
        .catch(error => {
            projectsGrid.innerHTML = `<p style="color: red;">Error loading projects. Please check your connection.</p>`;
            console.error("Fetch error:", error);
        });
}

// =========================================
// JSON Data Fetching: People
// =========================================
const peopleContainer = document.getElementById('people-container');

if (peopleContainer) {
    // Fetch the local JSON file
    fetch('people.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not load people data.");
            }
            return response.json();
        })
        .then(data => {
            // Remove the "Loading..." message
            peopleContainer.innerHTML = '';

            // Loop through each category in the JSON array
            data.forEach(group => {

                // Create and append the Category header (<h2>)
                const categoryHeader = document.createElement('h2');
                categoryHeader.textContent = group.category;
                peopleContainer.appendChild(categoryHeader);

                // Create the team grid container
                const teamGrid = document.createElement('div');
                teamGrid.className = 'team-grid';
                teamGrid.style.marginBottom = '4rem'; // Keeps spacing consistent between groups

                // Loop through each member in that category
                group.members.forEach(member => {
                    
                    // 1. Build Social Icons (if they exist)
                    let socialsHTML = '';
                    if (member.socials) {
                        for (const [platform, url] of Object.entries(member.socials)) {
                            if (svgIcons[platform]) {
                                socialsHTML += `<a href="${url}" target="_blank" class="social-icon" aria-label="${platform}">${svgIcons[platform]}</a>`;
                            }
                        }
                    }

                    // 2. Build the Contact Strip (Email + Socials)
                    let contactHTML = '';
                    if (member.email || socialsHTML !== '') {
                        contactHTML = `
                        <div class="contact-strip">
                            ${member.email ? `<a href="mailto:${member.email}" class="email-link">📧 ${member.email}</a>` : ''}
                            <div class="social-icons">${socialsHTML}</div>
                        </div>
                        `;
                    }

                    // Create the card container
                    const card = document.createElement('div');
                    card.className = 'team-card';

                    // Inject the member details, headshot, and the new contact strip
                    card.innerHTML = `
                        <img src="${member.imageSrc || 'media/default-avatar.jpg'}" alt="${member.name}" class="profile-pic">
                        <h3>${member.name}</h3>
                        <span class="role">${member.role}</span>
                        <p>${member.bio}</p>
                        ${contactHTML}
                    `;

                    // Append the finished card to the grid
                    teamGrid.appendChild(card);
                });

                // Append the finished grid to the main container
                peopleContainer.appendChild(teamGrid);
            });
        })
        .catch(error => {
            peopleContainer.innerHTML = `<p style="color: red;">Error loading people. Please check your connection.</p>`;
            console.error("Fetch error:", error);
        });
}

// =========================================
// Dark Mode Toggle Logic (Contrast Circle)
// =========================================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggle) {
    // 1. Check if the user already set a preference
    const currentTheme = localStorage.getItem('sing-lab-theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    // 2. Listen for clicks on the toggle button
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        // 3. Save the preference
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('sing-lab-theme', 'dark');
        } else {
            localStorage.setItem('sing-lab-theme', 'light');
        }
    });
}

// =========================================
// EASTER EGG: Terminal Theme Persistence
// =========================================
// Check if the user previously activated the terminal theme
if (localStorage.getItem('sing-lab-terminal') === 'active') {
    document.body.classList.add('terminal-theme');
}

// =========================================
// Global Banner Dismissal Logic
// =========================================
const banner = document.getElementById('symposium-banner');
const closeBannerBtn = document.getElementById('close-banner');

if (banner && closeBannerBtn) {
    // Check if the user already closed it in a previous session/page
    if (localStorage.getItem('sing-banner-dismissed') === 'true') {
        banner.style.display = 'none';
    }

    // Listen for the close click
    closeBannerBtn.addEventListener('click', () => {
        banner.style.display = 'none';
        localStorage.setItem('sing-banner-dismissed', 'true');
    });
}

// =========================================
// EASTER EGG 2: The Konami Terminal
// =========================================
// Sequence: Up, Up, Down, Down, Left, Right, Left, Right, B, A
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    // Normalize to lowercase so 'B' or 'b' works
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    
    if (key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Toggle the class and capture whether it is now active or not
            const isTerminalActive = document.body.classList.toggle('terminal-theme');
            
            // Save or remove the state in localStorage based on the toggle
            if (isTerminalActive) {
                localStorage.setItem('sing-lab-terminal', 'active');
                console.log("%cTERMINAL OVERRIDE ENGAGED", "color: #00ff00; font-family: monospace; font-size: 14px; font-weight: bold;");
            } else {
                localStorage.removeItem('sing-lab-terminal');
                console.log("%cTERMINAL OVERRIDE DISENGAGED", "color: #00ff00; font-family: monospace; font-size: 14px; font-weight: bold;");
            }
            
            konamiIndex = 0; // Reset sequence
        }
    } else {
        konamiIndex = 0; // Reset if they mess up the sequence
    }
});

// =========================================
// EASTER EGG 3: Unstable Narrative Node
// =========================================
const unstableText = document.querySelector('.unstable-text');

if (unstableText) {
    unstableText.addEventListener('click', () => {
        // Drop them straight into the text-adventure 404 page
        window.location.href = '404.html';
    });
}