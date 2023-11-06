import { customRender } from '../../../../test-utils';

import SidebarLayout from './SidebarLayout';

describe('SidebarLayout', () => {
  it('should render', () => {
    const label = 'label';
    const logout = 'logout';
    const content = 'content';
    const { getByText } = customRender(
      <SidebarLayout
        onNavigate={jest.fn()}
        navigations={[[{ label, variant: 'item', path: '/' }]]}
        LogoutButton={<div>{logout}</div>}
      >
        {content}
      </SidebarLayout>
    );

    expect(getByText(label)).toBeInTheDocument();
    expect(getByText(logout)).toBeInTheDocument();
    expect(getByText(content)).toBeInTheDocument();
  });
});
