function User(Sequelize, DataTypes) {
  const User = Sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
     },
     firstName: DataTypes.STRING,
     lastName: DataTypes.STRING,
     age: DataTypes.INTEGER
  },
  {
    timestamps: false,
    tableName: 'Users',
    underscored: true,
  })

  return User;
}

module.exports = User;
