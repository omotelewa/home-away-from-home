const db=require("../models");
module.exports = {
  //select all users
  getAllUser: (req, res) => {
    db
      .patron
      .findAll()
      .then(dbUser => {
        res.json(dbUser);

      })
      .catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  },
  //select a user activities
  getdbUsersActivities: (req, res) => {
    db
      .Users
      .findAll({
        where: {
          id: req.params.userId
        },
        include: [db.user,db.property,db.listingInfo,db.reservations,db.patrons,db.amenities]
      })
      .then(dbuser => {
        res.json(dbuser);

      })
      .catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  },
  //check if user is logged in
  UserCheck: function (req, res) {
    if (req.patron) {
      console.log(req.user);
      return res.json(req.user);
    } else {
      return res.status(422).json({
        error: "Not logged in!"
      })
    }
  },
  //add a patron where we will make use of 
  register: function (req, res) {
    db
      .Users
      .create(req.body)
      .then(function (userInfo) {
        // Upon successful signup, log user in
        req
          .login(userInfo, function (err) {
            if (err) {
              console.log(err)
              return res
                .status(422)
                .json(err);
            }
            console.log(req.user);
            return res.json("/");
          });
      })
      .catch(function (err) {
        console.log(err);
        res
          .status(422)
          .json(err);
      });
  },
  login: function (req, res) {
    console.log(req.user);
    res.json("Logged In");
  },

  //update a user /:id
  changePassword: (req, res) => {
    // console.log(req.body);
    db.Users.update({
        password: req.body.password
      }, {
        where: {
          id: req.params.id
        }
      }).then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log("Change Password Error: " + err);
        res.status(400).json(err);
      });

  },
  //update a user /:id
  updateAccount: (req, res) => {
   // console.log(req.body);
    db.Users.update(req.body, {
        where: {
          id: req.params.id
        }
      }).then(result => {
        return db.Users.findById(req.params.id)
      })
      .then(result => {
        console.log(result);
       // req.user.photo = results.photo;
        res.json(result);
      })
      .catch(err => {
        console.log("Change Password Error: " + err);
        res.status(400).json(err);
      });
  },

  //delete a user
  deleteUser: (req, res) => {
    db.Users.destroy({
        where: {
          id: req.params.id
        }
      }).then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log("Delete Error: " + err);
        res.status(400).json(err);
      });

  }
}
