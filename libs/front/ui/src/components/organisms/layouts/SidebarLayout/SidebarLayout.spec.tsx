import { customRender } from '../../../../test-utils';

import SidebarLayout from './SidebarLayout';

describe('SidebarLayout', () => {
  it('should render', () => {
    const label = 'label';
    const logout = 'logout';
    const children = 'children';
    const { getByText } = customRender(
      <SidebarLayout
        navigations={[[{ label, variant: 'item', path: '/' }]]}
        onNavigate={jest.fn()}
        LogoutButton={logout}
      >
        {children}
      </SidebarLayout>
    );

    expect(getByText(label)).toBeInTheDocument();
    expect(getByText(logout)).toBeInTheDocument();
    expect(getByText(children)).toBeInTheDocument();
  });
});
