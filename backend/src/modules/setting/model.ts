import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
class Setting extends Model {
    public id!:number;
    public status!:number;

    public readonly createdAt!:Date;
    public readonly updatedAt!:Date;

}

Setting.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    status:{
        type:DataTypes.STRING,
        allowNull:true
    }
},{
    sequelize,
    modelName:'Setting',
    tableName:'settings',
    timestamps:true,
    schema:'stock_schema',
})
export default Setting;