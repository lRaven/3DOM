function returnErrorMessages(data) {
	let error_list = [];
	const error_messages = {
		email: 'Почта',
		username: 'Логин',
		current_password: 'Пароль',
		password: 'Пароль',
		phone_number: 'Телефон',
		avatar: 'Изображение профиля',
		apartment: 'Квартира',
		building: 'Проект',
		client: 'ФИО',
		date: 'Дата',
		time: 'Время',
	}
	for (let prop in data) {
		let key = '';
		error_messages[prop] ? key += error_messages[prop] + ': ' : key += ''

		if (Object.prototype.hasOwnProperty.call(data, prop)) {
			data[prop].forEach((el) => { error_list.push(`${key} ${el}`); });
		}
	}
	return error_list;
}

export { returnErrorMessages }