const currentDateItem = document.querySelector('#current-date')
const dateArriveItem = document.querySelector('#arrive-date')
const dateDepartureItem = document.querySelector('#departure-date')

const getDateAfter = (dayAfter,date = new Date()) => {
   return new Date(date.getTime() + (dayAfter * 24 * 60 * 60 * 1000))
}

const today = getDateAfter(0)
const tomorrow = getDateAfter(1)
const dayAfterToday = getDateAfter(7)


const pickMonth = (date) => {
   const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
   return months[date.getMonth()]
}

const reduceToDateString = (date) => {
   return `${date.getDate()} ${pickMonth(date)}`
}

currentDateItem.textContent = `Cегодня ${reduceToDateString(today)}`
dateArriveItem.textContent = `${reduceToDateString(tomorrow)}`
dateDepartureItem.textContent = `${reduceToDateString(dayAfterToday)}`
