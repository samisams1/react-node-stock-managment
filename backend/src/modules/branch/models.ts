import { DataTypes, Model } from "sequelize";
import sequelize from '../../config/database';

export interface BranchAttributes extends Omit<Branch, "id" | "createdAt" | "updatedAt"> {}
class Branch extends Model {
    public id!: number;
    public name!: string;
    public address!: string;
    public phone!: string;
    public email!: string;
    public status!: 'active' | 'inactive' | 'deleted';

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Branch.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true,
        },
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive', 'deleted'),
        allowNull: false,
        defaultValue: 'active',
    },
}, {
    sequelize,
    modelName: 'Branch',
    tableName: 'branches',
    timestamps: true,
    schema: 'stock_schema',
});

export default Branch;