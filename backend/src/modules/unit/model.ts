import sequelize from '../../config/database';
import { DataTypes, Model } from "sequelize";
export interface UnitAttributes extends Omit<Unit, "id" | "createdAt" | "updatedAt"> {}
class Unit extends Model {
    public id!: number;
    public name!: string;
    public description!: string;

    public readonly crreatedAt!:Date;
    public readonly updatedAt!:Date;
}

Unit.init({
  
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},
{
    sequelize,
    modelName:'Unit',
    tableName:'units',
    timestamps:true,
    schema:'stock_schema',
}
)
export default Unit;