import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import Order from './Order';
import Product from './Product';
import Dib from './Dib';
import SearchHistory from './SearchHistory';
import Cart from './Cart';

class User extends Model {
  public id!: number;

  public name!: string;

  public email!: string;

  public password!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

User.init(
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
    email: {
      type: DataTypes.STRING(45),
      unique: true,
    },
    password: {
      type: DataTypes.STRING(45),
    },
  },
  { timestamps: true, tableName: 'user', sequelize }
);

User.hasMany(Order, {
  sourceKey: 'id',
  foreignKey: { name: 'userId', allowNull: false },
});

User.hasMany(SearchHistory, {
  sourceKey: 'id',
  foreignKey: { name: 'userId', allowNull: false },
});

User.belongsToMany(Product, {
  through: Dib,
  foreignKey: { name: 'userId', allowNull: false },
  otherKey: { name: 'productId', allowNull: false },
});

User.belongsToMany(Product, {
  through: Cart,
  foreignKey: { name: 'userId', allowNull: false },
  otherKey: { name: 'productId', allowNull: false },
});

export default User;
