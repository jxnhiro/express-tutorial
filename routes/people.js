const express = require("express");
const router = express.Router();

let { people } = require("../data");

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value." });
  } else {
    return res
      .status(201)
      .json({ success: true, msg: "Successful", person: name });
  }
});

/**
 * Body or payload is crucial in POST method.
 * In HTML, the name is the key of the payload.
 */

router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  } else {
    res.status(201).send({ success: true, data: [...people, name] });
  }
});

/**
 * Do not think if we have a different method, we need to set a different path.
 * Different method itself is already a different request.
 */

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // TODO: Find is to search for the one element in an array.
  // TODO: Map is to for loop an array.

  //   If bracket use return keyword, but if only one-line function then do not use any return keyword.
  const person = people.find((person) => {
    return person.id === Number(id);
  });

  console.log(person);
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => {
    return person.id === Number(id);
  });

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  // Filter is mapping the array and putting it back into the array if condition is in par with the mapped member.
  const newPeople = people.filter((person) => person.id !== Number(id));

  res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
