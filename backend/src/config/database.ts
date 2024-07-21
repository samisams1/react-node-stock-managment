
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('stock', 'postgres', 'samisams', {
  host: 'localhost',
  dialect: 'postgres',
  schema: 'stock_schema', 
});

export default sequelize; 