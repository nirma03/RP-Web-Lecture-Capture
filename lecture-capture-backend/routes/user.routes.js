const router = require("express").Router();
let User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//@route POST
//@desc Validate Login
router.route("/login").post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email }).then((user) => {
        if (!user) return res.status(400).json({ msg: "User Not Exist" });

        //decrypt password using bvrypt
        bcrypt.compare(password, user.password).then((isMatch) => {
            if (!isMatch) return res.status(400).json({ msg: "Invalid Credential" });
            jwt.sign(
                { id: user.id },
                process.env.jwtSecret,
                { expiresIn: 36000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            email: user.email,
                            type: user.type,
                        },
                    });
                }
            );
        });
    });
});


//@route POST
//@desc Add new User
router.route("/add").post((req, res) => {
    const email = req.body.email;
    const phoneNo = req.body.phoneNo;
    const password = req.body.password;
    const address = req.body.address;
    const gender = req.body.gender;
    const type = req.body.type;


    const newUser = new User({
        email,
        phoneNo,
        password,
        address,
        gender,
        type,

    });

//password encryption using bcrypt
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
                .save()
                .then(() => res.json("User added!"))
                .catch((err) => res.status(400).json("Error: " + err));
        });
    });
});

//@route GET
//@desc Get Specific User Using ID
router.route("/:id").get((req, res) => {
    User.findById(req.params.id)
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error: " + err));
});

//Export User Route
module.exports = router;