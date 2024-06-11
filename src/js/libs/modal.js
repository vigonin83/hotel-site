const modal = document.querySelector('#modal')
const modalBody = document.querySelector('.modal__body')
const modalCloseBtn = document.querySelector('.modal__close')
const modalInvokeItems = document.querySelectorAll('#modal-link')

const openModal = () => {
   modal.classList.add('open')
   modalBody.classList.add('open')
};

const closeModal = () => {
   modal.classList.remove('open')
   modalBody.classList.remove('open')
}

modalInvokeItems.forEach(item => {
   item.addEventListener('click', openModal)
})

modal.addEventListener('click', (e) => {
   if (e.target.dataset.close) {
      closeModal()
   }
})

console.log('Modal is ready...');
