import { act } from 'react-dom/test-utils';

import { customRender } from '../../../test-utils';
import { defaultColors } from '../../../theme/tokens/colors';

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
  it.each<TagColors>(['primary', 'success', 'info'])('should change svg color', (color) => {
    act(() => {
      const { container } = customRender(<Tag {...generateProps()} />);
      const circle = container.querySelector('circle');
      if (circle) {
        const circleStyle = window.getComputedStyle(circle);
        expect(circleStyle.fill).toBe(defaultColors[`tag-${color}`]);
      }
    });
  });
});
