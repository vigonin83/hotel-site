const counterBtnMinus = document.querySelectorAll('.counter__btn-minus')
const counterBtnPlus = document.querySelectorAll('.counter__btn-plus')
const roomCounterItem = document.querySelector('#counter-rooms');
const guestCounterItem = document.querySelector('#counter-guests')

let guestCount = 1
let roomCount = 1

const counterIncrement = (count, item) => {
   count++
   item.textContent = count
   return count
}

const counterDecrement = (count, item) => {
   count--
   item.textContent = count
   return count
}

const disablePlusBtn = (count, btn, limit) => {
   if (count === limit) {
      btn.classList.add('disabled')
   }
   if (btn.previousElementSibling.classList.contains('disabled')) {
      btn.previousElementSibling.classList.remove('disabled')
   }
}

const disableMinusBtn = (counter, btn, limit) => {
   if (counter === limit) {
      btn.classList.add('disabled')
   }
   if (btn.nextElementSibling.classList.contains('disabled')) {
      btn.nextElementSibling.classList.remove('disabled')
   }
}


counterBtnPlus.forEach(btn => {
   btn.addEventListener('click', (e) => {
      if (e.target.id === "counterBtn-guestIncr" && guestCount < 8) {
         guestCount = counterIncrement(guestCount, guestCounterItem)
         disablePlusBtn(guestCount, btn, 8)
      }
      if (e.target.id === "counterBtn-roomIncr" && roomCount < 4) {
         roomCount = counterIncrement(roomCount, roomCounterItem)
         disablePlusBtn(roomCount, btn, 4)
      }
   })
}
);

counterBtnMinus.forEach(btn => {
   btn.classList.add('disabled')
   btn.addEventListener('click', (e) => {
      if (e.target.id === "counterBtn-guestDecr" && guestCount > 1) {
         guestCount = counterDecrement(guestCount, guestCounterItem)
         disableMinusBtn(guestCount, btn, 1)
      }
      if (e.target.id === "counterBtn-roomDecr" && roomCount > 1) {
         roomCount = counterDecrement(roomCount, roomCounterItem)
         disableMinusBtn(roomCount, btn, 1)
      }
   })
});
