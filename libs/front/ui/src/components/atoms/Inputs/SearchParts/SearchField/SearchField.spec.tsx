import { customRender, fireEvent } from '../../../../../test-utils';

import SearchField, { SearchFieldProps } from './SearchField';

const getProps = (props: Partial<SearchFieldProps> = {}): SearchFieldProps => ({
  value: '',
  onChange: jest.fn(),
  onKeyDown: jest.fn(),
  ...props,
});

describe('SearchField', () => {
  it('should render', () => {
    const props = getProps();
    const { getByPlaceholderText } = customRender(<SearchField {...props} />);

    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('should call onChange', () => {
    const onChange = jest.fn();
    const value = 'Some new value';
    const { getByPlaceholderText } = customRender(<SearchField {...getProps({ onChange })} />);

    fireEvent.change(getByPlaceholderText('Search'), { target: { value } });

    expect(onChange).toHaveBeenCalledWith(value);
  });

  it('should call onKeyDown', () => {
    const onKeyDown = jest.fn();
    const { getByPlaceholderText } = customRender(<SearchField {...getProps({ onKeyDown })} />);

    fireEvent.keyDown(getByPlaceholderText('Search'));

    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it('should call onChange on clear button click', () => {
    const onChange = jest.fn();
    const value = 'Some new value';
    const { getByPlaceholderText, queryByText } = customRender(
      <SearchField {...getProps({ onChange, value: 'value' })} />
    );

    fireEvent.change(getByPlaceholderText('Search'), { target: { value } });
    expect(onChange).toHaveBeenCalledWith(value);

    fireEvent.click(queryByText(/cross/) as Element);
    expect(onChange).toHaveBeenCalledWith('');
  });

  it('should render with fullWidth', () => {
    const { getByPlaceholderText } = customRender(<SearchField {...getProps({ fullWidth: true })} />);

    expect(getByPlaceholderText('Search').parentElement?.className).toContain('fullWidth');
  });

  it('should render with withFocus', () => {
    const { getByPlaceholderText } = customRender(<SearchField {...getProps({ withFocus: true })} />);

    expect(getByPlaceholderText('Search').className).toContain('focus');
  });

  it('should render with autoFocus', () => {
    const { getByPlaceholderText } = customRender(<SearchField {...getProps({ autoFocus: true })} />);

    expect(getByPlaceholderText('Search')).toHaveFocus();
  });
});
