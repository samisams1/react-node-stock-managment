import { DataTypes, Model } from "sequelize";
import sequelize from '../../config/database';

export interface SalesAttributes extends Omit<Sales, "id" | "createdAt" | "updatedAt"> {}
export interface SalelingPriceAttributes extends Omit<Sales, "id" | "createdAt" | "updatedAt"> {}

class Sales extends Model {
  public id!: number;
  public status!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Sales.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Sale',
    tableName: 'sales',
    timestamps: true,
    schema: 'stock_schema',
  }
);

export { Sales };

class SellingPrice extends Model {
  public id!: number;
  public status!: string;
  public itemId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SellingPrice.init(
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
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'SellingPrice',
    tableName: 'sellingPrices',
    timestamps: true,
    schema: 'stock_schema',
  }
);

export { SellingPrice };