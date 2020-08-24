/* eslint-disable camelcase */
import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import Product from './Product';

class SubCategory extends Model {
  public id!: number;

  public name!: string;

  public removed!: boolean;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

SubCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    removed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { timestamps: true, tableName: 'subCategory', sequelize }
);

SubCategory.hasMany(Product, {
  sourceKey: 'id',
  foreignKey: { name: 'subcategoryId', allowNull: false },
});

export default SubCategory;
