import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

const hashedPassword = bcrypt.hashSync(process.env.MY_PASSWORD, 10);
const generatedEmailToken = crypto.randomBytes(16).toString('hex');

export default {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [{
    username: 'Johnson',
    email: 'johnson@gmail.com',
    password: hashedPassword,
    address: '235 ikorodu road',
    phoneNumber: '2348188699277',
    role: 'admin',
    emailToken: generatedEmailToken,
    isVerified: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    username: 'Lovetta',
    email: 'lovetta@gmail.com',
    password: hashedPassword,
    address: '236 ikorodu road',
    phoneNumber: '2348188699278',
    role: 'user',
    emailToken: generatedEmailToken,
    isVerified: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    username: 'Victoria',
    email: 'victoria@gmail.com',
    password: hashedPassword,
    address: '237 ikorodu road',
    phoneNumber: '2348188699279',
    role: 'user',
    emailToken: generatedEmailToken,
    isVerified: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    username: 'Evanzino',
    email: 'evanzino@gmail.com',
    password: hashedPassword,
    address: '238 ikorodu road',
    phoneNumber: '2348188699280',
    role: 'user',
    emailToken: generatedEmailToken,
    isVerified: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    username: 'Adesewa',
    email: 'adesewa@gmail.com',
    password: hashedPassword,
    address: '239 ikorodu road',
    phoneNumber: '2348188699281',
    role: 'user',
    emailToken: generatedEmailToken,
    isVerified: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }],),
  down: (queryInterface) => queryInterface.bulkDelete('Users')
};
