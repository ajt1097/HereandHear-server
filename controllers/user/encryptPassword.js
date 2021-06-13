const crypto = require('crypto');
const { user } = require("../../models");

// 비밀번호 암호화
module.exports = encryptPassword = async (password) => {
  let encrypted = await createHashedPassword(password);
  return encrypted;
}

// 비밀번호 해싱하기
const createHashedPassword = (password) => {
  return new Promise(async (res, rej) => {
		// salt
		const salt = await createSalt();
		// 암호화 되지 않은 비밀번호와 salt값을 이용해 sha512로 hashing
    crypto.pbkdf2(password, salt, 9999, 64, 'sha512', (err, key) => {
      if (err) rej(err);
      res({ password: key.toString('base64'), salt });
    });
  });
}

// crypto 모듈의 randomBytes 메서드 통해 랜덤 salt 만들기
const createSalt = () => {
  return new Promise((res, rej) => {
    crypto.randomBytes(64, (err, buf) => {
			if (err) rej(err);
			res(buf.toString('base64'));
    });
  });
}
