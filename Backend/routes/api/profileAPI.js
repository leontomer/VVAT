const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Profile = require("../../models/Profile");
const auth = require("../../middleware/auth");

router.get("/finduserprofile/:email", async (req, res) => {
  otherEmail = req.params.email;
  try {
    const otherUser = await User.findOne({ email: otherEmail })

      .select("-password")
      .populate("profile");

    res.json({ other: otherUser });
  } catch (err) {
    res.status(500).send("finduserprofile error");
  }
});

router.post("/saveprofile", auth, async (req, res) => {
  try {
    const Finduser = await User.findById(req.user.id);

    const { name, description, age, facebook } = req.body;
    if (!Finduser.profile) {
      let profile = new Profile({
        description: description,
        age: age,
        facebook: facebook,
      });
      // const { name, description } = req.body;
      // if (!Finduser.profile) {
      //   let profile = new Profile({
      //     description: description,
      //   });
      await profile.save();

      Finduser.profile = profile._id;
      //await Finduser.save();
    } else {
      profile = await Profile.findById(Finduser.profile);
      profile.description = description;
      profile.age = age;
      profile.facebook = facebook;
      await profile.save();
    }

    Finduser.name = name;
    await Finduser.save();
    const user = await User.findById(req.user.id).populate("profile");
    res.json({ user: user });
  } catch (err) {
    console.log("error");
    res.status(500).send("Server error");
  }
});

module.exports = router;
