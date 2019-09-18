export default (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    foodName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'food name already exists'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide a food name'
        }
      }
    },
    foodPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide a food price'
        },
        isNumeric: {
          args: true,
          msg: 'Food price should be only numbers'
        }
      }
    },
    foodImage: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide a food image'
        },
        isUrl: {
          args: true,
          msg: 'Image format for food is invalid'
        },
      }
    }
  }, {});
  // Menu.associate = (models) => {
  //   Menu.belongsTo(models.User);
  // };
  return Menu;
};
