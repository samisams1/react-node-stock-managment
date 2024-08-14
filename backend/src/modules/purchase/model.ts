import sequelize from '../../config/database';
import { DataTypes, Model } from "sequelize";
export interface PurchaseAttributes extends Omit<Purchase, "id" | "createdAt" | "updatedAt"> {}
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
export  {Purchase};
class PurchasePrice extends Model {
    public id!: number;
    public price!: number;
    public itemId!: number;
  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  PurchasePrice.init(
    {
      id: {
        type: DataTypes.INTEGER,
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
      price: {
        type: DataTypes.DECIMAL,
      },
    },
    {
      sequelize,
      modelName: 'PurchasePrice',
      tableName: 'purchasePrices',
      timestamps: true,
      schema: 'stock_schema',
    }
  );
  
  export { PurchasePrice };