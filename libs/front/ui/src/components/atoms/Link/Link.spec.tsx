import { customRender } from '../../../test-utils';

import Link, { LinkProps } from './Link';

const getProps = (props: Partial<LinkProps> = {}): LinkProps => ({
  to: 'to/the/bright/future/',
  children: 'Link to The Bright Future' as string,
  ...props,
});

describe('Link', () => {
  it('should renders default', () => {
    const props = getProps();
    const { getByText } = customRender(<Link {...props} />);

    expect(getByText(props.children as string)).toBeInTheDocument();
    expect(getByText(props.children as string)).toHaveAttribute('href', props.to);
  });

  it('should renders with className', () => {
    const props = getProps({ className: 'comeClassName' });
    const { getByText } = customRender(<Link {...props} />);

    expect(getByText(props.children as string).className).toContain(props.className);
  });
});
