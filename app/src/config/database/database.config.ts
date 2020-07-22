import { registerAs } from '@nestjs/config';

const configs = {
    development: {
        url: 'mongodb://localhost:27017/chat',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    production: {
        url: 'mongodb://localhost:27017/chat',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
}

export default registerAs('database', () => configs[process.env.NODE_ENV || 'development']);