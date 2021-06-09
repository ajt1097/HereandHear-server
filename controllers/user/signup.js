const { user } = require("../../models");

module.exports = {
	post: async (req, res) => {
		console.log('signUp!!')
		console.log(req.body)
		let { email, password, username } = req.body;

		let [result, created] = await user.findOrCreate({
      where: { email: email },
      defaults: {
        username: username,
        password: password
      },
    });
    if (!created) {
      return res.status(409).send('email exists');
    }
    res.status(201).json(result);
	}
}