[# **Contest Tracker** 🏆🚀  
A **MERN stack** web application to track upcoming and past programming contests from **Codeforces, CodeChef, and LeetCode**. Users can **bookmark** contests, view their saved contests, and admins can add **solution links** for past contests.  

## **🚀 Live Demo**

🔗 **[Click here to watch the User demo](https://youtu.be/YYR4mGFEQB4)**<br>
🔗[Click here to watch the Admin demo](https://youtu.be/1mpRk6EeF1I)

---

## **📜 Features**  
✅ **User Authentication** (Signup, Login, Google OAuth)  
✅ **JWT Authentication** (Access & Refresh Tokens)  
✅ **Fetch Upcoming & Past Contests** (From Codeforces, CodeChef*, and LeetCode* APIs)  
✅ **Bookmark Contests** (Logged-in users can save contests)  
✅ **Filter by Platform** (View contests from selected platforms)  
✅ **Admin Access** (Admins can add YouTube solution links for past contests)  
✅ **Responsive UI** (Optimized for Mobile & Tablet)  
✅ **Light/Dark Mode Toggle**  

---

## **🛠 Tech Stack**
**Frontend:**  
- React.js ⚛️ (with **React Context** for state management)  
- Material-UI 🎨 (for styling and responsiveness)  

**Backend:**  
- Node.js + Express.js 🚀  
- MongoDB (with **Mongoose**) 🗄  

**Authentication:**  
- **JWT** (Access & Refresh Tokens)  
 

---
## 📌 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/contest-tracker.git
cd contest-tracker
```
### 2️⃣ Install dependencies (Frontend & Backend)
```bash
cd backend
npm install
cd ../frontend
npm install

```
### 3️⃣ Set up environment variables
Create .env files in both backend/ and frontend/ directories and configure your keys.
### 4️⃣ Start the backend server
``` bash
cd backend
npm start
```
### 5️⃣ Start the frontend client
```bash
cd frontend
npm run dev
```
---
## **📂 Folder Structure**
```sh
contest-tracker/
│── frontend/  # React Frontend (react + material ui)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/   # Context API for state management
│   │   ├── services/  # API calls
│   │   ├── App.js
│   │   ├── index.jsx
│   ├── package.json
│   ├── .env
│   ├── .gitignore

│── backend/         # Node.js + Express.js Backend
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── config/
│   │   ├── utils/
│   ├── package.json
│   ├── index.js
│   ├── .env
│   │── .gitignore
```
---

## **📌 API Endpoints**
Method	Endpoint	Description
```
POST	/api/auth/signup                  (Register a new user)
POST	/api/auth/login                   (Login user)
POST	/api/auth/logout                  (Logout user)
GET	/api/contests/upcoming            (Get upcoming contests)
GET	/api/contests/upcoming?plateform  (Get upcoming contests filter by plateform)
GET	/api/contests/past                (Get past contests)
GET	/api/contests/past?palteform      (Get past contests filter by plateform)
POST	/api/bookmarks                    (Bookmark a contest)
GET	/api/bookmarks                    (Get user bookmarks)
DELETE	/api/bookmarks/:id                (Remove bookmark)
POST	/api/solutions                    (Admin: Add a solution link)
GET	/api/solutions                    (Get solutions for past contests)
```
---
## **📝 License**
This project is open-source and available under the MIT License.
---
👨‍💻 Developed by: Vijay kumar chaurasiya
📧 Contact: vijaykc1307@gmail.com
