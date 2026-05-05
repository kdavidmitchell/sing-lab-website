# SING Lab Website

Welcome to the official repository for the **Social Intelligence and Narrative in Games (SING) Lab** website. 

This website is a lightweight, static web application designed to showcase the lab's interdisciplinary research.

## Architecture

To ensure long-term maintainability by lab members without requiring complex build steps or backend servers, the site is built using **Vanilla Web Technologies**:
* **HTML5 / CSS3**: Semantic structure and a responsive, flexbox/grid-based layout.
* **Vanilla JavaScript**: Handles interactive elements (dark mode toggle, mobile menu) and dynamic data fetching.
* **JSON**: Acts as a lightweight Content Management System (CMS) for lab members to easily update site content.

## File Structure

* `index.html` - Home, Mission, and Core Research Tabs
* `events.html` - Symposium details and dynamic countdown timer
* `projects.html` - Featured computational media projects (Data-driven)
* `publications.html` - Academic bibliography cards (Data-driven)
* `people.html` - Lab directory (Data-driven)
* `404.html` - Interactive text-adventure error handling
* `style.css` - Global stylesheet (includes Dark Mode logic and responsive media queries)
* `script.js` - Global interactive logic and JSON `fetch()` requests
* `*.json` - Data sources for dynamic pages (`projects.json`, `publications.json`, `people.json`)
* `media/` - Consolidated directory for all project images and team avatars

## Local Development & Testing

**NOTE:** Because this site uses the JavaScript `fetch()` API to load data from the `.json` files, **you cannot simply double-click the `index.html` file to view it.** Browsers block local file fetching due to CORS (Cross-Origin Resource Sharing) security rules.

To view the site locally, you must run a lightweight local web server:

**Option A: VS Code (Recommended)**
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
2. Open the project folder in VS Code.
3. Right-click `index.html` and select **"Open with Live Server"**.

**Option B: Python**
1. Open your terminal or command prompt.
2. Navigate to the project directory.
3. Run: `python -m http.server` (or `python3 -m http.server`).
4. Open your browser and navigate to `http://localhost:8000`.

## Updating Site Content

You do not need to touch the HTML to update the lab's portfolio. All dynamic content is driven by text files.

* **To add a new publication:** Open `publications.json` and add a new entry following the existing schema.
* **To add a new team member:** Drop their headshot into the `media/` folder, then add their details and image path to `people.json`.
* **To add a new project:** Drop the project image into the `media/` folder, then add the project details to `projects.json`.

## Deployment (GitHub Pages)

This repository is optimized to be hosted entirely for free via **GitHub Pages**. 
Simply push your `main` branch to GitHub, navigate to your repository **Settings > Pages**, and set the source to deploy from the `main` branch root. Your JSON files will be served correctly and fetch automatically in the live environment.