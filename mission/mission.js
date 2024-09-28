document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('dark-toggle');

    toggle.addEventListener('change', (event) => {
        if (event.target.value === 'dark') {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    });
});