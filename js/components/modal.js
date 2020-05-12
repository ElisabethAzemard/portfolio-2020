// ----- PROJECT MODAL -----
document.addEventListener('DOMContentLoaded', () => {

    let openModalButtons = document.querySelectorAll('.open-modal');
    let closeModalButtons = document.querySelectorAll('.close-modal');

    function toggleModalClasses(event) {
        let target = event.currentTarget.dataset.target;
        let modal = document.querySelector(target);

        modal.classList.toggle('is-active');
        document.querySelector('html').classList.toggle('is-clipped');

        modal.querySelector('.modal-background').addEventListener('click', toggleModalClasses);
    };

    openModalButtons.forEach(button => {
        button.addEventListener('click', toggleModalClasses);
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', toggleModalClasses);
    });

});
