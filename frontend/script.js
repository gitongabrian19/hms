function showFormBookNow(){
    var bookingForm = document.getElementById("bookingForm");
    bookingForm.classList.toggle("hidden");
  }

function submitForm() {
    const name = document.getElementById('nameInput').value;
    const phone = document.getElementById('phoneInput').value;

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone })
    })
    .then(response => {
        if (response.ok) {
            alert('Booking successful!');
            document.getElementById('nameInput').value = '';
            document.getElementById('emailInput').value = '';
            document.getElementById('phoneInput').value = '';
        } else {
            alert('Booking failed!');
        }
    })
    .catch(error => console.error('Error:', error));
}
