const API_KEY = 'api-key=37cf11588a8e437ea6cfc44b4e6b6302'

const JOKES_SEARCH_API_URL = 'https://api.humorapi.com/jokes/search'
const MEMES_SEARCH_API_URL = 'https://api.humorapi.com/memes/search'
const INSULT_URL = 'https://api.humorapi.com/insult' // Debe ir name y reason

const $ = (selector) => document.querySelector(selector)
const A$ = (selector) => document.querySelectorAll(selector)

const show = $('.show')
const form = $('form')

function format(arr){
  return arr.split(' ').join('+')
}

if(show){
  show.innerHTML = `<span>Search something man, don\'t be shy</span>`
} 

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  console.log(e)
  const name = format($('#name').value)
  const reason = format($('#reason').value)

  const res = await fetch(`${INSULT_URL}?name=${name}&reason=${reason}&${API_KEY}`)
  const insult = await res.json()

  show.innerHTML = insult.text

})