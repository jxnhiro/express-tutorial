const express = require("express");
const router = express.Router();

let { people } = require("../data");
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

router.get("/", getPeople);

router.post("/", createPerson);

/**
 * Body or payload is crucial in POST method.
 * In HTML, the name is the key of the payload.
 */

router.post("/postman", createPersonPostman);

/**
 * Do not think if we have a different method, we need to set a different path.
 * Different method itself is already a different request.
 */

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

/**
 * router.route('/').get(getPeople).post(createPerson);
 * router.route('/postman').post(createPersonPostman);
 * router.route('/:id).put(updatePerson).delete(deletePerson);
 */

module.exports = router;
