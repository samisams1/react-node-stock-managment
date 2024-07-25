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
      allowNull: true,
    },
    partNumId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mark: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    manufacturer_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    locatedAt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    measurement: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    min_qty: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    low_qty: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    max_qty: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    item_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    item_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    item_added: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    item_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    item_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    item_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
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
class ItemHistory extends Model {
  public id!:number;
  public status!:string;
  
  public readonly cratedAt!:Date;
  public readonly updatedAt!:Date;
  
  }
  ItemHistory.init({
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
      modelName:'ItemHistory',
      tableName:'itemHistories',
      timestamps:true,
      schema:'stock_schema'
  })

  class ItemIn extends Model {
    public id!:number;
    public status!:string;
    
    public readonly cratedAt!:Date;
    public readonly updatedAt!:Date;
    
    }
    ItemIn.init({
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
        modelName:'ItemIn',
        tableName:'itemIns',
        timestamps:true,
        schema:'stock_schema'
    })
    class ItemOut extends Model {
      public id!:number;
      public status!:string;
      
      public readonly cratedAt!:Date;
      public readonly updatedAt!:Date;
      
      }
      ItemIn.init({
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
          modelName:'ItemOut',
          tableName:'itemOuts',
          timestamps:true,
          schema:'stock_schema'
      })
export default Item;