import { customRender } from '../../../test-utils';

import Tag, { TagColors, TagProps } from './Tag';

const text = 'Generated';
const color: TagColors = 'info';

const generateProps = (props: Partial<TagProps> = {}): TagProps => ({
  label: text,
  color,
  ...props,
});

describe('Clip', () => {
  it('should renders default', () => {
    const { getByText } = customRender(<Tag {...generateProps()} />);
    const element = getByText(text);
    expect(element).toBeInTheDocument();
  });
});
