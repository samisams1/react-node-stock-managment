import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
class Payment extends Model {

    public id!:number;
    public status!:string;

    public readonly createdAt!:Date;
    public readonly upatedAt!:Date;
}


Payment.init({
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
    modelName:'Payment',
    tableName:'payments',
    timestamps:true,
    schema:'stock_schema'
})
class PaymentHistory extends Model {

    public id!:number;
    public status!:string;

    public readonly createdAt!:Date;
    public readonly upatedAt!:Date;
}
PaymentHistory.init({
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
    modelName:'Payment',
    tableName:'payments',
    timestamps:true,
    schema:'stock_schema'
})
export default  Payment;