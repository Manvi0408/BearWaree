# 🐻 BearWare
check it here :https://bear-waree-msbb.vercel.app/

> **Your all-in-one event management and dashboard platform**

---

## 📖 Overview
BearWare is a modern, full-stack event management platform designed for teams and communities. It provides a seamless dashboard experience, robust authentication, category-based event organization, and integrated payment solutions. Built with scalability, security, and developer experience in mind.

"BearWare is a modern event management platform I developed using Next.js, Prisma, and PostgreSQL. The main goal was to allow users to create, manage, and categorize events efficiently, with a focus on a seamless and secure user experience.
I implemented secure authentication and a dynamic dashboard where users can view and organize their events in real time. For payments, I integrated Stripe, enabling users to purchase event-related services directly through the platform. I also connected the Discord API to send automated notifications, which helps keep users engaged and informed about their events.
On the frontend, I used Tailwind CSS to design a fully responsive interface, ensuring the platform works smoothly on both desktop and mobile devices. Throughout the project, I focused on optimizing performance and user engagement, resulting in a robust, scalable solution that supports hundreds of users and transactions."

screenshots:
<img width="1806" height="962" alt="Screenshot (160)" src="https://github.com/user-attachments/assets/48e03c89-bba0-424b-a169-fbb2fb80f8e8" />



<img width="1889" height="886" alt="Screenshot (161)" src="https://github.com/user-attachments/assets/2395b063-9843-4bd9-9d72-3747c1968f7e" />





<img width="1879" height="842" alt="Screenshot (162)" src="https://github.com/user-attachments/assets/3a1ed4b4-6708-485c-bd45-de74b65602e6" />

---

## ✨ Features
- 🗂️ **Event Categories:** Organize and filter events by custom categories.
- 📅 **Dashboard:** Intuitive dashboard for managing events, users, and analytics.
- 🔑 **Authentication:** Secure sign-in/sign-up with session management.
- 💳 **Stripe Integration:** Accept payments and manage billing with Stripe.
- 🛠️ **API Keys:** Generate and manage API keys for integrations.
- 🔔 **Notifications:** Real-time notifications for important actions.
- 🎨 **Modern UI:** Responsive, accessible, and beautiful design.
- 🧩 **Modular Architecture:** Easily extend and maintain features.

---


## 📦 Tech Stack
- **Frontend:** Next.js 14, React 18, Tailwind CSS
- **Backend:** Next.js API Routes (Node.js Serverless), Prisma ORM
- **Database:** PostgreSQL (configurable)
- **Payments:** Stripe
- **Auth:** Clerk (or your preferred provider)
- **Dev Tools:** TypeScript, PNPM, ESLint, Prettier

---

## 🚀 Getting Started

### 1. Clone the repository
```sh
git clone https://github.com/Manvi0408/BearWare.git
cd BearWare
```

### 2. Install dependencies
```sh
pnpm install
```

### 3. Configure environment variables
- Copy `.env.example` to `.env`:
  ```sh
  cp .env.example .env
  ```
- Fill in all required secrets (see below).

### 4. Set up the database
```sh
pnpm prisma migrate deploy
```

### 5. Run the development server
```sh
pnpm dev
```
- Visit [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables
| Variable                | Description                        |
|-------------------------|------------------------------------|
| `DATABASE_URL`          | PostgreSQL connection string        |
| `STRIPE_SECRET_KEY`     | Stripe API secret key               |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret       |
| `NEXT_PUBLIC_CLERK_*`   | Clerk authentication keys           |
| ...                     | Add other required variables here   |

---

## ☁️ Deployment
BearWare is ready for deployment on Vercel, Netlify, or any Node.js hosting provider.

- **Vercel:**
  - Connect your repo and set environment variables in the dashboard.
  - Ensure your API routes use `export const runtime = "nodejs";` if you exceed Edge limits.
- **Database:**
  - Use a managed PostgreSQL service (e.g., Neon, Supabase, Railway, or Heroku).
- **Stripe:**
  - Set up your Stripe account and webhooks.

---

## 🤝 Contributing
Contributions are welcome! Please open issues and pull requests.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request


