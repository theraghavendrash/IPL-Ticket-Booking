# 🏏 IPL Ticket Booking Web App

A modern IPL ticket booking web application built with **React**, **Vite**, **React Router**, and **Supabase**.

## 🚀 Features

- **Home Page**: Welcome screen with event information and quick navigation.
- **Matches Page**: Live list of upcoming IPL matches with match cards and instant booking links.
- **Ticket Booking Form**: Real-time booking with stand selection, venue options, and live preview.
- **Booking History**: Real-time retrieval and display of booked tickets from Supabase.
- **Cloud Database**: Integrated with Supabase PostgreSQL and Row-Level Security (RLS).
- **Responsive Design**: Mobile-friendly navigation and responsive cards and tables.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Routing**: React Router v7
- **Database / Backend**: Supabase (`@supabase/supabase-js`)
- **Styling**: Vanilla CSS

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/parthi1817/webdevelopment_.git
cd webdevelopment_
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_publishable_key
```
*(Reference `.env.example` for the template)*

### 4. Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.
