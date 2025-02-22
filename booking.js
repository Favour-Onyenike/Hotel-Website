// Booking page functionality
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const availableRooms = document.getElementById('availableRooms');

    // Sample room data
    const rooms = [
        {
            id: 1,
            name: 'Emerald Room',
            type: 'room',
            price: 200,
            image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            available: true
        },
        {
            id: 2,
            name: 'Diamond Suite',
            type: 'suite',
            price: 500,
            image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            available: true
        }
        // Add more rooms here
    ];

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const checkIn = document.getElementById('checkIn').value;
        const checkOut = document.getElementById('checkOut').value;
        const adults = document.getElementById('adults').value;
        const children = document.getElementById('children').value;

        // Display available rooms
        displayAvailableRooms(checkIn, checkOut);
    });

    function displayAvailableRooms(checkIn, checkOut) {
        // Clear previous results
        availableRooms.innerHTML = '';

        // Filter available rooms based on dates
        const available = rooms.filter(room => room.available);

        // Create room cards
        available.forEach(room => {
            const roomCard = document.createElement('div');
            roomCard.className = 'room-card';
            roomCard.innerHTML = `
                <div class="room-image">
                    <img src="${room.image}" alt="${room.name}">
                </div>
                <div class="room-details">
                    <h2>${room.name}</h2>
                    <div class="amenities">
                        <span><img src="https://api.iconify.design/lucide:wifi.svg" alt="WiFi"> Free WiFi</span>
                        <span><img src="https://api.iconify.design/lucide:air-vent.svg" alt="AC"> Air Conditioning</span>
                    </div>
                    <div class="room-footer">
                        <div class="price">$${room.price}<span>/night</span></div>
                        <button onclick="bookRoom(${room.id})" class="book-button">Book Now</button>
                    </div>
                </div>
            `;
            availableRooms.appendChild(roomCard);
        });
    }
});

function bookRoom(roomId) {
    // Implement booking logic here
    alert('Booking functionality would be implemented here');
}