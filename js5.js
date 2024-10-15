function showDate() {
    const today = new Date();
    const dateString = today.toDateString();
    document.getElementById('demo').textContent = dateString;
    document.getElementById('demo').style.display = 'block';
}