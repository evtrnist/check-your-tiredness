// import { DataSource } from 'typeorm';

// export const databaseProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource({
//         url: process.env.DATABASE_URL,
//         type: 'postgres',
//         ssl: {
//           rejectUnauthorized: false,
//         },
//         entities: ['dist/**/*.entity{.ts,.js}'],
//         synchronize: true, // This for development
//       });

//       return dataSource.initialize();
//     },
//   },
// ];
