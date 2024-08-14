import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";
import { SellingPrice } from "../../modules/sales/mode";
import { PurchasePrice } from "../../modules/purchase/model";
import Quantity from "../../modules/quantity/model";
import Item from "../../modules/item/model";
export interface ShopeAttributes extends Omit<Shope, "id" | "createdAt" | "updatedAt"> {}
class Shope extends Model {
    public id!:number;
    public itemId!:Item;
    public sellingPriceId!:SellingPrice;
    public purchasePriceId!:PurchasePrice;
    public quantity_id!:Quantity;
    public status!:string;

    public readonly  createdAt!:Date;
    public readonly updatedAt!:Date;
}

Shope.init({
    
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
      sellingPriceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'sellingPrices',
            schema: 'stock_schema',
          },
          key: 'id',
        },
      },
      purchasePriceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'purchasePrices',
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
    quantityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'quantities',
            schema: 'stock_schema',
          },
          key: 'id',
        },
      },
    createdById: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
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
    status:{
        type:DataTypes.STRING,
        allowNull:true
    }
},{
    sequelize,
    modelName:'Shope',
    tableName:'shops',
    timestamps:true,
    schema:'stock_schema'

})
export default Shope;