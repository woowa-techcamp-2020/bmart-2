import tunnel from 'tunnel-ssh';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const config = {
  username: process.env.WEB_USER,
  host: process.env.WEB_HOST,
  port: 22,
  dstHost: process.env.DB_HOST,
  dstPort: process.env.DB_PORT,
  localHost: process.env.LOCAL_HOST,
  localPort: process.env.LOCAL_PORT,
  keepAlive: true,
};

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host:
      process.env.NODE_ENV === 'development'
        ? process.env.LOCAL_HOST
        : process.env.DB_HOST,
    port:
      process.env.NODE_ENV === 'development'
        ? parseInt(process.env.LOCAL_PORT as string, 10)
        : parseInt(process.env.DB_PORT as string, 10),
    dialect: 'mysql',
  }
);

const startDev = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  tunnel(config as any, function (error: any, server: any) {
    if (error) {
      console.error(error);
    } else {
      sequelize
        .authenticate()
        .then(() => console.log('🚀Connection Created!'))
        .catch((err) => {
          console.error('unable establish connection', err);
        });
    }
  });
};

const startProd = () => {
  sequelize
    .authenticate()
    .then(() => console.log('🚀Connection Created!'))
    .catch((err) => {
      console.error('unable establish connection', err);
    });
};

const startDB = (): void => {
  if (process.env.NODE_ENV === 'production') {
    startProd();
  } else {
    startDev();
  }
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  sequelize.sync({ force: false });
};

export { startDB, sequelize };
