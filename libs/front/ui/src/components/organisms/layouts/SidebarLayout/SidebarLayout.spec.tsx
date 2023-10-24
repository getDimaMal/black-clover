import { customRender } from '../../../../test-utils';

import SidebarLayout from './SidebarLayout';

describe('SidebarLayout', () => {
  it('should render', () => {
    const label = 'label';
    const content = 'content';
    const { getByText } = customRender(
      <SidebarLayout navigations={[[{ label, variant: 'item', path: '/' }]]} onNavigate={jest.fn()}>
        {content}
      </SidebarLayout>
    );

    expect(getByText(label)).toBeInTheDocument();
    expect(getByText(content)).toBeInTheDocument();
  });
});
