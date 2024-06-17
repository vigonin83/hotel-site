const modals = document.querySelectorAll('[data-modal]')
const modalCallBtns = document.querySelectorAll('[data-modal-link]')
const body = document.body

const openModal = (modal) => {
   const modalBody = modal.firstElementChild.firstElementChild
   modal.classList.add('--open')
   modalBody.classList.add('--open');
};

const closeModal = (modal) => {
   const modalBody = modal.firstElementChild.firstElementChild
   modal.classList.remove('--open')
   modalBody.classList.remove('--open')
}

if (modals.length > 0) {
   modalCallBtns.forEach(btn => {
      btn.addEventListener('click', () => {
         modals.forEach(modalWindow => {
            if (btn.dataset.modalLink === modalWindow.dataset.modal) {
               openModal(modalWindow)
               body.classList.add('--lock')
            }
         })
      })
   })

   modals.forEach(modalWindow => {
      modalWindow.addEventListener   ('click', (e) => {
         if (e.target.dataset.close) {
            closeModal(modalWindow)
            body.classList.remove('--lock')
         }
      })
   });
}


console.log('Modal is ready...');
