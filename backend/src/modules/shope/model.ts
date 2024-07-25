import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
class Shope extends Model {
    public id!:number;
    public status!:string;


    public readonly  createdAt!:Date;
    public readonly updatedAt!:Date;
}

Shope.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
    },
    status:{
        type:DataTypes.STRING,
        allowNull:true
    }
},{
    sequelize,
    modelName:'Shope',
    tableName:'shopes',
    timestamps:true,
    schema:'stock_schema'

})
export default Shope;