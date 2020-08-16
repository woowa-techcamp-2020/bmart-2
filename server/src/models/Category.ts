/* eslint-disable camelcase */
import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import SubCategory from './SubCategory';

class Category extends Model {
  public id!: number;

  public name!: string;

  public img_url!: string;

  public removed!: boolean;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Category.init(
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
    img_url: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    removed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { timestamps: true, tableName: 'category', sequelize }
);

Category.hasMany(SubCategory, {
  sourceKey: 'id',
  foreignKey: { name: 'categoryId', allowNull: false },
});

export default Category;
