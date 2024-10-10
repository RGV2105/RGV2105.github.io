
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
            const whatsappURL = `https://wa.me/593939520330?text=${encodeURIComponent(whatsappMessage)}`;

            // Redirige a la URL de WhatsApp
            window.open(whatsappURL, '_blank');

            form.reset();  // Resetea el formulario después del envío
        } else {
            alert('Por favor, completa todos los campos antes de enviar.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Ajusta la altura del header en dispositivos móviles para evitar que sea muy alto.
    function adjustHeader() {
        const header = document.querySelector('.header-container');
        if (window.innerWidth <= 768) {
            header.style.height = 'auto';
        } else {
            header.style.height = '200px'; // Ajusta según tus preferencias para pantallas más grandes.
        }
    }

    // Hace que el menú de navegación sea colapsable en pantallas pequeñas.
    function setupResponsiveNav() {
        const navMenu = document.querySelector('.nav-menu');
        const toggleButton = document.createElement('button');
        toggleButton.innerText = 'Menú';
        toggleButton.classList.add('nav-toggle');

        toggleButton.addEventListener('click', function () {
            navMenu.classList.toggle('visible');
        });

        // Solo agregar el botón de toggle si estamos en móvil
        if (window.innerWidth <= 768) {
            navMenu.parentElement.insertBefore(toggleButton, navMenu);
        }
    }

    // Ajusta el diseño de los elementos de contacto.
    function adjustContactForm() {
        const form = document.getElementById('contactForm');
        if (window.innerWidth <= 768) {
            form.style.width = '90%';
            form.style.margin = '0 auto';
        } else {
            form.style.width = '50%';
        }
    }

    // Ejecuta las funciones de ajuste en el cargado y cuando se cambia el tamaño de la ventana.
    adjustHeader();
    setupResponsiveNav();
    adjustContactForm();

    window.addEventListener('resize', function () {
        adjustHeader();
        adjustContactForm();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Obtener el nombre del producto y el precio desde el HTML
            const product = this.closest('.product');
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('.product-price').textContent;

            // Codificar el mensaje para WhatsApp
            const whatsappMessage = `Hola, estoy interesad@ en el producto ${productName} con un precio de ${productPrice}. ¿Podrías darme más información?`;
            const whatsappURL = `https://wa.me/593939520330?text=${encodeURIComponent(whatsappMessage)}`;

            // Redirigir a la URL de WhatsApp
            window.open(whatsappURL, '_blank');
        });
    });
});

