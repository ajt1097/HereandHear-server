const { content } = require("../../models");

module.exports = {
	post: async (req, res) => {
		console.log('------------- contents category post request!!!')
		console.log('req.body === ', req.body)

		let target = req.body.category;

		const data = await content.findAll({
			where: {
				category: target
			}
		}).catch((err) => res.json(err));

		console.log('---- data === ', data);

		res.status(200).send({data})
	}	
}