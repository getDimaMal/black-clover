import { customRender, fireEvent } from '../../../../../test-utils';

import SearchDropdown, { SearchProps } from './SearchDropdown';

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

describe('SearchDropdown', () => {
  it('should render on Search keydown', () => {
    const { queryByText, getByText, getByPlaceholderText } = customRender(<SearchDropdown {...getProps()} />);

    expect(queryByText(label)).not.toBeInTheDocument();
    expect(queryByText(subLabel)).not.toBeInTheDocument();

    fireEvent.keyDown(getByPlaceholderText('Search'));
    expect(getByText(label)).toBeInTheDocument();
    expect(getByText(subLabel)).toBeInTheDocument();
  });

  it('should set new value in Search & close Dropdown on MenuItem click', () => {
    const { queryByText, getByText, getByPlaceholderText } = customRender(<SearchDropdown {...getProps()} />);

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
        <SearchDropdown {...getProps()} />
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
