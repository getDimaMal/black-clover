import { customRender, fireEvent } from '../../../../../test-utils';

import Search, { SearchProps } from './Search';

const getProps = (props: Partial<SearchProps> = {}): SearchProps => ({
  value: '',
  onChange: jest.fn(),
  onKeyDown: jest.fn(),
  ...props,
});

describe('Search', () => {
  it('should render', () => {
    const props = getProps();
    const { getByPlaceholderText } = customRender(<Search {...props} />);

    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('should call onChange', () => {
    const onChange = jest.fn();
    const value = 'Some new value';
    const { getByPlaceholderText } = customRender(<Search {...getProps({ onChange })} />);

    fireEvent.change(getByPlaceholderText('Search'), { target: { value } });

    expect(onChange).toHaveBeenCalledWith(value);
  });

  it('should call onKeyDown', () => {
    const onKeyDown = jest.fn();
    const { getByPlaceholderText } = customRender(<Search {...getProps({ onKeyDown })} />);

    fireEvent.keyDown(getByPlaceholderText('Search'));

    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it('should call onChange on clear button click', () => {
    const onChange = jest.fn();
    const value = 'Some new value';
    const { getByPlaceholderText, queryByText } = customRender(<Search {...getProps({ onChange, value: 'value' })} />);

    fireEvent.change(getByPlaceholderText('Search'), { target: { value } });
    expect(onChange).toHaveBeenCalledWith(value);

    fireEvent.click(queryByText(/cross/) as Element);
    expect(onChange).toHaveBeenCalledWith('');
  });

  it('should render with fullWidth', () => {
    const { getByPlaceholderText } = customRender(<Search {...getProps({ fullWidth: true })} />);

    expect(getByPlaceholderText('Search').parentElement?.className).toContain('fullWidth');
  });

  it('should render with withFocus', () => {
    const { getByPlaceholderText } = customRender(<Search {...getProps({ withFocus: true })} />);

    expect(getByPlaceholderText('Search').className).toContain('focus');
  });
});
