import elasticsearch from 'elasticsearch';
import dotenv from 'dotenv';

dotenv.config();

const elasticClient = new elasticsearch.Client({
  host: process.env.ELASTIC_HOST,
  apiVersion: process.env.API_VERSION,
  httpAuth: `${process.env.ES_USER}:${process.env.ES_PW}`,
});

export default elasticClient;
