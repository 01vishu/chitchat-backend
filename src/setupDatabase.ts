import mongoose from 'mongoose';
import { config } from '@root/config';
import Logger from 'bunyan';
const log: Logger = config.createLogger('setupDatabase');

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.MONGO_URI}`)
      .then(() => {
        log.info('DB connected!!');
      })
      .catch((error) => {
        log.error('error', error);
        return process.exit(1);
      });
  };
  connect();
  mongoose.connection.on('disconnected', connect);
};
