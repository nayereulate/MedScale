document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.getElementById('medscale-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = this.querySelector('.btn-submit');
            const originalBtnText = submitBtn.innerHTML;

            // Simple loading state for the button
            submitBtn.innerHTML = '<i data-feather="loader" class="btn-icon rotating"></i> Enviando...';
            feather.replace(); // Re-render icon if changed
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            // Simulate form submission delay
            setTimeout(() => {
                alert('¡Gracias por tu interés! Nos pondremos en contacto contigo a la brevedad para agendar tu sesión estratégica.');

                // Reset button and form
                submitBtn.innerHTML = originalBtnText;
                feather.replace(); // Re-render icon
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                form.reset();
            }, 2000); // 2 seconds delay
        });
    }

    // Add CSS for rotating loader icon (optional, but good for feedback)
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .rotating {
            animation: rotate 1s linear infinite;
        }
    `;
    document.head.appendChild(style);
});