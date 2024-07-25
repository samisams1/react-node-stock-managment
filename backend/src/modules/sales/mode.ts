import { DataTypes, Model } from "sequelize";
import sequelize from '../../config/database';


class Sales extends Model  {
    public id!:number;
    public status!:string;


    public readonly createdAt!:Date;
    public readonly updatedAt!:Date;
}

Sales.init(
    {
      id:{
        type:DataTypes.INTEGER
      },
      status:{
        type:DataTypes.STRING
      }
    },{
        sequelize,
        modelName:'Sale',
        tableName:'sales',
        timestamps:true,
        schema: 'stock_schema',
    });
export default Sales;