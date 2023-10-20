import React, { forwardRef, HTMLAttributes } from 'react';

import useStyles from './Typography.styles';

export type Variant = 'h1' | 'h2' | 'h3' | 'bodyXL' | 'bodyL' | 'bodyM' | 'bodyS' | 'bodyXS' | 'bodyXXS' | 'inherit';
export type MapVariant = 'h1' | 'h2' | 'h3' | 'p' | 'span';

export type TypographyProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & HTMLAttributes<HTMLElement>;

const mapVariantToTag: Record<Variant, MapVariant> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  bodyXL: 'p',
  bodyL: 'p',
  bodyM: 'p',
  bodyS: 'p',
  bodyXS: 'p',
  bodyXXS: 'p',
  inherit: 'span',
};

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, children, variant = 'bodyM', ...rest }, ref) => {
    const { classes, cx } = useStyles();

    const Tag = mapVariantToTag[variant] as React.ElementType;

    const combinedClasses = cx(classes.root, classes[variant], className);

    return (
      <Tag {...rest} className={combinedClasses} ref={ref}>
        {children}
      </Tag>
    );
  }
);

export default Typography;
