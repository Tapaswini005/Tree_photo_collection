# Tree Photo Collection

A cinematic memory experience built with HTML, CSS, and vanilla JavaScript. The page presents a glowing golden tree growing from its roots, blooming with 500 animated leaves, surrounded by cousin photographs and floating atmospheric particles.

## Features

- Sequential tree growth: roots, trunk, main branches, secondary branches, and twigs.
- 500 leaves distributed across the branch structure.
- Staggered leaf blooming with gentle overshoot and ongoing wind movement.
- Floating outline hearts, sparkles, transparent bubbles, and occasional falling leaves.
- Seven cousin photos revealed one at a time after the tree finishes growing.
- Responsive desktop, tablet, and mobile layouts.
- Accessible semantic structure, image alt text, and reduced-motion support.
- User-controlled background music with a play/pause button.

## Project Structure

```text
Tree_photo_collection/
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
└── assets/
	├── images/
	│   ├── cousin1.jpg
	│   ├── cousin2.jpg
	│   ├── cousin3.jpg
	│   ├── cousin4.jpg
	│   ├── cousin5.jpg
	│   ├── cousin6.jpg
	│   └── cousin7.jpg
	└── music/
		└── background.mp3
```

## Run Locally

Open the project folder in VS Code and use the **Live Server** extension:

1. Install Live Server from the VS Code Extensions view.
2. Right-click `index.html`.
3. Select **Open with Live Server**.

The project can also be served by any local static web server. Opening `index.html` directly works for the page, but a local server is recommended for reliable media loading.

## Add Your Media

Place the seven cousin photographs at these exact paths:

```text
assets/images/cousin1.jpg
assets/images/cousin2.jpg
assets/images/cousin3.jpg
assets/images/cousin4.jpg
assets/images/cousin5.jpg
assets/images/cousin6.jpg
assets/images/cousin7.jpg
```

Place the background track at:

```text
assets/music/background.mp3
```

Use valid, non-empty JPG and MP3 files. The page displays a styled memory fallback if an image cannot be decoded.

## Browser Notes

Modern browsers block unexpected audio autoplay. Background music starts only after the visitor clicks **Play music**. The page respects `prefers-reduced-motion` by minimizing animations when that accessibility preference is enabled.

## Technologies

- HTML5 and inline SVG
- CSS animations, responsive media queries, and custom properties
- Vanilla JavaScript
- HTML Canvas for ambient particles
- No frameworks or paid libraries
