import { DataTypes, Model } from "sequelize";
import sequelize from '../../config/database';

class Transfer extends Model {
    public id!:number;
    public status!:number;


    public readonly createdAt!:Date;
    public readonly updatedAt!:Date;
}
    Transfer.init({
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        status:{
            type:DataTypes.STRING,
            allowNull:true,
        }
    },{
        sequelize,
        modelName:'Transfer',
        tableName:'transfers',
        timestamps:true,
        schema: 'stock_schema',
    })

export default Transfer;