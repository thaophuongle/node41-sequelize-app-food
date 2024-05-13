import { sequelize } from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);
const addRating = async (req, res) => {
  try {
    let data = await rate_res.create({ user_id, res_id, amount });
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getRating = async (req, res) => {
  try {
    const { userId, resId } = req.params;
    const rating = await model.rate_res.findAll({
      where: {
        user_id: userId,
        res_id: resId,
      },
    });
    res.status(200).send(rating);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { addRating, getRating };
