import { customRender } from '../../../test-utils';

import Logo from './Logo';

describe('Logo', () => {
  it('should render', () => {
    const { container } = customRender(<Logo />);

    expect(container.textContent).toBe('EVENT PANEL');
  });

  it('should render without text', () => {
    const { container } = customRender(<Logo onlyImage />);

    expect(container.textContent).not.toBe('EVENT PANEL');
  });

  it('should render invert', () => {
    const { container } = customRender(<Logo invert />);

    expect(container.children[0].className).toContain('invert');
  });
});
