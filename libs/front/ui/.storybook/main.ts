import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  staticDirs: [{ from: '../src/assets', to: '/assets' }],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;