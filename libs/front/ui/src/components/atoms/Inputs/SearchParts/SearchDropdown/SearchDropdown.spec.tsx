import { customRender, fireEvent } from '../../../../../test-utils';

import SearchDropdown, { SearchDropdownProps } from './SearchDropdown';

const suggestions: SearchDropdownProps['suggestions'] = [
  { label: 'Search', subLabel: 'suggestion' },
  { label: 'Another search', subLabel: 'another suggestion' },
];

const getProps = (props: Partial<SearchDropdownProps> = {}): SearchDropdownProps => ({
  suggestions,
  value: '',
  onSearch: jest.fn(),
  ...props,
});

describe('SearchDropdown', () => {
  it('should render on Search keydown', () => {
    const { queryByText, getByText, getByPlaceholderText } = customRender(<SearchDropdown {...getProps()} />);

    suggestions.forEach(({ label, subLabel }) => {
      expect(queryByText(label)).not.toBeInTheDocument();
      expect(queryByText(subLabel)).not.toBeInTheDocument();
    });

    fireEvent.keyDown(getByPlaceholderText('Search'));
    suggestions.forEach(({ label, subLabel }) => {
      expect(getByText(label)).toBeInTheDocument();
      expect(getByText(subLabel)).toBeInTheDocument();
    });
  });

  it('should call onSearch & close Dropdown on MenuItem click', () => {
    const props = getProps();
    const { label, subLabel } = suggestions[0];
    const { queryByText, getByText, getByPlaceholderText } = customRender(<SearchDropdown {...props} />);

    fireEvent.keyDown(getByPlaceholderText('Search'));
    suggestions.forEach(({ label, subLabel }) => {
      expect(getByText(label)).toBeInTheDocument();
      expect(getByText(subLabel)).toBeInTheDocument();
    });

    fireEvent.click(getByText(label));
    suggestions.forEach(({ label, subLabel }) => {
      expect(queryByText(label)).not.toBeInTheDocument();
      expect(queryByText(subLabel)).not.toBeInTheDocument();
    });
    expect(props.onSearch).toHaveBeenCalledWith(`${label} ${subLabel}`);
  });

  it('should close Dropdown on click outside', () => {
    const outside = 'outside';
    const { queryByText, getByText, getByPlaceholderText } = customRender(
      <>
        <SearchDropdown {...getProps()} />
        <div>{outside}</div>
      </>
    );

    fireEvent.keyDown(getByPlaceholderText('Search'));
    suggestions.forEach(({ label, subLabel }) => {
      expect(getByText(label)).toBeInTheDocument();
      expect(getByText(subLabel)).toBeInTheDocument();
    });

    fireEvent.click(getByText(outside));
    suggestions.forEach(({ label, subLabel }) => {
      expect(queryByText(label)).not.toBeInTheDocument();
      expect(queryByText(subLabel)).not.toBeInTheDocument();
    });
  });
});
