/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('login', {
    name: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(100),
      allowNull: false
    },
    sexy: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mark: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    agent: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'login'
  });

  Model.associate = function() {

  }

  return Model;
};
