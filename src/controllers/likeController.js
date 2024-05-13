import { sequelize } from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);
const likeRestaurant = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;
    let data = await model.like_res.create({ user_id, res_id });
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const unlikeRestaurant = async (req, res) => {
  try {
    const { user_id, res_id } = req.params;
    let data = await model.like_res.destroy({ where: { user_id, res_id } });
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getLike = async (req, res) => {
  try {
    const { userId, resId } = req.params;
    const like = await model.like_res.findOne({
      where: {
        user_id: userId,
        res_id: resId,
      },
    });
    res.status(200).send(like);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { likeRestaurant, unlikeRestaurant, getLike };
