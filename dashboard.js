const container = document.getElementById("ticket-list");

async function fetchBookings() {
  const res = await fetch("http://localhost:3000/customers");
  const data = await res.json();

  container.innerHTML = "";
  data.forEach((ticket) => {
    const card = document.createElement("div");
    card.className = "ticket-card";
    card.innerHTML = `
      <h3>${ticket.name} 🎬 ${ticket.movie}</h3>
      <p><strong>Age:</strong> ${ticket.age}</p>
      <p><strong>Gender:</strong> ${ticket.gender}</p>
      <p><strong>Seats:</strong> ${ticket.seats}</p>
      <p><strong>Total Price:</strong> ₹${ticket.totalPrice}</p>
      <button onclick="editTicket('${ticket.id}')">✏️ Edit</button>
      <button onclick="deleteTicket('${ticket.id}')">🗑️ Delete</button>
    `;
    container.appendChild(card);
  });
}

async function deleteTicket(id) {
  const confirmed = confirm("Are you sure you want to delete this ticket?");
  if (!confirmed) return;

  await fetch(`http://localhost:3000/customers/${id}`, {
    method: "DELETE"
  });

  fetchBookings(); // Refresh list
}

async function editTicket(id) {
  const res = await fetch(`http://localhost:3000/customers/${id}`);
  const ticket = await res.json();

  const newName = prompt("Enter new name:", ticket.name);
  const newSeats = parseInt(prompt("Enter new seat count:", ticket.seats));
  const newTotal = newSeats * 240;

  const updatedData = {
    ...ticket,
    name: newName,
    seats: newSeats,
    totalPrice: newTotal
  };

  await fetch(`http://localhost:3000/customers/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedData)
  });

  fetchBookings(); // Refresh list
}

// Load bookings when page loads
fetchBookings();
