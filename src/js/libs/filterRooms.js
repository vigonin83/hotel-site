const roomFilterInputs = document.querySelectorAll('[data-room-input]')
const resetFilterBtn = document.querySelector('.filter-rooms__reset')

const inputHandler = (targetInput, element) => {
   element.textContent = targetInput.value
}

if (roomFilterInputs.length > 0) {
   roomFilterInputs.forEach(input => {
      input.addEventListener('input', ({ target }) => {

         const targetElement = input.previousSibling.previousSibling.firstElementChild;

         if (targetElement.hasAttribute('data-input-value')) {
            inputHandler(target, targetElement);
         }
      })
   })
}

resetFilterBtn.addEventListener('click', () => {
   roomFilterInputs.forEach(input => {
      input.value = input.min
      const targetElement = input.previousSibling.previousSibling.firstElementChild;
      inputHandler(input, targetElement)
   })
})