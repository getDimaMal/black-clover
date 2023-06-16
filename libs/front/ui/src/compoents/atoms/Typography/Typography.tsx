import React, { forwardRef, HTMLAttributes } from 'react';

import useStyles from './Typography.styles';

export type Colors = 'main' | 'primary' | 'secondary';

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'bodyM' | 'bodyS' | 'textL' | 'textM' | 'textS' | 'inherit';
export type MapVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';

export type TypographyProps = {
  children: React.ReactNode;
  color?: Colors;
  variant?: Variant;
} & HTMLAttributes<HTMLElement>;

const mapVariantToTag: Record<Variant, MapVariant> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  bodyM: 'p',
  bodyS: 'p',
  textL: 'span',
  textM: 'span',
  textS: 'span',
  inherit: 'span',
};

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, children, color = 'main', variant = 'bodyM', ...rest }, ref) => {
    const { classes, cx } = useStyles({ color });

    const Tag = mapVariantToTag[variant] as React.ElementType;

    const bodyClasses = ['bodyM', 'bodyS'].includes(variant) ? classes.body : null;
    const textClasses = ['textL', 'textM', 'textS'].includes(variant) ? classes.text : null;
    const headerClasses = ['h1', 'h2', 'h3', 'h4', 'h5'].includes(variant) ? classes.header : null;

    const combinedClasses = cx(classes.root, bodyClasses, textClasses, headerClasses, classes[variant], className);

    return (
      <Tag {...rest} className={combinedClasses} ref={ref}>
        {children}
      </Tag>
    );
  }
);

export default Typography;
