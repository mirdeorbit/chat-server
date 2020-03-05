import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
    type: 'mongodb',
    url: 'mongodb://localhost:27017/chat',
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
    logging: true,
    keepConnectionAlive: true
}));