import { customRender, fireEvent } from '../../../../test-utils';

import Search, { SearchProps } from './Search';

const label = 'Search';
const subLabel = 'Suggestion';
const suggestions: SearchProps['suggestions'] = [
  { label, subLabel },
  { label: 'Another search', subLabel: 'Another suggestion' },
];

const getProps = (props: Partial<SearchProps> = {}): SearchProps => ({
  suggestions,
  onSearch: jest.fn(),
  ...props,
});

describe('Search', () => {
  it('should render', () => {
    const props = getProps();
    const { getByPlaceholderText } = customRender(<Search {...props} />);

    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('should call handleSearch onChange', () => {
    const props = getProps();
    const value = 'Some new value';
    const { getByPlaceholderText, getByDisplayValue } = customRender(<Search {...props} />);

    fireEvent.change(getByPlaceholderText('Search'), { target: { value } });

    expect(props.onSearch).toHaveBeenCalledWith(value);
    expect(getByDisplayValue(value)).toBeDefined();
  });

  it('should clear search on clear button click', () => {
    const props = getProps();
    const value = 'Some new value';
    const { getByPlaceholderText, getByDisplayValue, queryByText } = customRender(<Search {...props} />);

    fireEvent.change(getByPlaceholderText('Search'), { target: { value } });
    expect(getByDisplayValue(value)).toBeDefined();

    fireEvent.click(queryByText(/cross/) as Element);
    expect(getByPlaceholderText('Search')).toBeDefined();
    expect(getByDisplayValue('')).toBeDefined();
  });

  describe('Dropdown', () => {
    it('should render on Search keydown', () => {
      const { queryByText, getByText, getByPlaceholderText } = customRender(<Search {...getProps()} />);

      expect(queryByText(label)).not.toBeInTheDocument();
      expect(queryByText(subLabel)).not.toBeInTheDocument();

      fireEvent.keyDown(getByPlaceholderText('Search'));
      expect(getByText(label)).toBeInTheDocument();
      expect(getByText(subLabel)).toBeInTheDocument();
    });

    it('should set new value in Search & close Dropdown on MenuItem click', () => {
      const { queryByText, getByText, getByPlaceholderText } = customRender(<Search {...getProps()} />);

      fireEvent.keyDown(getByPlaceholderText('Search'));
      expect(getByText(label)).toBeInTheDocument();
      expect(getByText(subLabel)).toBeInTheDocument();

      fireEvent.click(getByText(label));
      expect(queryByText(label)).not.toBeInTheDocument();
      expect(queryByText(subLabel)).not.toBeInTheDocument();
      expect(getByPlaceholderText('Search')).toHaveAttribute('value', `${label} ${subLabel}`);
    });

    it('should close Dropdown on click outside', () => {
      const outside = 'outside';
      const { queryByText, getByText, getByPlaceholderText } = customRender(
        <>
          <Search {...getProps()} />
          <div>{outside}</div>
        </>
      );

      fireEvent.keyDown(getByPlaceholderText('Search'));
      expect(getByText(label)).toBeInTheDocument();
      expect(getByText(subLabel)).toBeInTheDocument();

      fireEvent.click(getByText(outside));
      expect(queryByText(label)).not.toBeInTheDocument();
      expect(queryByText(subLabel)).not.toBeInTheDocument();
    });
  });
});
