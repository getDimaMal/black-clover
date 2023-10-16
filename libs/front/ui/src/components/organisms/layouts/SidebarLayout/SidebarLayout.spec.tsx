import { customRender } from '../../../../test-utils';

import SidebarLayout from './SidebarLayout';

describe('SidebarLayout', () => {
  it('should render', () => {
    const content = 'content';
    const { getByText } = customRender(
      <SidebarLayout navigations={[]} onNavigate={jest.fn()}>
        {content}
      </SidebarLayout>
    );

    expect(getByText(content)).toBeInTheDocument();
  });
});
