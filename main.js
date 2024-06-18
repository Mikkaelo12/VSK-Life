function myFunction(x) {
	x.classList.toggle('change')
}

document.querySelector('.nav-button').addEventListener('click', function () {
	document.querySelector('header').classList.toggle('hide-show')
})

$(function () {
	$('.acc_ctrl').on('click', function (e) {
		e.preventDefault()
		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$(this).next().stop().slideUp(300)
		} else {
			$(this).addClass('active')
			$(this).next().stop().slideDown(300)
		}
	})
})

let changeThemeButtons = document.querySelectorAll('.changeTheme')

changeThemeButtons.forEach(button => {
	button.addEventListener('click', function () {
		let theme = this.dataset.theme
		applyTheme(theme)
	})
})

function applyTheme(themeName) {
	document
		.querySelector('[title="theme"]')
		.setAttribute('href', `theme-${themeName}.css`)
	changeThemeButtons.forEach(button => {
		button.style.display = 'block'
	})
	document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none'
	localStorage.setItem('theme', themeName)
}

let activeTheme = localStorage.getItem('theme')

if (activeTheme === null || activeTheme === 'light') {
	applyTheme('light')
} else if (activeTheme === 'dark') {
	applyTheme('dark')
}

$('.email-signup').hide()
$('#signup-box-link').click(function () {
	$('.email-login').fadeOut(100)
	$('.email-signup').delay(100).fadeIn(100)
	$('#login-box-link').removeClass('active')
	$('#signup-box-link').addClass('active')
})
$('#login-box-link').click(function () {
	$('.email-login').delay(100).fadeIn(100)
	$('.email-signup').fadeOut(100)
	$('#login-box-link').addClass('active')
	$('#signup-box-link').removeClass('active')
})

// Находим кнопку с классом changeTheme
const changeThemeButton = document.querySelector('.changeTheme')

// Добавляем обработчик события на нажатие кнопки
changeThemeButton.addEventListener('click', () => {
	// Генерируем случайный цвет для фона body

	// Применяем новый цвет фона с плавным переходом
	document.body.style.transition = 'background-color 0.5s ease'
})

const button = document.querySelector('.btn-online-off')
const popup = document.getElementById('popup')
const closeButton = document.querySelector('#popup button')

button.addEventListener('click', function () {
	popup.style.display = 'block'
})

popup.addEventListener('submit', function (event) {
	event.preventDefault()
	const name = document.getElementById('name').value
	const phone = document.getElementById('online_phone').value
	const agree = document.getElementById('agree').checked
	if (name && phone && agree) {
		popup.style.display = 'none'
	}
})

closeButton.addEventListener('click', function () {
	popup.style.display = 'none'
})

document.addEventListener('DOMContentLoaded', function () {
	const loginBox = document.querySelector('.login-box')
	const loginLink = document.getElementById('login-box-link')
	const signupLink = document.getElementById('signup-box-link')
	const loginForm = document.querySelector('.email-login')
	const signupForm = document.querySelector('.email-signup')

	// Показать форму входа и скрыть форму регистрации
	loginLink.addEventListener('click', function (e) {
		e.preventDefault()
		loginForm.style.display = 'block'
		signupForm.style.display = 'none'
		loginLink.classList.add('active')
		signupLink.classList.remove('active')
	})

	// Показать форму регистрации и скрыть форму входа
	signupLink.addEventListener('click', function (e) {
		e.preventDefault()
		loginForm.style.display = 'none'
		signupForm.style.display = 'block'
		loginLink.classList.remove('active')
		signupLink.classList.add('active')
	})

	// Обработчик для входа
	loginForm.addEventListener('submit', function (e) {
		e.preventDefault()
		const email = loginForm.querySelector('input[type="email"]').value
		const password = loginForm.querySelector('input[type="password"]').value
		// Здесь можно добавить логику для проверки введенных данных и выполнения входа
		console.log('Email:', email, 'Password:', password)
	})

	// Обработчик для регистрации
	signupForm.addEventListener('submit', function (e) {
		e.preventDefault()
		const email = signupForm.querySelector('input[type="email"]').value
		const password = signupForm.querySelector('input[type="password"]').value
		const confirmPassword = signupForm.querySelector(
			'input[placeholder="Confirm Password"]'
		).value
		// Здесь можно добавить логику для проверки введенных данных и выполнения регистрации
		console.log(
			'Email:',
			email,
			'Password:',
			password,
			'Confirm Password:',
			confirmPassword
		)
	})
})



// Функция для разрешения ввода только чисел
function onlyNumberKey(evt) {
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return false;
  return true;
}

// Функция для валидации и оплаты
function validateAndPay() {
  var accountNumber = document.getElementById('accountNumber').value;
  var errorText = document.getElementById('errorText');
  if(accountNumber.length == 13) {
    // Открыть модальное окно
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  } else {
    // Отображение сообщения об ошибке
    errorText.style.display = "block";
    errorText.textContent = 'Пожалуйста, введите 13 цифр номера лицевого счета.';
    // Скрытие сообщения об ошибке через 5 секунд
    setTimeout(function() {
      errorText.style.display = "none";
    }, 5000);
  }
}





