import { Model, DataTypes, BelongsToSetAssociationMixin } from 'sequelize';
import sequelize from '../../config/database';

class Item extends Model {
  public id!: number;
  public item_code!: string;
  public partNumId!: number;
  public item_name!: string;
  public brand_id!: number;
  public mark!: string;
  public model!: string;
  public manufacturer!: string;
  public manufacturer_date!: Date;
  public expiry_date!: Date;
  public locatedAt!: string;
  public category_id!: number;
  public group_id!: number;
  public measurement!: string;
  public min_qty!: number;
  public low_qty!: number;
  public max_qty!: number;
  public price_id!: number;
  public item_image!: string;
  public item_description!: string;
  public item_added!: Date;
  public item_time!: Date;
  public item_status!: string;
  public item_active!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    item_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    partNumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mark: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manufacturer_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    locatedAt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    measurement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    min_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    low_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    max_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_added: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    item_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    item_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Item',
    tableName: 'items',
    timestamps: true,
    schema: 'stock_schema',
  }
);

export default Item;