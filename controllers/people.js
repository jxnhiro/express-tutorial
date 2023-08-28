const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
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
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  } else {
    res.status(201).send({ success: true, data: [...people, name] });
  }
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
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
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
