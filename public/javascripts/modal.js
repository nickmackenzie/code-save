// New Snippet Modal
let modalBtn = document.getElementById('modal-btn')
let modal = document.getElementById('modal-view')
let closeBtn = document.getElementById('close-btn')

//Event Listeners for new snippet
modalBtn.addEventListener('click', showModal)
closeBtn.addEventListener('click', closeModal)

//New Function
function showModal() {
    modal.classList.toggle("is-active");
}

function closeModal() {
    modal.classList.toggle("is-active");
}