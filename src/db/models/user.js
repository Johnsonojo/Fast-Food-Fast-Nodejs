import bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Username already exists'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide a username'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email address already exists'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide email address'
        },
        isEmail: {
          args: true,
          msg: 'Email address is not valid'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isByteLength: {
          args: 8,
          msg: 'Password must be at least 8 characters long'
        },
        isAlphanumeric(value) {
          value = value.trim();
          if (!/\d/.test(value)) {
            throw new Error('Password should be alphanumeric e.g. abc123');
          }
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user',
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: {
          args: true,
          msg: 'Image format is invalid'
        }
      }
    },
    emailToken: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  },
  {
    hooks: {
      beforeCreate(user) {
        const plainPassword = user.password;
        user.password = bcrypt.hashSync(plainPassword, 10);
      },
      beforeUpdate(user) {
        const plainPassword = user.password;
        user.password = bcrypt.hashSync(plainPassword, 10);
      }
    }
  });
  // User.associate = (models) => {
  //   User.hasMany(models.Menu);
  // };
  return User;
};
