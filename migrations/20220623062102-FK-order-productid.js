'use strict';

module.exports = {
   up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.addColumn('Orders','ProductId',{
      type: Sequelize.INTEGER,
      references:{
        model: 'Products',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      }
  })
  },

   down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.removeColumn('Orders','ProductId')

  }
};
