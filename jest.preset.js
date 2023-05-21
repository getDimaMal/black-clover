const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.{config,dto,entity}.{js,jsx,ts,tsx}',
    '!**/index.{js,jsx,ts,tsx}',
  ],
};
