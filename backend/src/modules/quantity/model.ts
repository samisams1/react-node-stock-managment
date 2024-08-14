import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
export interface QuantityAttributes extends Omit<Quantity, "id" | "createdAt" | "updatedAt"> {}
class Quantity extends Model {
    public id!:number;
    public status!:string;
    public itemId!: number;
    public branchId!: number;
    public unitId!: number;
    public quantity!: number;

    public readonly createdAt!:Date;
    public readonly updatedAt!:Date;
  
}

Quantity.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'items',
            schema: 'stock_schema',
          },
          key: 'id',
        },
      },
      branchId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'branches',
            schema: 'stock_schema',
          },
          key: 'id',
        },
      },
      unitId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'units',
            schema: 'stock_schema',
          },
          key: 'id',
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
},  {
    sequelize,
    modelName: 'Quantity',
    tableName: 'quantities',
    timestamps: true,
    schema: 'stock_schema',
  })
    export default Quantity;