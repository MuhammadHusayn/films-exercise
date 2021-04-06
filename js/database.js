let films = window.localStorage.getItem('data')
if(!films) films = [{title: "demo video", genre: 3, sourceLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Fv-MoOhVhqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }]
else films = JSON.parse(films)

let genres = [
	{ id: 1, genre: 'comedy' },
	{ id: 2, genre: 'horror' },
	{ id: 3, genre: 'sci-fi' },
	{ id: 4, genre: 'documentary' },
]