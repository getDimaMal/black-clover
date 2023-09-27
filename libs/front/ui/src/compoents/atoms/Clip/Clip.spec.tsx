import { customRender } from '../../../test-utils';

import Clip, { ClipProps } from './Clip';

const text = 'Android';

const generateProps = (props: Partial<ClipProps> = {}): ClipProps => ({
  label: text,
  ...props,
});

describe('Clip', () => {
  it('should renders default', () => {
    const { getByText } = customRender(<Clip {...generateProps()} />);
    const element = getByText(text);
    expect(element).toBeInTheDocument();
  });
});
