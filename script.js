// Botão do Instagram
document.getElementById('visitInstaBtn').addEventListener('click', () => {
    window.open('https://www.instagram.com/olxdaka/profilecard/?igsh=djNsYXU3b2Z6c2Jy', '_blank');
});

// Botão de Surpresa
document.getElementById('surpriseBtn').addEventListener('click', () => {
    alert('Você é incrível! Continue se amando!');
});

// Formulário de Contato
document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
});
