const { user } = require("../../models");

module.exports = {
  post: async (req, res) => {
    let userId = req.session.userId;
    let nickname = req.body.nickname;
    let password = req.body.password;

    if (!nickname & !password) {
      res.status(400).send()
    } else if (!nickname & password) {
      user.update({
        password: password
      }, {
        where: { id: userId }
      })
    } else if (!password & nickname) {
      user.update({
        nickname: nickname
      }, {
        where: { id: userId }
      })
    } else {
      user.update({
        password: password,
        nickname: nickname
      }, {
        where: { id: userId }
      })
    }
    res.end()
  }
}