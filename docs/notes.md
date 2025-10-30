The `/docs` folder is meant to include: 

| File                | Purpose                                                                      |
| ------------------- | ---------------------------------------------------------------------------- |
| `notes.md`          | For research, design decisions, ideas, and to-dos.                           |
| `wireframes/`       | A subfolder for sketches, Figma exports, or screenshots.                     |
| `design-guide.md`   | For listing fonts, colors, layout grids, etc.                                |
| `requirements.md`   | (Optional) For school projects — show grading criteria and how you met them. |
| `assets-credits.md` | For noting image sources or references (helps avoid copyright issues).       |


## Class Structure

```bash

<body>
│
├── header
│   ├── nav.header-nav                ← main navigation (logo + links)
│   │   ├── img.icon
│   │   └── ul
│   │       ├── li > a.nav-link (Electric)
│   │       ├── li > a.nav-link (Maybach)
│   │       ├── li > a.nav-link (Accessories)
│   │       └── li > a.nav-link (Stories)
│   │
│   └── nav.header-nav                ← secondary nav (user / cart / burger)
│       └── ul
│           ├── li > a > img (user)
│           ├── li > a > img (shopping bag)
│           └── li > a > img (burger)
│
├── main
│   ├── section.hero
│   │   ├── h2.section-title
│   │   └── p
│   │
│   ├── section.car-gallery
│   │   └── article.card-container
│   │       ├── h3
│   │       ├── p
│   │       ├── img
│   │       └── div.car-gal-container
│   │           ├── a.link-button
│   │           └── div.color-container
│   │               ├── div.color-circle.gray
│   │               ├── div.color-circle.red
│   │               ├── div.color-circle.blue
│   │               └── div.color-circle.black
│   │
│   ├── section.dealerships
│   │   ├── h2.section-title
│   │   ├── p
│   │   └── div.dealer-nightmap
│   │       └── div.dealer-card-container
│   │           ├── h2
│   │           └── a.link-button.long-button
│   │
│   ├── section.features
│   │   └── article.card-container
│   │       ├── h3
│   │       ├── img
│   │       └── a.link-button
│   │
│   ├── section.maybach-red
│   │   ├── h3
│   │   └── p
│   │
│   ├── section.maybach-wheels
│   │   ├── div.container
│   │   │   ├── h2
│   │   │   ├── p
│   │   │   └── a.link-button
│   │   └── img
│   │
│   └── section.appointment
│       ├── p
│       └── a.link-button
│
└── footer
    ├── section.join-newsletter
    │   ├── h3
    │   ├── p
    │   ├── form
    │   │   ├── label[for=email]
    │   │   ├── input#email
    │   │   ├── button.btn
    │   │   ├── input#checkbox
    │   │   └── label[for=checkbox]
    │   └── div.social-media.container
    │       └── ul
    │           ├── li > a > img (facebook)
    │           ├── li > a > img (instagram)
    │           ├── li > a > img (youtube)
    │           ├── li > a > img (linkedin)
    │           └── li > a > img (tiktok)
    │
    └── section.footer-nav
        ├── nav.footer-nav (Explorer)
        │   ├── h4
        │   └── ul > li > a.nav-link (x8)
        │
        ├── nav.footer-nav (About)
        │   ├── h4
        │   └── ul > li > a.nav-link (x5)
        │
        └── nav.footer-nav (Help)
            ├── h4
            └── ul > li > a.nav-link (x7)

```


## Design Files

- [Figma Design Page](https://www.figma.com/design/rNClWJKvueW7qQDXWrtzSg/PROYECTO1?node-id=1-335&t=lJC82ebeB3zpu8YE-0)