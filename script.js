
// Ativa Dark Mode
document.getElementById('darkMode').addEventListener('click', () => {
    document.querySelectorAll('*').forEach(element => {
        element.style.color = '#fff';
        element.style.backgroundColor = '#000';
    });
});
