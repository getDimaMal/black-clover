import { customRender } from '../../../test-utils';

import Alert, { AlertProps } from './Alert';

const getProps = (props: Partial<AlertProps> = {}): AlertProps => ({
  message: 'Alert Component',
  ...props,
});

describe('Alert', () => {
  it('should renders default', () => {
    const props = getProps();
    const { getByText } = customRender(<Alert {...props} />);

    expect(getByText(props.message)).toBeInTheDocument();
  });

  it('should renders with className', () => {
    const props = getProps({ className: 'comeClassName' });
    const { getByText } = customRender(<Alert {...props} />);

    expect(getByText(props.message).className).toContain(props.className);
  });
});
