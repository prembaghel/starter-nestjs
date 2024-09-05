import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,                // e.g., db.xxxxx.supabase.co
  port: Number(process.env.DB_PORT) || 6543,
  username: process.env.DB_USERNAME,        // Supabase username (usually 'postgres')
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_DATABASE,        //'postgres',
  synchronize: true,                        // Use true for dev environment only
  entities: ['dist/**/*.entity.js'],        // Path to your entities
  migrations: ['dist/migrations/*.js'],
});
