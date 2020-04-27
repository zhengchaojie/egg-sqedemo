/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('role', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    menuList: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    operationList: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mark: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    agent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'role'
  });

  Model.associate = function() {

  }

  return Model;
};
