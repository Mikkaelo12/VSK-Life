var backToTopBtn = document.getElementById('back-to-top')

window.onscroll = function () {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		backToTopBtn.style.display = 'block'
	} else {
		backToTopBtn.style.display = 'none'
	}
}

backToTopBtn.onclick = function () {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}

window.addEventListener('load', function () {
	var preloader = document.getElementById('preloader')
	preloader.style.display = 'none'
})







const form = document.getElementById('form')
const resultt = document.getElementById('resultt')

form.addEventListener('submit', function (e) {
	e.preventDefault()
	const formData = new FormData(form)
	const object = Object.fromEntries(formData)
	const json = JSON.stringify(object)
	resultt.innerHTML = 'Пожалуйста подождите'

	fetch('https://api.web3forms.com/submit', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: json,
	})
		.then(async response => {
			let json = await response.json()
			if (response.status == 200) {
				resultt.innerHTML = json.message
			} else {
				console.log(response)
				resultt.innerHTML = json.message
			}
		})
		.catch(error => {
			console.log(error)
			resultt.innerHTML = 'Ошибка при отправке сообщения'
		})
		.then(function () {
			form.reset()
			setTimeout(() => {
				resultt.style.display = 'none'
			}, 3000)
		})
})





