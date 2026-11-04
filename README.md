# Nabil Wasir | Portfolio

A responsive four-page portfolio website built with plain HTML, CSS and JavaScript. No build step or dependencies.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Experience & Projects | `projects.html` |
| Qualification (with CV download) | `qualification.html` |
| Contact Me | `contact.html` |

## Run locally

Open the folder in VS Code and start `index.html` with the Live Server extension, or double-click `index.html`.

## Structure

```
index.html, projects.html, qualification.html, contact.html
css/style.css     all styles
js/script.js      mobile menu and contact form
images/           portrait and project screenshots
assets/CV.pdf     file used by the Download CV button
```

## Publish with GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Your site will be live at `https://<username>.github.io/<repository>/`.

## Notes

- The contact form opens the visitor's email app with the message prefilled. To receive messages directly, connect it to a form service such as Formspree.
- To change the CV, replace `assets/CV.pdf` and keep the same file name.
