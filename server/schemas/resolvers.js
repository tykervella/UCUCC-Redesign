const { AuthenticationError } = require('apollo-server-express');
const { User, Page } = require('../models');
const { signToken } = require('../utils/auth');

// Helper function to find a page by its route name
async function findPagebyRoute(pageName) {
  try {
    const page = await Page.findOne({ pageName: pageName });
    return page;
  } catch (error) {
    console.error(error); // It might be helpful to log the error for debugging.
    throw new Error('Error finding Page');
  }
}


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    page: async (parent, { pageName }) => {
      return Page.findOne({ pageName: pageName });
    },
  },

  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user found with this username');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    updatePage: async (parent, {
      pageName,
      pageTitle,
      pageText
    }) => {
      const page = await findPagebyRoute(pageName);
      if (!page)  {
        throw new Error('Deck not found');
      }

      page.pageTitle = pageTitle;
      page.pageText = pageText;

      try {
        const updatedPage = await page.save();
        return updatedPage;
      } catch (error) {
        console.error(error); // It might be helpful to log the error for debugging.
        throw new Error('Error updating Page');
      }
    },
  },
};

module.exports = resolvers;
