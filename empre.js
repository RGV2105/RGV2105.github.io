
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (name && email && message) {
            // Codificamos el mensaje para WhatsApp
            const whatsappMessage = `Hola, soy ${name}. Mi correo es ${email}. Mi mensaje es: ${message}`;
            const whatsappURL = `https://wa.me/593968766488?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Redirige a la URL de WhatsApp
            window.open(whatsappURL, '_blank');
            
            form.reset();  // Resetea el formulario después del envío
        } else {
            alert('Por favor, completa todos los campos antes de enviar.');
        }
    });
});
