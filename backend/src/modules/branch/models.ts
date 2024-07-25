import { DataTypes, Model } from "sequelize";
import sequelize from '../../config/database';
class Branch extends Model {
    public id!:number;
    public status!:number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
Branch.init({
    id:{
       type:DataTypes.INTEGER,
       primaryKey:true
    },
    status:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
},
{
    sequelize,
    modelName:'Branch',
    tableName:'branches',
    timestamps:true,
    schema:'stock_schema'

}
)
export default Branch;