export default {
  up: (queryInterface) => queryInterface.bulkInsert('Menus', [{
    foodName: 'Yamarita',
    foodPrice: 900,
    foodImage: 'https://bit.ly/2z2Hm21',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    foodName: 'Fried Rice',
    foodPrice: 1200,
    foodImage: 'https://bit.ly/2qbYUEN',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    foodName: 'Meat Pie',
    foodPrice: 200,
    foodImage: 'https://bit.ly/2yzDczo',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    foodName: 'Glazed Doughnut',
    foodPrice: 250,
    foodImage: 'https://bit.ly/2CCi0vr',
    createdAt: new Date(),
    updatedAt: new Date()
  }]),
  down: (queryInterface) => queryInterface.bulkDelete('Menus')
};
