function searchDoctors() {
    // This is a placeholder for the actual search logic
    let specialty = document.getElementById('specialty').value;
    let location = document.getElementById('location').value;
    let experience = document.getElementById('experience').value;

    // Simulate search results
    let results = [
        {name: "Dr. Minhaz", specialty: "Diabetologist", location: "Rangpur", experience: "8 years", id: 1},
        {name: "Dr. Shmz", specialty: "Diabetologist", location: "Dhaka", experience: "5 years", id: 2},
        {name: "Dr. Faysal", specialty: "Diabetologist", location: "Sherpur", experience: "10 years", id: 3},
        {name: "Dr. Pathan", specialty: "Diabetologist", location: "Gazipur", experience: "15 years", id: 4}
    ];

    let resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '';  // Clear previous results

    results.forEach(result => {
        let resultDiv = document.createElement('div');
        resultDiv.className = 'result';

        let name = document.createElement('h3');
        name.textContent = result.name;
        resultDiv.appendChild(name);

        let details = document.createElement('p');
        details.textContent = `${result.specialty}, ${result.location}, ${result.experience}`;
        resultDiv.appendChild(details);

        let bookButton = document.createElement('button');
        bookButton.textContent = 'Book An Appointment';
        bookButton.onclick = () => bookAppointment(result.id);
        resultDiv.appendChild(bookButton);

        resultsDiv.appendChild(resultDiv);
    });
}

function searchHospitals() {
    // This is a placeholder for the actual search logic
}

function searchDiagnosisCenters() {
    // This is a placeholder for the actual search logic
}

function searchDieticians() {
    // This is a placeholder for the actual search logic
}

function bookAppointment(doctorId) {
    // Placeholder function to simulate booking an appointment
    alert('Appointment booked with doctor ID: ' + doctorId);
}
