const db = require('../config/connection');
const { User, Page } = require('../models');
const adminSeed = require('./adminSeed.json');
const pageSeeds = require('./pageSeeds.json');

db.once('open', async () => {
  try {
    await Page.deleteMany({});
    await User.deleteMany({});

    await User.create(adminSeed);
    await Page.create(pageSeeds)

   
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
