let adminSelect = document.querySelector('#adminSelect')
let iframeInput = document.querySelector('#iframeInput')
let titleInput = document.querySelector('#titleInput')
let form = document.querySelector('form')

function genresRenderer (array) {
	for( let element of array ) {
		let option = document.createElement('option')
		option.innerText = element.genre
		option.value = element.id

		adminSelect.appendChild(option)
	}
}

form.onsubmit = function (event) {
	event.preventDefault()
	let obj = {
		title: titleInput.value,
		genre: adminSelect.value - 0,
		sourceLink: iframeInput.value
	}
	films.push(obj)
	window.localStorage.setItem( 'data', JSON.stringify(films) )
	titleInput.value = null
	iframeInput.value = null
	adminSelect.value = 1
}

console.log(films)

genresRenderer(genres)