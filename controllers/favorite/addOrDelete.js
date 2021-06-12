const { favorites } = require("../../models");

module.exports = {
  post: async (req, res) => {
    let id = req.session.userId;
    let contentId = req.body.contentId;

    let target = await favorites.findOne({
      where: {
        userId: id,
        contentsId: contentId
      }
    })

    if (target) {
      await target.destroy();
    } else {
      await favorites.create({
        userId: id,
        contentsId: contentId
      })
    }
    res.end()
  }
}