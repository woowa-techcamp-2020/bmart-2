/* eslint-disable camelcase */
import { Model } from 'sequelize';
import { sequelize } from './index';

class OrderProductRelation extends Model {
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

OrderProductRelation.init(
  {},
  { timestamps: true, tableName: 'orderProductRelation', sequelize }
);

export default OrderProductRelation;
