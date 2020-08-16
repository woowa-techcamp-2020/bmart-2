import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import Order from './Order';
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
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  { timestamps: true, tableName: 'user', sequelize }
);

User.hasMany(Order, {
  sourceKey: 'id',
  foreignKey: { name: 'userId', allowNull: false },
});

User.hasMany(Dib, {
  sourceKey: 'id',
  foreignKey: { name: 'userId', allowNull: false },
});

User.hasMany(SearchHistory, {
  sourceKey: 'id',
  foreignKey: { name: 'userId', allowNull: false },
});

User.hasMany(Cart, {
  sourceKey: 'id',
  foreignKey: { name: 'userId', allowNull: false },
});

export default User;
