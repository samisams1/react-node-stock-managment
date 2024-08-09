import { DataTypes, Model } from "sequelize";
import sequelize from '../../config/database';
export interface BankAttributes extends Omit<Bank, "id" | "createdAt" | "updatedAt"> {}
class Bank extends Model {
    public id!: number;
    public title!:string;
    public  status!:string;

    public readonly createdAt!:Date;
    public readonly updatedAt!:Date;

}
Bank.init(
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        title:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        status:{
            type:DataTypes.STRING,
            allowNull:true
        }
    },
    {
  sequelize,
  modelName: 'Bank',
  tableName:'banks',
  timestamps:true,
  schema:'stock_schema'
    }
);

export default Bank;