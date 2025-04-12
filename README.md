# 📬 Bulk Mail App - Backend

An Express.js backend for sending bulk emails using Gmail and Nodemailer. This app receives email lists and messages from the frontend, fetches email credentials stored in MongoDB, and sends emails to all provided addresses.

---

## 🔗 Related Frontend

Check out the React frontend repo here:  
👉 [Bulk Mail App - Frontend](https://bulkmail-frontend-alpha.vercel.app/)

---

## ⚙️ Features

- 📩 Send emails to a list of recipients
- 🔐 Credentials securely stored in MongoDB
- 📦 Uses Nodemailer with Gmail service
- 🌐 CORS-enabled for frontend communication

---

## 🛠️ Tech Stack

- **Node.js** with **Express.js**
- **MongoDB Atlas** for storing email credentials
- **Nodemailer** for sending emails
- **CORS** for cross-origin requests

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/bulkmail-backend.git
cd bulkmail-backend

MongoDB Setup
In your MongoDB Atlas database, create a collection named bulkmail under any database (e.g., passkey) with a document like:

{
  "user": "youremail@gmail.com",
  "pass": "your-email-app-password"
}

📦 Folder Structure

.
├── index.js          # Main server file
├── package.json      # Project metadata and dependencies

🙌 Author
Built with ❤️ by Anbarasan V 
