'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('items', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      item_code: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      partNumId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      item_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      brand_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      mark: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      manufacturer: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      manufacturer_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      expiry_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      locatedAt: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      group_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      measurement: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      min_qty: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      low_qty: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      max_qty: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      price_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      item_image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      item_description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      item_added: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      item_time: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      item_status: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      item_active: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    },
    {
      schema: 'stock_schema',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('items');
  },
};