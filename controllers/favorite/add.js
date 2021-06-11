const { favorites } = require("../../models");

module.exports = {
  post: (req, res) => {
    console.log('add')
    let id = req.session.userId;
    let contentId = req.body.contentId;

    favorites.create({
      userId: id,
      contentsId: contentId
    })
    res.end()
  }
}