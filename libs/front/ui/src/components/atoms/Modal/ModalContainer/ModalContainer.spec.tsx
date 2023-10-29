import { customRender, fireEvent } from '../../../../test-utils';

import ModalContainer, { ModalContainerProps } from './ModalContainer';

const getProps = (props: Partial<ModalContainerProps> = {}): ModalContainerProps => ({
  isOpen: true,
  children: 'Modal',
  onClose: jest.fn(),
  ...props,
});

describe('ModalContainer', () => {
  it('should render default', () => {
    const props = getProps();
    const { getByText } = customRender(<ModalContainer {...props} />);

    expect(getByText(String(props.children))).toBeInTheDocument();
    expect(getByText(String(props.children)).className).toContain('center');
  });

  it('should render with right className', () => {
    const props = getProps({ variant: 'right' });
    const { getByText } = customRender(<ModalContainer {...props} />);

    expect(getByText(String(props.children))).toBeInTheDocument();
    expect(getByText(String(props.children)).className).toContain('right');
  });

  it('should NOT render when isOpen false', () => {
    const props = getProps({ isOpen: false });
    const { queryByText } = customRender(<ModalContainer {...props} />);

    expect(queryByText(String(props.children))).not.toBeInTheDocument();
  });

  describe('onClose', () => {
    it('should NOT call on children click', () => {
      const children = 'children';
      const props = getProps({ children: <div>{children}</div> });
      const { getByText } = customRender(<ModalContainer {...props} />);

      fireEvent.click(getByText(children));
      expect(props.onClose).toHaveBeenCalledTimes(0);
    });

    it('should call on SELF click', () => {
      const children = 'children';
      const props = getProps({ children: <div>{children}</div> });
      const { getByText } = customRender(<ModalContainer {...props} />);

      fireEvent.click(getByText(children).parentElement as Element);
      expect(props.onClose).toHaveBeenCalledTimes(1);
    });
  });
});
