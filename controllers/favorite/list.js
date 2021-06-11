const { content, favorites } = require("../../models");

module.exports = {
  get: async (req, res) => {
    console.log('list')
    let id = req.session.userId;
    const result = await favorites.findAll({
      include: [{
        model: content,
      }],
      where: { userId: id }
    });
    let result2 = result.map(el => {
      return el.dataValues.content.dataValues;
    })

    res.send(result2);
  }
}