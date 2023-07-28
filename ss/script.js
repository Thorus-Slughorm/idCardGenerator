document.getElementById('idCardForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const studentId = document.getElementById('studentId').value;
    const course = document.getElementById('course').value;
    const photo = document.getElementById('photo').files[0];

    // Update virtual ID card
    document.getElementById('idCardName').innerText = name;
    document.getElementById('idCardEmail').innerText = `College: ${email}`;
    document.getElementById('idCardStudentId').innerText = `Student ID: ${studentId}`;
    document.getElementById('idCardCourse').innerText = `Course: ${course}`;

    // Update photo
    const reader = new FileReader();
    reader.onload = function() {
        document.getElementById('idCardPhoto').style.backgroundImage = `url(${reader.result})`;
    };
    reader.readAsDataURL(photo);

    // Update photo name display
    document.getElementById('photoName').innerText = `Selected photo: ${photo.name}`;

    // Show the virtual ID card
    document.querySelector('.right-panel').style.display = 'flex';
});