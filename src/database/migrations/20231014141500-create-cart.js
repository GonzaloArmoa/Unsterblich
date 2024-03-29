'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unityPrice: {
        type: Sequelize.FLOAT
      },
      subtotal: {
        type: Sequelize.FLOAT
      },
      productId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Products'
          }
        }
      },
      amount: {
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Orders'
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Carts');
  }
};