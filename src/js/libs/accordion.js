const menuItems = document.querySelectorAll('[data-menu-id]')
const submenuItems = document.querySelectorAll('[data-item]')
const delayTime = 300

menuItems.forEach((item) => {
   item.addEventListener('click', () => {
      item.classList.toggle('-rotate')

      setTimeout(() => {

         submenuItems.forEach((submenuItem) => {
            if (item.dataset.menuId === submenuItem.dataset.item) {
               submenuItem.classList.toggle('-open')
            }
         })
      }, delayTime)
   })
});

console.log('Accordion is ready...')
