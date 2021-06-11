const { favorites } = require("../../models");

module.exports = {
  post: async (req, res) => {
    console.log('add')
    let id = req.session.userId;
    let contentId = req.body.contentId;

    let target = await favorites.findOne({
      where: {
        userId: id,
        contentsId: contentId
      }
    })

    if (target) {
      res.status(404).send();
    } else {
      await favorites.create({
        userId: id,
        contentsId: contentId
      })
    }
    res.end()
  }
}