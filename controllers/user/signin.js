const { user } = require("../../models");

module.exports = {
	post: (req, res) => {
		const { email, password } = req.body;

		req.session.regenerate(async () => {
			try {
				const foundUser = await user.findOne({
					where: {
						email: email,
						password: password
					}
				})

				if (!foundUser) return res.status(404).send("조회된 사용자 정보가 없습니다.");

				req.session.save(function () { // 세션 스토어에 저장!
					req.session.userId = foundUser.id;
					res.status(200).send({
						id: foundUser.id
					})
				});
			} catch (e) {
				res.status(404).send(e);
			}
		});
	}	
}