import * as dotenv from 'dotenv';
import path from 'path';

export default async () => {
    // const env = process.env.ENV || 'qa'; // default
    // dotenv.config({ path: path.resolve(__dirname, `.env.${env}`) });
    dotenv.config({ path: path.resolve(__dirname, '.env') });
};
