module.exports = function (sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    freezeTableName: true
  });
  return Todo;
}