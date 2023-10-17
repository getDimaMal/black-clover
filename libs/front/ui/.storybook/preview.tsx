import GlobalStyles from '../src/components/organisms/GlobalStyles/GlobalStyles';
import ThemeProvider from '../src/components/organisms/ThemeProvider/ThemeProvider';
import { darkTheme, lightTheme } from '../src/theme/theme';

const withThemeProvider = (Story, context) => {
  const { theme: mode } = context.globals;
  const theme = mode === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme} mode={mode} setMode={() => {}} toggleMode={() => {}}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};

const preview = {
  parameters: {
    backgrounds: { disable: true },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '325px', height: '500px' },
        },
        iphoneSE: {
          name: 'iPhone SE',
          styles: { width: 'calc(2rem + 8px + 375px)', height: 'calc(2rem + 8px + 667px)' },
        },
        iPadMini: {
          name: 'iPad Mini',
          styles: { width: 'calc(2rem + 8px + 1024px)', height: 'calc(2rem + 8px + 768px)' },
        },
      },
    },
  },
  globalTypes: {
    theme: {
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        items: ['light', 'dark'],
      },
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
