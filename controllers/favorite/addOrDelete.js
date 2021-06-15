const { favorites } = require("../../models");

module.exports = {
  post: async (req, res) => {
    let userId = req.body.userId;
    let contentId = req.body.contentId;

    let target = await favorites.findOne({
      where: {
        userId: userId,
        contentsId: contentId
      }
    })

    let created;

    if (target) {
      await target.destroy();
      res.send(target)
    } else {
      created = await favorites.create({
        userId: userId,
        contentsId: contentId
      })
      created = created.get({ plain: true })
      res.send(created);
    }
  }
}
