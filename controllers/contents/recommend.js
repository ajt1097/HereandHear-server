const { content } = require("../../models");

module.exports = {
  post: async (req, res) => {
    console.log('recommend')
    let { weather, season } = req.body

    if (weather) {
      const data = await content.findAll({
        where: {
          weather: weather
        }
      }).catch((err) => res.json(err))

      res.status(200).send(data)
    } else if (season) {
      const data = await content.findAll({
        where: {
          season: season
        }
      }).catch((err) => res.json(err))

      res.status(200).send(data)
    }
  }
}