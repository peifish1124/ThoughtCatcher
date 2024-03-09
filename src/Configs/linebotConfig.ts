import dotenv from "dotenv";
dotenv.config();

const linebotConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET || 'secret',
};

export default linebotConfig;
