import { customRender } from '../../../../test-utils';

import ModalContainer, { ModalContainerProps } from './ModalContainer';

const getProps = (props: Partial<ModalContainerProps> = {}): ModalContainerProps => ({
  isOpen: true,
  children: 'Modal',
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
});
