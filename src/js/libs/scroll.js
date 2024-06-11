const scrollBtn = document.querySelector('#scroll')
const windowHeight = document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
   let currentScroll = scrollY;
   if (currentScroll > windowHeight*0.9) {
      scrollBtn.classList.add('visible')
   } else {
      scrollBtn.classList.remove('visible')
   }
})

scrollBtn.addEventListener('click', () => {
   window.scrollTo({top: 0, left: 0, behavior: "smooth"})
   console.log('Идем вверх');
})

console.log('Scrollbar has been connected...')
