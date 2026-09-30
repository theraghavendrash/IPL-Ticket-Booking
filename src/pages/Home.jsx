import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <div className="hero-card">
        <h1>Welcome to IPL Ticket Booking</h1>
        <p>
          Select your favorite match, pick your preferred stand, and book tickets instantly!
        </p>
        <Link to="/matches" className="hero-cta">
          Explore Matches & Book Now
        </Link>
      </div>
    </main>
  );
}

export default Home;
