import { customRender, fireEvent } from '../../../../test-utils';

import Search from './Search';

describe('Search', () => {
  const handleSearch = jest.fn();

  it('should render', () => {
    const { getByPlaceholderText } = customRender(<Search onSearch={handleSearch} />);

    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('should call handleSearch onChange', () => {
    const value = 'Some new value';
    const { getByPlaceholderText, getByDisplayValue } = customRender(<Search onSearch={handleSearch} />);

    fireEvent.change(getByPlaceholderText('Search'), { target: { value } });

    expect(handleSearch).toHaveBeenCalledWith(value);
    expect(getByDisplayValue(value)).toBeDefined();
  });

  it('should clear search on clear button click', () => {
    const value = 'Some new value';
    const { getByPlaceholderText, getByDisplayValue, queryByText } = customRender(<Search onSearch={handleSearch} />);

    fireEvent.change(getByPlaceholderText('Search'), { target: { value } });
    expect(getByDisplayValue(value)).toBeDefined();

    fireEvent.click(queryByText(/cross/) as Element);
    expect(getByPlaceholderText('Search')).toBeDefined();
    expect(getByDisplayValue('')).toBeDefined();
  });
});
