import { customRender, fireEvent } from '../../../../../test-utils';

import Filter, { FilterProps } from './Filter';

const options: FilterProps['options'] = {
  '1': { id: '1', label: 'Label 1' },
  '2': { id: '2', label: 'Label 2' },
  '3': { id: '3', label: 'Label 3' },
  '4': { id: '4', label: 'Label 4' },
};

const getProps = (props: Partial<FilterProps> = {}): FilterProps => ({
  options,
  value: [],
  label: 'Label',
  onChange: jest.fn(),
  ...props,
});

describe('Filter', () => {
  it('should render default', () => {
    const props = getProps();
    const { getByText, queryByText } = customRender(<Filter {...props} />);

    expect(getByText(props.label)).toBeInTheDocument();
    Object.values(options).forEach(({ label }) => {
      expect(queryByText(label)).not.toBeInTheDocument();
    });
  });

  it('should render open dropdown', () => {
    const props = getProps();
    const { getByText } = customRender(<Filter {...props} />);

    fireEvent.click(getByText(props.label));
    Object.values(options).forEach(({ label }) => {
      expect(getByText(label)).toBeInTheDocument();
    });
  });

  it('should close dropdown on click outside', () => {
    const props = getProps();
    const outside = 'Outside';
    const { getByText, queryByText } = customRender(
      <>
        <Filter {...props} />
        <div>{outside}</div>
      </>
    );

    fireEvent.click(getByText(props.label));
    Object.values(options).forEach(({ label }) => {
      expect(getByText(label)).toBeInTheDocument();
    });

    fireEvent.click(getByText(outside));
    Object.values(options).forEach(({ label }) => {
      expect(queryByText(label)).not.toBeInTheDocument();
    });
  });

  describe('should change selected items', () => {
    it('should check item', () => {
      const props = getProps();
      const { getByText } = customRender(<Filter {...props} />);

      fireEvent.click(getByText(props.label));
      fireEvent.click(getByText(props.options['1']['label']));

      expect(props.onChange).toHaveBeenCalledTimes(1);
      expect(props.onChange).toHaveBeenCalledWith([props.options['1']['id']]);
    });

    it('should uncheck item', () => {
      const props = getProps({ value: ['1', '2'] });
      const label = `${props.options['1']['label']}, ${props.options['2']['label']}`;
      const { getByText } = customRender(<Filter {...props} />);

      fireEvent.click(getByText(label));
      fireEvent.click(getByText(props.options['1']['label']));

      expect(props.onChange).toHaveBeenCalledTimes(1);
      expect(props.onChange).toHaveBeenCalledWith([props.options['2']['id']]);
    });
  });

  describe('should change the filter button depending on the number of selected items', () => {
    it('should render default', () => {
      const props = getProps({ value: [] });
      const { getByText } = customRender(<Filter {...props} />);

      expect(getByText(props.label)).toBeInTheDocument();
      expect(getByText(props.label).className).not.toContain('active');
    });

    it.each<[string, string[]]>([
      ['Label 1', ['1']],
      ['Label 1, Label 2', ['1', '2']],
      ['Label (4)', ['1', '2', '3', '4']],
    ])('should has className "active" and label with: %s', (label, value) => {
      const { getByText } = customRender(<Filter {...getProps({ value })} />);

      expect(getByText(label)).toBeInTheDocument();
      expect(getByText(label).className).toContain('active');
    });
  });

  describe('should render search field', () => {
    it('should render open dropdown with search field', () => {
      const props = getProps({ withSearch: true });
      const { getByText, getByPlaceholderText } = customRender(<Filter {...props} />);

      fireEvent.click(getByText(props.label));
      expect(getByPlaceholderText('Search')).toBeInTheDocument();
    });

    it('should clear search on dropdown close', () => {
      const value = 'value';
      const props = getProps({ withSearch: true });
      const { getByText, getByPlaceholderText, getByDisplayValue, queryByDisplayValue } = customRender(
        <Filter {...props} />
      );

      fireEvent.click(getByText(props.label)); // Open Dropdown
      fireEvent.change(getByPlaceholderText('Search'), { target: { value } });
      expect(getByDisplayValue(value)).toBeInTheDocument();

      fireEvent.click(getByText(props.label)); // Close Dropdown
      fireEvent.click(getByText(props.label)); // Open Dropdown
      expect(queryByDisplayValue(value)).not.toBeInTheDocument();
    });
  });
});
