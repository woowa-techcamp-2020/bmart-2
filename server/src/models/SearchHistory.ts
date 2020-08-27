import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class SearchHistory extends Model {
  public id!: number;

  public keyword!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

SearchHistory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    keyword: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },

  { timestamps: true, tableName: 'searchHistory', sequelize }
);

export default SearchHistory;
