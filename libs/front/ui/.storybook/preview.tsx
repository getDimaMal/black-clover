import GlobalStyles from '../src/compoents/organisms/GlobalStyles/GlobalStyles';
import ThemeProvider from '../src/compoents/organisms/ThemeProvider/ThemeProvider';
import { darkTheme, lightTheme } from '../src/theme/theme';

const withThemeProvider = (Story, context) => {
  const { theme: mode } = context.globals;
  const theme = mode === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme} mode={mode} setMode={() => {}} toggleMode={() => {}}>
      <GlobalStyles />
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    </ThemeProvider>
  );
};

const preview = {
  parameters: {
    backgrounds: { disable: true },
  },
  globalTypes: {
    theme: {
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
