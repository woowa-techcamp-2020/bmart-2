/* eslint-disable camelcase */
import { Model, DataTypes } from 'sequelize';
import { sequelize } from './index';

class Cart extends Model {
  public count!: number;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Cart.init(
  {
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true, tableName: 'cart', sequelize }
);

export default Cart;
