import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

function MatchCard({ team1, team2, venue, date, price, availableSeats }) {
  const navigate = useNavigate();

  return (
    <div className="match-card">
      <h2>{team1} vs {team2}</h2>

      <p>📍 {venue}</p>
      <p>📅 {date}</p>
      <p>💰 ₹{price}</p>
      <p>🎟️ {availableSeats} seats available</p>

      <button onClick={() => navigate("/booking")}>
        Book Ticket
      </button>
    </div>
  );
}

function Matches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMatches() {
    const { data, error } = await supabase
      .from("matches")
      .select("*")
      .order("match_date", { ascending: true });

    if (error) {
      console.error("Error fetching matches:", error);
    } else {
      setMatches(data);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <main className="matches-page">
      <h1>Upcoming IPL Matches</h1>

      {loading ? (
        <p>Loading matches...</p>
      ) : matches.length === 0 ? (
        <p>No matches available.</p>
      ) : (
        <div className="matches-grid">
          {matches.map((match) => (
            <MatchCard
              key={match.id}
              team1={match.team1}
              team2={match.team2}
              venue={match.venue}
              date={match.match_date}
              price={match.price}
              availableSeats={match.available_seats}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Matches;