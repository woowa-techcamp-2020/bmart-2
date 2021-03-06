/* eslint-disable camelcase */
import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class Banner extends Model {
  public id!: number;

  public imgUrl!: string;

  public removed!: boolean;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Banner.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    imgUrl: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    removed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { timestamps: true, tableName: 'banner', sequelize }
);

export default Banner;
