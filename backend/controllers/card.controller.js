const Card = require("../model/card.model");

// Create and Save a new Card
exports.create = (req, res) => {
  const cardData = {
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority,
    imgUrl: req.body.imgUrl,
    socialLinks: req.body.socialLinks,
  };
  const new_card = new Card(cardData);
  new_card.save(function (err, result) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(result);
      res.status(201).send(result);
    }
  });
};

// Get all Card
exports.findAll = (req, res) => {
  Card.find({}, (err, docs) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(docs);
      res.send(docs);
    }
  });
};

// Delete A Card
exports.delete = async (req, res) => {
  try {
    await Card.deleteOne({ _id: req.params.id });
    res.redirect("/card");
  } catch (err) {
    console.log(err);
    res.redirect("/card");
  }
};

// Update A Card
exports.update = async (req, res) => {
  try {
    const cardData = {
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
      priority: req.body.priority,
      imgUrl: req.body.imgUrl,
      socialLinks: req.body.socialLinks,
    };
    await Card.updateOne({ _id: req.params.id }, cardData);
    res.redirect("/card");
  } catch (err) {
    console.log(err);
    res.redirect("/card");
  }
}