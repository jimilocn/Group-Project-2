module.exports = function (sequelize, Sequelize) {
  var chat = sequelize.define("chat", {
    id: {type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
    username: {type: Sequelize.STRING(50), allowNull: false},
    message: {type: Sequelize.STRING(250), allowNull: false},
    created: {type: Sequelize.DATE,timestamps: true, allowNull: false},
    updated: {type: Sequelize.DATE,timestamp: true, allowNull: false}
  }, {
      freezeTableName: true
    });
  return chat;
}