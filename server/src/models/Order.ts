/* eslint-disable camelcase */
import { Model, DataTypes } from 'sequelize';
import { sequelize } from './index';
import Product from './Product';
import OrderProductRelation from './OrderProductRelation';

class Order extends Model {
  public id!: number;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
  },
  { timestamps: true, tableName: 'order', sequelize }
);

Order.belongsToMany(Product, {
  through: OrderProductRelation,
  foreignKey: { name: 'orderId', allowNull: false },
  otherKey: { name: 'productId', allowNull: false },
});

export default Order;
