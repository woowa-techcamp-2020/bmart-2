/* eslint-disable camelcase */
import { Model, DataTypes } from 'sequelize';
import { sequelize } from './index';

class OrderProductRelation extends Model {
  public count!: number;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

OrderProductRelation.init(
  {
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true, tableName: 'orderProductRelation', sequelize }
);

export default OrderProductRelation;
