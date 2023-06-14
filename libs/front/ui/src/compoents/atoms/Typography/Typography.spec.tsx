import { customRender } from '../../../test-utils';

import Typography, { MapVariant, TypographyProps as Props, Variant } from './Typography';

const text = 'Hello, Shary!';

const generateProps = (props: Partial<Props> = {}): Props => ({
  children: text,
  ...props,
});

describe('Typography', () => {
  it('should renders default', () => {
    const { getByText } = customRender(<Typography {...generateProps()} />);
    const element = getByText(text);

    expect(element.tagName.toLowerCase()).toBe('p');
    expect(element.className).toContain('body');
  });

  it.each<[Variant, MapVariant]>([
    ['h1', 'h1'],
    ['h2', 'h2'],
    ['h3', 'h3'],
    ['h4', 'h4'],
    ['h5', 'h5'],
    ['bodyM', 'p'],
    ['bodyS', 'p'],
    ['textL', 'span'],
    ['textM', 'span'],
    ['textS', 'span'],
  ])('should renders variant %s', (variant, tag) => {
    const { getByText } = customRender(<Typography {...generateProps({ variant })} />);

    expect(getByText(text).tagName.toLowerCase()).toBe(tag);
  });
});
