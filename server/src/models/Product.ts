/* eslint-disable camelcase */
import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import Cart from './Cart';
import Dib from './Dib';
import Order from './Order';
import User from './User';
import SubCategory from './SubCategory';

class Product extends Model {
  public id!: number;

  public price!: number;

  public subcategoryId!: number;

  public thumbImgUrl!: string;

  public mainImgUrl!: string;

  public description!: string;

  public discount!: number;

  public name!: string;

  public maxQuantity!: number;

  public stock!: number;

  public removed!: number;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    subcategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    thumbImgUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    mainImgUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    maxQuantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    removed: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  { timestamps: true, tableName: 'product', sequelize }
);

export default Product;
