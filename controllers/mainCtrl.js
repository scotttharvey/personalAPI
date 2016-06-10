var user = require('../modules/user')

module.exports = {
    getName: function(req, res, next) {
        res.status(200).json(user.name)
    },
    getLocation: function(req, res, next) {
        res.status(200).json(user.location)


    },
    getOccupations: function(req, res, next) {
        res.status(200).json(user.occupations)
        if (req.query.order) {
            if (req.query.order === 'desc') {
                res.status(200).json(user.occupations.sort())
            } else {
                res.status(200).json(user.occupations.reverse())
            }
        }
        res.status(200).json(user.occupations)
    },

    getLatestOccupations: function(req, res, next) {
        res.status(200).json(user.latestOccupation)

    },
    getHobbies: function(req, res, next) {
        res.status(200).json(user.hobbies)

    },
    getHobbiesType: function(req, res, next) {
        for (var i = 0; i < user.hobbies.length; i++) {
            if (user.hobbies[i].type === req.params.type) {
                res.status(200).json(user.hobbies[i].name)
            }
        }
    },
    updateName: function(req, res, next) {
      user.name = req.params.id
        res.status(200).json(user.name)

    },
    updateLocation: function(req, res, next) {
      user.location = req.params.id
        res.status(200).json(user.location)
          },
    createHobbies: function(req, res, next) {
      user.hobbies.push(req.query.hobby)
        res.status(200).json(user.hobbies)

    },
    createOccupations: function(req, res, next) {
      user.occupations.push(req.body.occupation)
        res.status(200).json(user.occupations)

    }
    createSkills: function(req, res, next){
      skills.push(req.body)
      res.status(200).json(skills)

    }








}
