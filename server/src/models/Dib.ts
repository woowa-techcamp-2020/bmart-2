import { Model } from 'sequelize';
import { sequelize } from './index';

class Dib extends Model {
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Dib.init({}, { timestamps: true, tableName: 'dib', sequelize });

export default Dib;
