# MediHub – Modernized Front-End

MediHub is a redesigned front-end prototype for an online pharmacy website. The project is built using only **HTML, CSS, and JavaScript**, making it lightweight and easy to run without any build tools, frameworks, or backend setup.

Simply open `index.html` in your browser , and the website is ready to use.

---

# Project Structure

```text
medihub/
├── index.html              # Home page
├── medicine.html           # Product catalogue
├── about.html              # About page
├── contact.html            # Contact page
├── faqs.html               # Frequently Asked Questions
├── sign-in.html            # Login page
├── sign-up.html            # Registration page
│
├── css/
│   └── styles.css          # Global styles
│
├── js/
│   └── main.js             # Website functionality
│
└── images/                 # Product images
```

All pages share the same stylesheet (`styles.css`) and JavaScript file (`main.js`), allowing updates to be managed from a single place.

---

# Design Theme

The website uses an **"Amber Label"** theme inspired by real medicine packaging instead of the typical blue healthcare design.

### Color Palette

| Variable    | Color     | Purpose                                |
| ----------- | --------- | -------------------------------------- |
| `--primary` | `#0E5C52` | Navigation, buttons, links             |
| `--amber`   | `#D9901F` | Highlights and call-to-action elements |
| `--bg`      | `#FBF8F2` | Background color                       |
| `--ink`     | `#182420` | Main text                              |
| `--clay`    | `#B24A3A` | Error messages and prescription badges |

### Typography

* **Fraunces** – Headings
* **Inter** – Body text
* **IBM Plex Mono** – Prices, labels, and product categories

The design also features custom product cards with an amber header and a dashed divider inspired by prescription labels.

---

# Features

### Home Page

* Responsive landing page
* Featured medicine section
* Clean and modern UI

### Medicine Catalogue

* Displays all medicines from the `PRODUCTS` array
* Live search functionality
* Category-based filtering
* Client-side rendering

### Shopping Cart

* Add products to cart
* Cart notification badge
* Toast messages when products are added

> **Note:** The cart is stored only in memory. It resets when the page is refreshed because no backend or local storage is used.

### FAQ Page

* Expand/collapse accordion
* Live search for questions
* Accessible using `aria-expanded`

### Forms

Available on:

* Contact
* Sign In
* Sign Up

Features include:

* Required field validation
* Email validation
* Password visibility toggle
* Password strength indicator
* Password confirmation validation

Currently, these forms do not submit data to any server.

---

# Images

All product images are loaded from the `images/` folder using their original filenames.

Since the original image collection contains different resolutions and dimensions, the project avoids enlarging small images to prevent blurring.

For a more consistent appearance, it is recommended to normalize the source images by placing each product on a fixed-size canvas before using them in the project.

---

# Customization

### Update Colors

Edit the CSS variables at the top of:

```text
css/styles.css
```

### Add or Edit Products

Modify the `PRODUCTS` array inside:

```text
js/main.js
```

Each product includes:

* ID
* Name
* Category
* Price
* Image
* Optional prescription flag

### Featured Products

Update the `featuredIds` array inside the `initFeaturedGrid()` function in `main.js`.

### Navigation

Since this project uses plain HTML, the navigation and footer are repeated across pages. Any structural changes should be made in each HTML file.

---

# Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Responsive Design
* CSS Variables
* Flexbox
* Grid Layout

---

# Current Limitations

* No backend integration
* No authentication system
* No payment gateway
* No database connectivity
* Cart data is not persistent
* Contact form does not send emails
* No browser storage (LocalStorage or SessionStorage)

---

# Future Improvements

* Connect with a backend API
* User authentication
* Persistent shopping cart
* Order management
* Online payment integration
* Product database
* Email functionality
* User profiles and order history

---

## Getting Started

1. Download or clone the repository.
2. Open the project folder.
3. Launch `index.html` in your browser or serve the project using a local development server.

No installation or build process is required.
