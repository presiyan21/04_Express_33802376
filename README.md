# My Personal Express Web Page

This is a simple **Node.js + Express** web application that serves a personal profile and multiple routes, including an About Me page, Contact page, and dynamically generated routes.  
It displays my education, skills, work experience, and achievements in a clean HTML layout.

## 🚀 Features
- Built with **Express.js**
- Organized with a separate **routes folder**
- Includes multiple pages:
  - `/` — Home  
  - `/about` — About Me page (styled HTML)  
  - `/contact` — Contact information  
  - `/date` — Current date and time  
  - `/welcome/:name` — Personalized welcome page  
  - `/chain` — Example of Express middleware chaining  
  - `/file` — Serves a static HTML file (`a.html`)
- Modular routing for clean and maintainable code
- Runs locally on port **8000**

## 🧠 How to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/04_express_33802376.git

Navigate into the project folder:

cd 04_express_33802376


Install dependencies:

npm install express


Start the server:

node index.js


Open your browser and visit:

http://localhost:8000/

🧩 Project Structure
04_Express_33802376/
│
├── index.js                # Main entry file
├── routes/
│   └── main.js             # Contains all route handlers
├── a.html                  # HTML file served by /file route
└── README.md               # Project documentation
