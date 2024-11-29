document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.stopPropagation();

        const dropdown = this.nextElementSibling;

        const isOpen = dropdown.style.display === 'block';

        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });


        if (!isOpen) {
            dropdown.style.display = 'block';
        }
    });
});

document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-content').forEach(content => {
        content.style.display = 'none';
    });
});
