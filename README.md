# 🎬 Netflix Clone

A full-stack Neftlix Clone built with modern web technologies using 👉 **Next.js App Router**, 👉 **TypeScript**, 👉 **Tailwind CSS**, 👉 **Prisma**, and 👉 **MongoDB**.

---

# 🚀 Live Demo

👉 https://netflix-calone-oxhp.vercel.app

---

# 📸 Preview

<img width="1350" height="645" alt="image" src="https://github.com/user-attachments/assets/03d5e71c-ea7d-4efb-9c50-74257ebf0866" />
<img width="1355" height="638" alt="image" src="https://github.com/user-attachments/assets/2d1f05a9-83f8-4425-85a9-b7efbda82d90" />
<img width="1348" height="631" alt="image" src="https://github.com/user-attachments/assets/deea9f37-081d-45c9-9fca-d4882c116cd9" />



---

# ✨ Features

## 🔐 Authentication

- Credentials Login
- Google Login
- GitHub Login
- Protected Routes
- JWT Session Strategy

---

## 👤 User Features

- Profile Page
- Current User Fetching
- Logout Functionality

---

## 🎥 Movies

- Random Billboard Movie
- Video Streaming
- Dynamic Movie Fetching
- Movie API
- Responsive Billboard UI

---

## 🎨 UI Features

- Neftlix-style Hero Section
- Floating Label Inputs
- Responsive Design
- Hover Effects
- Tailwind Styling
- Toast Notifications

---

# 🧱 Tech Stack

## Frontend

- Next.js 15 (App Router)
- React
- TypeScript
- Tailwind CSS

---

## Backend

- Next.js API Routes
- Prisma ORM
- MongoDB

---

## Authentication

- NextAuth
- Google Provider
- GitHub Provider
- Credentials Provider

---

## Deployment

- Vercel

---

# 📂 Project Structure

```txt
app/
 ├── api/
 ├── auth/
 ├── profile/
 ├── movies/
 └── page.tsx

components/
 ├── Billboard.tsx
 ├── Input.tsx
 ├── Navbar.tsx
 └── Footer.tsx

hooks/
 ├── useCurrentUser.ts
 └── useBillboard.ts

lib/
 ├── fetcher.ts
 ├── prismadb.ts
 └── serverAuth.ts

prisma/
 ├── schema.prisma
 └── seed.ts

store/
 └── useInfoModalStore.ts
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Amit81082/Neftlix-calone.git
```

---

## 2️⃣ Move Into Project

```bash
cd Neftlix-calone
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Setup Environment Variables

Create a 👉 `.env` file

```env
DATABASE_URL=

NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_ID=
GITHUB_SECRET=
```

---

# 🗄 Prisma Setup

## Generate Prisma Client

```bash
npx prisma generate
```

---

## Push Schema

```bash
npx prisma db push
```

---

## Seed Movies

```bash
npx tsx prisma/seed.ts
```

---

# ▶️ Run Project

```bash
npm run dev
```

---

# 🌍 Production Build

```bash
npm run build
```

---

# 🔥 Important Learnings

## App Router Architecture

```txt
SERVER LOGIC
      ↓
Server Components

CLIENT UI
      ↓
Client Components
```

---

## Route Protection

```txt
serverAuth()
      ↓
redirect("/auth")
```

---

## SWR Flow

```txt
API
 ↓
Fetcher
 ↓
SWR
 ↓
Cached Data
```

---

# 📦 Main Packages

```bash
next
react
typescript
tailwindcss
prisma
mongodb
next-auth
bcrypt
swr
zustand
axios
react-hot-toast
react-icons
```

---

# 🚀 Deployment

Deployed on 👉 **Vercel**

```txt
GitHub
   ↓
Vercel
   ↓
Auto Deploy
```

---

# 🧠 Future Features

- Search
- Continue Watching

---

# 👨‍💻 Developer

## Amit Maurya

- GitHub: https://github.com/Amit81082

---

# ⭐ Support

If you liked this project:

```txt
⭐ Star the repository
🍴 Fork the project
🚀 Build your own version
```
