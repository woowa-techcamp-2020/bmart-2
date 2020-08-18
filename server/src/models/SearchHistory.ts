import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class SearchHistory extends Model {
  public id!: number;

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
  },
  { timestamps: true, tableName: 'searchHistory', sequelize }
);

export default SearchHistory;
