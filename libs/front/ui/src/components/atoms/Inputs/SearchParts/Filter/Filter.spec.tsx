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
    const { getByText, queryByText } = customRender(<Filter {...props} />);

    fireEvent.click(getByText(props.label));
    Object.values(options).forEach(({ label }) => {
      expect(queryByText(label)).toBeInTheDocument();
    });
  });

  it('should call onClick when dropdown item click', () => {
    const props = getProps();
    const { getByText, queryByText } = customRender(<Filter {...props} />);

    fireEvent.click(getByText(props.label));
    fireEvent.click(queryByText(options['1']['label']) as Element);

    expect(props.onChange).toHaveBeenCalledTimes(1);
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
      expect(queryByText(label)).toBeInTheDocument();
    });

    fireEvent.click(getByText(outside));
    Object.values(options).forEach(({ label }) => {
      expect(queryByText(label)).not.toBeInTheDocument();
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
});
