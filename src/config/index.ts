const Config = {
  APP_TITLE: process.env.APP_TITLE as string,
  DESCRIPTION: process.env.APP_DESCRIPTION as string,
  HOST: process.env.HOST as string,
  STORAGE_KEY: process.env.STORAGE_KEY as string,
  UNCOMPLETED_LIST_BOOK: 'uncompleted',
  COMPLETED_LIST_BOOK: 'completed',
};

export default Config;
