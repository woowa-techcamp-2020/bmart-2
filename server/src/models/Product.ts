/* eslint-disable camelcase */
import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import Cart from './Cart';
import Dib from './Dib';
import Order from './Order';

class Product extends Model {
  public id!: number;

  public price!: number;

  public subcategory!: number;

  public discount!: number;

  public name!: string;

  public max_quantity!: number;

  public stock!: number;

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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    max_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
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
