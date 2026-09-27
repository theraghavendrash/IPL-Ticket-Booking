import { useState } from "react";
import { supabase } from "../supabase";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getBookings() {
    setLoading(true);
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Failed to retrieve bookings");
      return;
    }

    setBookings(data || []);
  }

  return (
    <main className="history-page">
      <h1>Booking History</h1>

      <button className="history-button" onClick={getBookings} disabled={loading}>
        {loading ? "Loading..." : "View Bookings"}
      </button>

      <div className="history-table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Tickets</th>
              <th>Stand</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No bookings found. Click "View Bookings" to fetch records.
                </td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.name}</td>
                  <td>{booking.tickets}</td>
                  <td>{booking.stand}</td>
                  <td>{booking.venue}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default BookingHistory;
