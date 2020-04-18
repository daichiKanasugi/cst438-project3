const router = require('express').Router();
let User = require('../models/users.model');
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

//If user found great, if not ERROR!
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// //VALIDATION
// const Joi = require('@hapi/joi');
// const schema = new Schema({
//   name: Joi.string()
//     .min(3)
//     .required(),
//   email: Joi.string()
//     .min(3)
//     .required()
//     .email(),
//   password: Joi.string()
//     .min(3)
//     .required()
// })

//!!!!----Creates users -----!!!!! */
router.route('/add').post((req, res) => {
  // const {error} = Joi.ValidationError(req.body, schema);
  // if(error) return res.status(400).send(error.details[0].message);

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  
  // const usernameExist = await User.findOne({username: req.body.username });
  // if (usernameExist) return res.status(400).send('Username already exists');

  const newUser = new User({username, email, password});
    newUser
      .save()
      .then(user => res.json(user), console.log(newUser, " has been added!"))
      .catch(err => console.log(err));
});


module.exports = router;