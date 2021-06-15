const { user } = require("../../models");

module.exports = {
  post: async (req, res) => {

    let userId = req.body.userId;
    let nickname = req.body.nickname;

    if (!nickname) {
      res.status(400).send()
    } else {
      user.update({
        nickname: nickname
      }, {
        where: { id: userId }
      })
    }

    res.end()
  }
}