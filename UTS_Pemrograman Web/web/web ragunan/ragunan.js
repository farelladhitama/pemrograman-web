// Function to switch between sections
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Function to scroll smoothly to content section
function scrollToContent() {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
}

// Function to handle form submission
function submitForm() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    
    alert(`Terima kasih, ${name}! Tiket Anda untuk tanggal ${date} telah berhasil dipesan.`);
    return false; // Prevent form from actually submitting
}
