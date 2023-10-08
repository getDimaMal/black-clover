import React, { forwardRef, HTMLAttributes } from 'react';

import useStyles from './Typography.styles';

export type Colors = 'main' | 'primary' | 'secondary';

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'bodyM' | 'textM' | 'inherit';
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
  textM: 'span',
  inherit: 'span',
};

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, children, color = 'main', variant = 'bodyM', ...rest }, ref) => {
    const { classes, cx } = useStyles();

    const Tag = mapVariantToTag[variant] as React.ElementType;

    const combinedClasses = cx(classes.root, classes[color], classes[variant], className);

    return (
      <Tag {...rest} className={combinedClasses} ref={ref}>
        {children}
      </Tag>
    );
  }
);

export default Typography;
