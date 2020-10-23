let modalBtn = document.getElementById('modal-btn')
let modal = document.getElementById('modal-view')
let closeBtn = document.getElementById('close-btn')


modalBtn.addEventListener('click', showModal)
closeBtn.addEventListener('click', closeModal)

function showModal() {
    modal.classList.toggle("is-active");
}

function closeModal() {
    modal.classList.toggle("is-active");
}