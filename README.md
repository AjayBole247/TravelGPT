<div align="center">

# ✈️ TravelGPT

### Your AI-Powered Personal Travel Planner

Plan personalized trips in minutes through an intelligent conversational experience. TravelGPT understands your destination, budget, group size, and trip duration to generate a complete travel itinerary tailored to you.

<br />

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge\&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-AI_Powered-412991?style=for-the-badge\&logo=openai\&logoColor=white)
![Convex](https://img.shields.io/badge/Convex-Backend-EE342F?style=for-the-badge)
![Clerk](https://img.shields.io/badge/Clerk-Authentication-6C47FF?style=for-the-badge\&logo=clerk\&logoColor=white)

<br />

[Live Demo](#-live-demo) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Contributing](#-contributing)

</div>

---

## 🌍 About TravelGPT

**TravelGPT** is an AI-powered travel planning application that transforms the traditional trip-planning process into a simple conversation.

Instead of manually searching through dozens of websites for destinations, hotels, attractions, and schedules, users can chat with an AI travel assistant. The application collects important travel preferences and generates a personalized itinerary containing hotel recommendations, daily activities, pricing information, locations, and the best times to visit.

The goal is simple:

> **Tell TravelGPT where you want to go — and let AI plan the journey.**

---

## ✨ Features

### 🤖 AI-Powered Trip Planning

Chat naturally with an intelligent travel assistant that understands your travel requirements and guides you through the planning process.

### 🎯 Personalized Recommendations

TravelGPT creates itineraries based on:

* 📍 Destination
* 💰 Budget
* 👥 Group size
* 📅 Trip duration
* 🏠 Starting location

### 🧩 Generative User Interface

The chat dynamically displays interactive UI components according to the conversation, including:

* Budget selection
* Group size selection
* Trip duration selection
* Final trip generation

This creates a smoother experience than a traditional form-based travel planner.

### 🏨 Smart Hotel Recommendations

Generated travel plans include detailed hotel information such as:

* Hotel name and address
* Price per night
* Ratings
* Description
* Location coordinates
* Hotel images

### 🗓️ Day-Wise AI Itinerary

Every generated trip contains a structured daily plan with:

* Tourist attractions
* Activity details
* Ticket pricing
* Best time to visit
* Travel time between locations
* Geographic coordinates
* Place images

### 💬 Conversational Planning Experience

Users can describe their travel plans naturally instead of filling out long and complicated forms.

### 🔐 Secure Authentication

User authentication and account management are handled through Clerk.

### ☁️ Persistent Trip Storage

Generated trip plans are stored using Convex, allowing user-specific travel data to be saved and managed.

### 🛡️ Application Protection

Arcjet is integrated to strengthen application security and protect API routes.

### 📱 Responsive Modern UI

Built with Tailwind CSS, shadcn/ui, Motion, and modern React components for a smooth experience across different screen sizes.

---

## 🎬 Demo

> Add your project demo video or GIF here.

```html
<!-- Example -->
<p align="center">
  <img src="./public/travelgpt-demo.gif" width="900" alt="TravelGPT Demo" />
</p>
```

---

## 📸 Screenshots

### 🏠 Landing Page

<p align="center">
  <img src="./public/screenshots/home.png" width="900" alt="TravelGPT Landing Page" />
</p>

### 🤖 AI Travel Assistant

<p align="center">
  <img src="./public/screenshots/ai-chat.png" width="900" alt="TravelGPT AI Chat" />
</p>

### 🗺️ Generated Trip Itinerary

<p align="center">
  <img src="./public/screenshots/itinerary.png" width="900" alt="Generated Travel Itinerary" />
</p>

> Create a `public/screenshots` folder and replace these image paths with your actual project screenshots.

---

## 🔄 How It Works

```text
User starts a conversation
          ↓
AI asks for destination
          ↓
User selects group size
          ↓
User selects budget
          ↓
User selects trip duration
          ↓
OpenAI generates a personalized trip plan
          ↓
TravelGPT displays hotels and daily activities
          ↓
Trip details are saved to Convex
```

---

## 🧠 AI Workflow

TravelGPT uses a conversational AI workflow instead of a traditional form.

The application:

1. Receives the user's message.
2. Sends the conversation history to the AI API.
3. Determines the next information required.
4. Dynamically renders the appropriate interactive UI.
5. Collects destination, budget, group size, and duration.
6. Generates the final structured travel plan.
7. Displays the complete itinerary.
8. Saves the generated trip to the database.

---

## 🛠️ Tech Stack

| Category               | Technologies                          |
| ---------------------- | ------------------------------------- |
| **Framework**          | Next.js 16                            |
| **Frontend**           | React 19, TypeScript                  |
| **Styling**            | Tailwind CSS 4                        |
| **UI Components**      | shadcn/ui, Radix UI                   |
| **AI Integration**     | OpenAI API                            |
| **Backend & Database** | Convex                                |
| **Authentication**     | Clerk                                 |
| **Security**           | Arcjet                                |
| **HTTP Client**        | Axios                                 |
| **Animations**         | Motion                                |
| **Icons**              | Lucide React, Tabler Icons, Hugeicons |

---

## 📁 Project Structure

```text
TravelGPT/
│
├── app/
│   ├── _components/          # Landing page components
│   ├── api/                  # API routes and AI integration
│   ├── create-new-trip/      # AI trip creation workflow
│   │   └── _components/
│   │       ├── ChatBox.tsx
│   │       ├── BudgetUi.tsx
│   │       ├── GroupSizeUi.tsx
│   │       ├── TripDurationUi.tsx
│   │       ├── FinalTripUi.tsx
│   │       └── Itinerary.tsx
│   ├── provider.tsx          # Global application providers
│   └── page.tsx              # Home page
│
├── components/
│   └── ui/                   # Reusable UI components
│
├── context/                  # React context
├── convex/                   # Database functions and schema
├── hooks/                    # Custom React hooks
├── lib/                      # Utilities and configurations
├── public/                   # Static assets
├── proxy.ts                  # Request middleware/proxy
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js 20 or later
* npm
* Git

You will also need accounts and API credentials for:

* OpenAI
* Clerk
* Convex

### 1. Clone the Repository

```bash
git clone https://github.com/AjayBole247/TravelGPT.git
```

### 2. Navigate to the Project

```bash
cd TravelGPT
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CONVEX_URL=your_convex_url
CONVEX_DEPLOYMENT=your_convex_deployment

OPENAI_API_KEY=your_openai_api_key
```

> Add any additional environment variables required by your local configuration.

### 5. Start Convex

```bash
npx convex dev
```

### 6. Run the Development Server

Open another terminal and run:

```bash
npm run dev
```

### 7. Open the Application

Visit:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs ESLint to check the codebase.

---

## 🔐 Environment Variables

Never commit your `.env.local` file or expose secret API keys publicly.

Make sure the following is present in `.gitignore`:

```gitignore
.env
.env.local
.env*.local
```

---

## 🚀 Future Improvements

* 🗺️ Interactive map integration
* 🌦️ Real-time weather information
* ✈️ Flight search and recommendations
* 🏨 Live hotel availability
* 💵 AI-powered budget breakdown
* 📤 Shareable public itineraries
* 📄 Export itinerary as PDF
* ❤️ Save favorite destinations
* 👥 Collaborative group trip planning
* 🌐 Multi-language support
* 📱 Progressive Web App support

---

## 🤝 Contributing

Contributions are welcome!

To contribute:

1. Fork the repository.
2. Create a new feature branch.

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes.

```bash
git commit -m "Add amazing feature"
```

4. Push the branch.

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request.

---

## 👨‍💻 Author

### Ajay Bole

B.Tech Information Technology student and Full-Stack Developer passionate about building modern web applications and AI-powered products.

[![GitHub](https://img.shields.io/badge/GitHub-AjayBole247-181717?style=for-the-badge\&logo=github)](https://github.com/AjayBole247)

---

## ⭐ Support

If you found **TravelGPT** useful or interesting, consider giving the repository a ⭐.

It helps support the project and motivates further development.

---

<div align="center">

### ✈️ Plan Smarter. Travel Better. Explore More.

Made with ❤️ and AI by **Ajay Bole**

</div>
