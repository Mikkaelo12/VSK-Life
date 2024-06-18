const configChatbot = {}
configChatbot.btn = '.chatbot__btn'
configChatbot.key = 'fingerprint'
configChatbot.replicas = {
	bot: {
		0: {
			content: [
				'Здравствуйте!',
				'Я чат - бот поддержки сайта vsk life',
				'Как я могу к вам обращаться?',
				'"Введите своё имя"',
			],
			human: [1],
		},
		1: { content: 'Я тоже рад, как мне к Вам обращаться?', human: [3] },
		2: { content: 'Как мне к Вам обращаться?', human: [3] },
		3: { content: '{{name}}, чем я могу вам помочь?', human: [4, 5, 6] },

		4: { content: 'какое страхование вас интересует?', human: [11, 12, 13] },

		10: {
			content:
				'{{name}}, для этого вам нужно ознакомится с условиями страховки на странице <a href="line defense.html" target="_blank">Линия защиты</a>, после чего записаться на оформление страховки в офис Vsk',
			human: [14, 15],
		},
		11: {
			content:
				'{{name}}, для этого вам нужно ознакомится с условиями страховки на странице <a href="CUMULATIVE INSURANCE.html" target="_blank">Накопительное страхование</a>, после чего записаться на оформление страховки в офис Vsk',
			human: [14, 15],
		},
		13: {
			content:
				'{{name}}, для этого вам нужно ознакомится с условиями страховки на странице <a href="Investment insurance.html" target="_blank">Инвестиционное страхование</a>, после чего записаться на оформление страховки в офис Vsk',
			human: [14, 15],
		},
		12: {
			content:
				'{{name}}, Если вы со всем ознакомились, то мы свяжем вас с оператором, чтобы назначить встречу в нашем офисе, введите ваш номер телефона:',
			human: [16],
		},

		15: {
			content:
				'{{name}}, Ознакомится с нашими онлайн продуктами вы можете перейдя по данной ссылке <a href="Online-Product.html" target="_blank">Онлайн продукты</a>',
			human: [16],
		},
		16: {
			content:
				'{{name}}, Ознакомится с бланками заявлений вы можете по данной ссылке <a href="Application-forms.html" target="_blank">Бланки заявлений</a>',
			human: [16],
		},
		17: {
			content:
				'{{name}}, Оплатить страховку вы можете прейдя по данной ссылке <a href="pay.html" target="_blank">Оплата страховки</a>',
			human: [16],
		},
		18: {
			content:
				'{{name}}, Ознакомится с информацией о компании вы можете по данной ссылке <a href="about the company.html" target="_blank">О компании</a>',
			human: [16],
		},
		19: {
			content:
				'{{name}}, Введите ваш номер телефона, чтоб мы могли связать вас с оператором и решить ваш вопрос',
			human: [16],
		},

		14: {
			content: '{{name}}, Выберите что вам интересно',
			human: [17, 18, 19, 20, 21],
		},

		5: { content: '{{name}}, укажите пожалуйста ваш телефон', human: [10] },
		6: {
			content:
				'{{name}}, мы получили Ваш вопрос! Скажите, как с Вами удобнее будет связаться?',
			human: [8, 9],
		},
		7: { content: '{{name}}, укажите пожалуйста ваш телефон', human: [10] },
		8: { content: '{{name}}, укажите пожалуйста ваш Email ниже', human: [10] },
		9: {
			content:
				'Готово! {{name}}, оператор свяжется с вами в ближайшее время по номеру телефона {{contact}}. Всего хорошего!',
			human: [6],
		},
	},
	human: {
		0: { content: 'Привет! Я рад с тобой познакомиться', bot: 1 },
		1: { content: '', bot: 3, name: 'name' },
		2: { content: 'Приветик, Инфинити!', bot: 2 },
		3: { content: '', bot: 3, name: 'name' },
		4: { content: 'оформление страховки', bot: 4 },
		5: { content: 'Связаться с оператором', bot: 5 },
		6: { content: 'Другое', bot: 14 },

		11: { content: 'Рисковое', bot: 10 },
		12: { content: 'Накопительное', bot: 11 },
		13: { content: 'Инвестиционное', bot: 13 },

		16: { content: '', bot: 9, name: 'contact' },

		17: { content: 'Онлайн продукты', bot: 15 },
		18: { content: 'Бланки заявлений', bot: 16 },
		19: { content: 'Оплата страховки', bot: 17 },
		20: { content: 'О компании', bot: 18 },
		21: { content: 'Другое', bot: 19 },

		14: { content: 'Уже ознакомился с условиями страховки', bot: 12 },

		15: { content: 'Другой вопрос', bot: 14 },

		7: { content: '', bot: 6, name: '' },
		8: { content: 'по телефону', bot: 7 },
		9: { content: 'по email', bot: 8 },
		10: { content: '', bot: 9, name: 'contact' },
	},
}
// корневой элемент
configChatbot.root = SimpleChatbot.createTemplate()
// URL chatbot.php
configChatbot.url = '/chatbot/chatbot.php'
// создание SimpleChatbot
let chatbot = new SimpleChatbot(configChatbot)
// при клике по кнопке configChatbot.btn
document.querySelector(configChatbot.btn).onclick = function (e) {
	this.classList.add('d-none')
	const $tooltip = this.querySelector('.chatbot__tooltip')
	if ($tooltip) {
		$tooltip.classList.add('d-none')
	}
	configChatbot.root.classList.toggle('chatbot_hidden')
	chatbot.init()
}

// добавление ключа для хранения отпечатка браузера в LocalStorage
let fingerprint = localStorage.getItem(configChatbot.key)
if (!fingerprint) {
	Fingerprint2.get(function (components) {
		fingerprint = Fingerprint2.x64hash128(
			components
				.map(function (pair) {
					return pair.value
				})
				.join(),
			31
		)
		localStorage.setItem(configChatbot.key, fingerprint)
	})
}

// подсказка для кнопки
const $btn = document.querySelector(configChatbot.btn)
$btn.addEventListener('mouseover', function (e) {
	const $tooltip = $btn.querySelector('.chatbot__tooltip')
	if (!$tooltip.classList.contains('chatbot__tooltip_show')) {
		$tooltip.classList.remove('d-none')
		setTimeout(function () {
			$tooltip.classList.add('chatbot__tooltip_show')
		}, 0)
	}
})
$btn.addEventListener('mouseout', function (e) {
	const $tooltip = $btn.querySelector('.chatbot__tooltip')
	if ($tooltip.classList.contains('chatbot__tooltip_show')) {
		$tooltip.classList.remove('chatbot__tooltip_show')
		setTimeout(function () {
			$tooltip.classList.add('d-none')
		}, 200)
	}
})

setTimeout(function () {
	const tooltip = document.querySelector('.chatbot__tooltip')
	tooltip.classList.add('chatbot__tooltip_show')
	setTimeout(function () {
		tooltip.classList.remove('chatbot__tooltip_show')
	}, 10000)
}, 10000)
