// New Snippet Modal
let modalBtn = document.getElementById('modal-btn')
let modal = document.getElementById('modal-view')
let closeBtn = document.getElementById('close-btn')

// Edit Snipt Modal
let editBtn = document.getElementById('edit-btn')
let editorModal = document.getElementById('modal-view-editor')


//Event Listeners for new snippet
modalBtn.addEventListener('click', showModal)
closeBtn.addEventListener('click', closeModal)

//Event Listeners for edit modal
editBtn.addEventListener('click', showEditModal)



//New Function
function showModal() {
    modal.classList.toggle("is-active");
}

function closeModal() {
    modal.classList.toggle("is-active");
}

// Edit Funtion
function showEditModal() {
    editorModal.classList.toggle("is-active");
}