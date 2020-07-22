import { registerAs } from '@nestjs/config';

const configs = {
    development: {
        listen: {
            host: '127.0.0.1',
            port: 3200
        }
    },
    production: {
        listen: {
            host: '127.0.0.1',
            port: 3200
        }
    }
}

export default registerAs('app', () => configs[process.env.NODE_ENV || 'development']);