'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shops', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      itemId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'items',
          key: 'id',
        },
      },
      branchId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'branches',
          key: 'id',
        },
      },
      sellingPriceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sellingPrices',
          key: 'id',
        },
      },
      purchasePriceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'purchasePrices',
          key: 'id',
        },
      },
      unitId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'units',
          key: 'id',
        },
      },
      quantityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'quantities',
          key: 'id',
        },
      },
      createdById: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      status: {
        type: Sequelize.ENUM('active', 'inactive', 'deleted'),
        allowNull: false,
        defaultValue: 'active',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }, {
      schema: 'stock_schema',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('shops');
  },
};