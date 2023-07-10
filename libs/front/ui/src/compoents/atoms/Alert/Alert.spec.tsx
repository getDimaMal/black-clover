import { customRender } from '../../../test-utils';

import Alert, { AlertProps, Variants } from './Alert';

const getProps = (props: Partial<AlertProps> = {}): AlertProps => ({
  message: 'Alert Component',
  ...props,
});

describe('Alert', () => {
  it('should renders default', () => {
    const props = getProps();
    const { getByText } = customRender(<Alert {...props} />);

    expect(getByText(props.message)).toBeInTheDocument();
    expect(getByText(props.message).className).toContain('textL');
  });

  it('should renders with className', () => {
    const props = getProps({ className: 'comeClassName' });
    const { getByText } = customRender(<Alert {...props} />);

    expect(getByText(props.message).className).toContain(props.className);
  });

  it.each<Variants>(['bodyM', 'bodyS', 'textL', 'textM', 'textS'])('should render with class: %s', (variant) => {
    const props = getProps({ variant });
    const { getByText } = customRender(<Alert {...props} />);

    expect(getByText(props.message).className).toContain(variant);
  });
});
