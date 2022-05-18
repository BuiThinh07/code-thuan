const form = document.querySelector('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const alert = document.querySelector(".alert-login");
const text_alert = document.querySelector(".text_alert_success");



const user = JSON.parse(localStorage.getItem("user"));

// Show input error message
function showError(input, message) {
	const formControl = input.parentElement
	formControl.className = 'form-control error'
	const small = formControl.querySelector('small')
	small.innerText = message
}

// Show success outline
function showSuccess(input) {
	const formControl = input.parentElement
	formControl.className = 'form-control success'
	const small = formControl.querySelector('small')
	small.innerText = ''
}

// Check email is valid
function checkEmail(input) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let stateLogin = false;
	user.forEach((item) => {
		if (item.Email === email.value && item.Password === password.value) {
			stateLogin = true;
		}
	})
	if (stateLogin) {
		if (re.test(input.value.trim())) {
			showSuccess(input);
			//tạo dữ liệu
			let listSp = [{ "id": "_165061590915458516357", "image": "anh1.jpg", "name": "ÁO KHOÁC M1AKD03202FONCR", "price": "385.000 ", "description": ["mota11.jpg", "mota12.jpg", "mota13.jpg", "mota14.jpg"] }, { "id": "_165061595198650444690", "image": "anh2.jpg", "name": "ÁO KHOÁC M1AKD03201FONTR", "price": "420.000 ", "description": ["mota21.jpg", "mota22.jpg", "mota23.jpg", "mota24.jpg"] }, { "id": "_165061802742260714919", "image": "anh3.jpg", "name": "ÁO KHOÁC W1AKD03201FONTR", "price": "420.000 ", "description": ["mota31.jpg", "mota32.jpg", "mota33.jpg", "mota34.jpg"] }, { "id": "_165061818203550742292", "image": "anh4.jpg", "name": "ÁO HOODIE D1AKH02201BONTR", "price": "420.000 ", "description": ["mota41.jpg", "mota42.jpg", "mota43.jpg", "mota44.jpg"] }, { "id": "_165061866972166960313", "image": "anh5.jpg", "name": "ÁO KHOÁC D1AKN01203FONTR", "price": "420.000 ", "description": ["mota51.jpg", "mota52.jpg", "mota53.jpg", "mota54.jpg"] }, { "id": "_165061889881395120443", "image": "anh6.jpg", "name": "ÁO KHOÁC W1AKN01201FOSBA", "price": "450.000 ", "description": ["mota61.jpg", "mota62.jpg", "mota63.jpg", "mota64.jpg"] }, { "id": "_165124866830340562441", "image": "anh7.jpg", "name": " ÁO KHOÁC D1AKN01204FONBA", "price": "420.000", "description": ["mota71.jpg", "mota72.jpg", "mota73.jpg", "mota74.jpg"] }, { "id": "_165124875912765001840", "image": "anh8.jpg", "name": "ÁO KHOÁC W1AKA01201FOSBB", "price": "580.000", "description": ["mota81.jpg", "mota82.jpg", "mota83.jpg", "mota84.jpg"] }];
			let cart = [{ "id": "_165061595198650444690", "image": "anh2.jpg", "name": "ÁO KHOÁC M1AKD03201FONTR", "price": "420.000 ", "color": "Xanh", "size": "M", "quantity": "2" }, { "id": "_165061590915458516357", "image": "anh1.jpg", "name": "ÁO KHOÁC M1AKD03202FONCR", "price": "385.000 ", "color": "Đen", "size": "XL", "quantity": "4" }];
			localStorage.setItem('listSp', JSON.stringify(listSp));
			localStorage.setItem('cart', JSON.stringify(cart));
			window.location.replace("http://127.0.0.1:5500/home/home.html");
		}
	} else {
		// showError(input, 'Thông tin tài khoản không chính xác');
		text_alert.innerText = "Thông tin tài khoản không chính xác";
		alert.classList.toggle("alert-login-success");
		setTimeout(() => {
			alert.classList.toggle("alert-login-success");
		}, 2000);
		return;
	}
}

// Check required fields
function checkRequired(inputArr) {
	let isRequired = false
	inputArr.forEach(function (input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`)
			isRequired = true
		} else {
			showSuccess(input)
		}
	})

	return isRequired
}

// Check input length
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(
			input,
			`${getFieldName(input)} must be at least ${min} characters`
		)
	} else if (input.value.length > max) {
		showError(
			input,
			`${getFieldName(input)} must be less than ${max} characters`
		)
	} else {
		showSuccess(input)
	}
}


// Get fieldname
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event listeners
form.addEventListener('submit', function (e) {
	e.preventDefault()

	if (!checkRequired([email, password])) {
		checkLength(password, 6, 25)
		checkEmail(email)
	}
})
