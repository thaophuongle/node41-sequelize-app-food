import { sequelize } from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const orderFood = async (req, res) => {
  const { user_id, food_id, amount, code, arr_sub_id } = req.body;
  try {
    //Kiểm tra người dùng có tồn tại trong database
    const existingUser = await model.user.findByPk(user_id);
    if (!existingUser) {
      return res.status(404).send("User not found");
    }

    //Kiểm tra xem food có tồn tại trong database
    const existingFood = await model.food.findByPk(food_id);
    if (!existingFood) {
      return res.status(404).send("Food not found");
    }
    let foodOrder = await model.order.create({
      user_id,
      food_id,
      amount,
      code,
      arr_sub_id,
    });
    res.status(200).send(foodOrder);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { orderFood };
