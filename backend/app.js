const express = require("express");
const bodyParser = require("body-parser");
const { TeamMember } = require("./model");

const app = express();

app.use(bodyParser.json());

app.get("/team", async (req, res, next) => {
  const team = await TeamMember.findAll({
    // 1 - filter out createdAt and updatedAt properties
    attributes: { exclude: ["createdAt", "updatedAt"] },
    // 2 - order by firstName ASC
    order: [["firstName"]],
  });

  return res.json(team);
});

// 3 - Please create an endpoint for adding team members here
app.post("/team", async (req, res) => {
  try {
    // require: firstName, lastName
    const { firstName, lastName } = req.body;
    const newTeamMember = await TeamMember.create({
      firstName,
      lastName,
    });
    return res.json({ ...newTeamMember.dataValues });
  } catch (e) {
    console.log(e);
    return res.json({ error: e.message, message: "An error occured!" });
  }
});

module.exports = app;
