# AI-Powered Email Template Generator Service

This project is a backend microservice that generates customer-friendly email templates using AI.  
It also includes a simple frontend UI to demonstrate real-world usage without relying on Postman.

The service is designed with clean controller–service separation and supports AI fallback handling for reliability.

---

## 🚀 Features

- REST API to generate email templates
- Accepts purpose, recipient name, and tone
- AI-powered email generation using **Google Gemini**
- Tone-based prompt handling (polite / professional)
- Logs AI response time
- Graceful fallback if AI service is unavailable
- Environment variable support
- Simple frontend demo included

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Axios
- Nodemon
- Google Gemini AI
- HTML, CSS, JavaScript (Frontend demo)

---

## 📁 Project Structure
```

ai-email-generator/
│
├── src/
│ ├── controllers/
│ │ └── emailController.js
│ ├── routes/
│ │ └── emailRoutes.js
│ ├── services/
│ │ └── aiEmailService.js
│ └── server.js
│
├── public/
│ ├── css/
│ │ └── style.css
│ ├── js/
│ │ └── script.js
│ └── index.html
│
├── .env
├── .gitignore
├── package.json
└── README.md

```
---

## 🔐 Environment Setup

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
```

## 🌐 Frontend Interface

A simple frontend UI is included inside the backend project to demonstrate real-world usage of the Email Generator API without using Postman.

The frontend allows users to generate AI-powered email templates directly from the browser.

### Frontend Features

- Clean and responsive user interface
- Built using plain HTML, CSS, and JavaScript
- Separate files for structure (HTML), styling (CSS), and logic (JavaScript)
- Input fields for:
  - Purpose of the email
  - Recipient name
  - Tone selection (polite / professional)
- Uses Fetch API to call the backend REST API
- Displays:
  - Generated email content
  - AI response time
- Includes basic loading and error handling

### Folder Structure (Frontend)
```
public/
├── index.html
├── css/
│ └── style.css
└── js/
└── script.js

```
### How the Frontend Works

1. The user enters the purpose, recipient name, and selects a tone.
2. On clicking **Generate Email**, a POST request is sent to: /api/email/generate

3. The backend processes the request using AI (Gemini with fallback).
4. The generated email and AI response time are returned and displayed on the UI.

### How to Access the Frontend

After starting the server, open the following URL in your browser: http://localhost:3000

This frontend is intended for demonstration and testing purposes and helps visualize how the backend API can be consumed by a client application.


