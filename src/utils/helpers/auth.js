import * as crypto from 'crypto';

export const generateToken = (password) => {
	const salt = new Buffer(Date.now().toString());

	var hash = crypto.createHmac('sha512', salt);
	hash.update(password);

	return hash.digest('hex');
};