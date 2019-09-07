export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    },
    address: {
      allowNull: true,
      type: Sequelize.STRING
    },
    phoneNumber: {
      unique: true,
      allowNull: true,
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.STRING
    },
    image: {
      allowNull: true,
      type: Sequelize.STRING
    },
    emailToken: {
      allowNull: true,
      type: Sequelize.STRING
    },
    isVerified: {
      defaultValue: false,
      allowNull: false,
      type: Sequelize.BOOLEAN
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('Users')
};
