const getAllTemperamentsDb = require("../../Controllers/Temperaments/getAllTemperamentsDb");

const getAllTemperamentsHandler = async (req, res) => {
  try {
    const allTemperaments = await getAllTemperamentsDb();
    res.status(200).json(allTemperaments);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = getAllTemperamentsHandler;
