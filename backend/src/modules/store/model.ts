import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
export interface StoreAttributes extends Omit<Store, "id" | "createdAt" | "updatedAt"> {}
class Store extends Model {
    public id!:number;
    public status!:string;

    public readonly createdAt!:Date;
    public readonly updatedAt!:Date;
}

Store.init({
    id:{
        type:DataTypes.NUMBER,
        primaryKey:true,

    },
    status: {
       type:DataTypes.NUMBER,
       allowNull:true
    }
},{
    sequelize,
     modelName:'Store',
     tableName:'stores',
     timestamps:true,
     schema:'stock_schema'
    })
    export default Store;