import { customRender } from '../../../test-utils';

import Typography, { Colors, MapVariant, TypographyProps as Props, Variant } from './Typography';

const text = 'Hello, Black Clover!';

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

  it('should renders with className', () => {
    const className = 'class-name';
    const { getByText } = customRender(<Typography {...generateProps({ className })} />);
    const element = getByText(text);

    expect(element.className).toContain(className);
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
  ])('should renders variant: %s', (variant, tag) => {
    const { getByText } = customRender(<Typography {...generateProps({ variant })} />);
    const element = getByText(text);

    expect(element.tagName.toLowerCase()).toBe(tag);
    expect(element.className).toContain(variant);
  });

  it.each<[Colors, Colors]>([
    ['main', 'main'],
    ['info', 'info'],
    ['error', 'error'],
    ['warning', 'warning'],
    ['success', 'success'],
    ['primary', 'primary'],
    ['secondary', 'secondary'],
  ])('should renders color: %s', (color, className) => {
    const { getByText } = customRender(<Typography {...generateProps({ color })} />);
    const element = getByText(text);

    expect(element.className).toContain(className);
  });
});
