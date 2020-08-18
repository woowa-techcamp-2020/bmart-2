/* eslint-disable camelcase */
import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import Cart from './Cart';
import Dib from './Dib';
import Order from './Order';

class Product extends Model {
  public id!: number;

  public price!: number;

  public subcategory_id!: number;

  public thum_img_url!: string;

  public main_img_url!: string;

  public description!: string;

  public discount!: number;

  public name!: string;

  public max_quantity!: number;

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
    subcategory_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    thum_img_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    main_img_url: {
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
    max_quantity: {
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

Product.hasMany(Cart, {
  sourceKey: 'id',
  foreignKey: { name: 'productId', allowNull: false },
});

Product.hasMany(Dib, {
  sourceKey: 'id',
  foreignKey: { name: 'productId', allowNull: false },
});

Product.hasMany(Order, {
  sourceKey: 'id',
  foreignKey: { name: 'product_Id', allowNull: false },
});

export default Product;
