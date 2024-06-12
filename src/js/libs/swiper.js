import Swiper from "swiper";
import { Navigation, Autoplay, EffectFade, Pagination} from "swiper/modules";

import 'swiper/scss'
import 'swiper/scss/navigation'

const swiper = new Swiper('.main__slider', {
   modules: [Navigation],
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   }
})

const swiperService = new Swiper('.service__slider', {
   modules: [Navigation],
   navigation: {
      nextEl: '.service-button-next',
      prevEl: '.service-button-prev',
   },
   breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 14
      }
    }
})

const swiperFeedback = new Swiper('.feedback__slider', {
   modules: [Navigation, Autoplay, EffectFade],
   loop: true,
   slidesPerView: 1,
   navigation: {
      nextEl: '.feedback-button-next',
      prevEl: '.feedback-button-prev',
   }
})

const swiperOtherRoom = new Swiper('.room-add__slider', {
   modules: [Navigation, Pagination],
   simulateTouch: false,
   loop: true,
   slidesPerView: 1,
   spaceBetween: 16,
   navigation: {
      nextEl: '.room-add-button-next',
      prevEl: '.room-add-button-prev',
   },
   breakpoints: {
      320: {
         enabled: false
      },
      768: {
         enabled: false
      },
      992: {
         enabled: true
      }
    }
})
