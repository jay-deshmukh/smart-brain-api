const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db.select("*")
    .from("users")
    .where({ id })
    .then(user => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("Not found");
      }
    })
    .catch(err => res.status(400).json("error getting user"));
};
const handleProfileUpdate = (req, res, db) => {
  const { id } = req.params;
  const { name, age, pet } = req.body.formInput;
  db("users")
    .where({ id })
    .update({ name })
    .then(resp => {
      if (resp) {
        res.json("Success");
      } else {
        res.status(400).json("Unable To Update");
      }
    })
    .catch(err => {
      res.status(400).json(err.toString());
    });
};

module.exports = {
  handleProfileGet,
  handleProfileUpdate
};
