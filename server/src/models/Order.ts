/* eslint-disable camelcase */
import { Model } from 'sequelize';
import { sequelize } from './index';

class Order extends Model {
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Order.init({}, { timestamps: true, tableName: 'order', sequelize });

export default Order;
