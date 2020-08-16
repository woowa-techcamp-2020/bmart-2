import { Model } from 'sequelize';
import { sequelize } from './index';

class Order extends Model {
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Order.init({}, { timestamps: true, tableName: 'dib', sequelize });

export default Order;
