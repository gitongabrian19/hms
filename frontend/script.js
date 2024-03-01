function showFormBookNow(){
    var bookingForm = document.getElementById("bookingForm");
    bookingForm.classList.toggle("hidden");
  }

function submitForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const guests = document.getElementById('guest').value;

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, checkIn, checkOut, guests })
    })
    .then(response => {
        if (response.ok) {
            alert('Booking successful!');
            document.getElementById('name').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('check-in').value = '';
            document.getElementById('check-out').value = '';
            document.getElementById('guest').value = '';
        } else {
            alert('Booking failed!');
        }
    })
    .catch(error => console.error('Error:', error));
}
