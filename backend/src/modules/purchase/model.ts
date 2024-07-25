import sequelize from '../../config/database';
import { DataTypes, Model } from "sequelize";
sequelize
class Purchase extends Model {
    public id!: number;
    public status!: string;

    public readonly crreatedAt!:Date;
    public readonly updatedAt!:Date;
}

Purchase.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    status:{
        type:DataTypes.STRING,
        allowNull:true
    }
},
{
    sequelize,
    modelName:'Purchase',
    tableName:'purchases',
    timestamps:true,
    schema:'stock_schema',
}
)
export default Purchase;