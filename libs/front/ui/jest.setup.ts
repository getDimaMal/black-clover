import '@testing-library/jest-dom';

jest.mock('react', () => {
  const actualReact = jest.requireActual('react');
  return {
    ...actualReact,
    useContext: jest.fn(),
  };
});

afterEach(() => {
  jest.clearAllMocks();
});
