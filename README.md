# 📝 Medium Clone  

A **modern blogging platform** inspired by Medium, built with **React, Hono, Prisma, and TypeScript**.  
Users can **sign up, sign in (JWT Auth)**, browse all published blog posts, and create & publish their own articles.  

---

## 🚀 Features  

✅ **Authentication** – Secure user registration & login with **JWT**  
✅ **Public Feed** – Anyone can view all published blog posts on the homepage  
✅ **Create & Publish** – Signed-in users can write and publish their own posts  
✅ **Modern UI** – Clean, responsive design with React  
✅ **Type-safe Backend** – Hono + Prisma with TypeScript for robust development  

---

## 🛠️ Tech Stack  

| Frontend | Backend | Database | Language |
|----------|---------|----------|----------|
| ⚛️ React | ⚡ Hono | 🗄️ Prisma ORM (with PostgreSQL / SQLite) | 🟦 TypeScript |  

---

## 📂 Project Structure  

```
medium-clone/
│── frontend/        # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
│── backend/        # Hono backend
│   ├── prisma/    # Prisma schema & migrations
│   ├── src/
│   └── package.json
│
│── README.md
```

---

## 🔑 Authentication Flow  

- Users **sign up** → account stored in DB via Prisma  
- Users **log in** → receive a **JWT token**  
- JWT stored in frontend (localStorage / cookies)  
- Authenticated requests → attach JWT in headers  

---

## ⚡ Getting Started  

### 1️⃣ Clone the repo  
```bash
git clone https://github.com/anugrahrk/medium-clone.git
cd medium-clone
```

### 2️⃣ Install dependencies  
```bash
# Install frontend
cd frontend
npm install

# Install backend
cd ../backend
npm install
```

### 3️⃣ Setup database with Prisma  
```bash
npx prisma migrate dev
```

### 4️⃣ Start development servers  
```bash
# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm run dev
```

---

## 🖼️ Screenshots  

### 🔹 Signup Page  
![Signup Page](.frontend/public/signup.png)  
  
