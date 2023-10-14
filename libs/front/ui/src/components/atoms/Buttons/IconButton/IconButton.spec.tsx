import { customRender, fireEvent } from '../../../../test-utils';

import IconButton, { IconButtonProps } from './IconButton';

const svg = 'svg';
const getProps = (props: Partial<IconButtonProps> = {}): IconButtonProps => ({
  icon: () => <svg>{svg}</svg>,
  ...props,
});

describe('IconButton', () => {
  it('should render icon', () => {
    const { getByText } = customRender(<IconButton {...getProps()} />);

    expect(getByText(svg)).toBeInTheDocument();
  });

  it('should call onClick on click', () => {
    const onClick = jest.fn();
    const { getByText } = customRender(<IconButton {...getProps({ onClick })} />);

    fireEvent.click(getByText(svg));

    expect(onClick).toHaveBeenCalled();
  });
});
