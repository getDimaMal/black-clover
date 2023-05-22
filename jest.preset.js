const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.{config,dto,entity,test-data}.{js,jsx,ts,tsx}',
    '!**/index.{js,jsx,ts,tsx}',
  ],
  ...nxPreset,
};
