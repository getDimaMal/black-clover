import { Map, Setting } from '../../../assets/images';
import { customRender, fireEvent } from '../../../test-utils';

import Sidebar from './Sidebar';

const handleNavigate = jest.fn();

const TestSidebar = () => (
  <Sidebar Footer={<footer>Footer</footer>}>
    <Sidebar.Nav
      items={[
        {
          icon: Map,
          variant: 'head',
          label: 'Tracking',
          isActive: (path) => ['/events', '/properties', '/categories', '/groups', '/tags'].includes(String(path)),
        },
        { path: '/groups', label: 'Groups', variant: 'item' },
        { path: '/events', label: 'Events', variant: 'item' },
      ]}
      onNavigate={handleNavigate}
    />

    <Sidebar.Nav
      items={[
        {
          icon: Setting,
          variant: 'head',
          label: 'Settings',
          isActive: (path) => ['/workspace', '/billing', '/import', '/export', '/switch'].includes(String(path)),
        },
        { path: '/import', label: 'Import', variant: 'item' },
        { path: '/export', label: 'Export', variant: 'item' },
      ]}
      onNavigate={handleNavigate}
    />
  </Sidebar>
);

describe('Sidebar', () => {
  it('should render', () => {
    const { getByText, queryByText } = customRender(<TestSidebar />);

    expect(queryByText(/map/)).toBeInTheDocument();
    expect(getByText('Tracking')).toBeInTheDocument();
    expect(getByText('Groups')).toBeInTheDocument();

    expect(queryByText(/setting/)).toBeInTheDocument();
    expect(getByText('Settings')).toBeInTheDocument();
    expect(getByText('Import')).toBeInTheDocument();

    expect(getByText('Footer')).toBeInTheDocument();
  });

  it('should change highlighted item on click', () => {
    const { getByText } = customRender(<TestSidebar />);

    fireEvent.click(getByText('Groups'));
    expect(getByText('Groups').parentElement?.className).toContain('active');
    expect(getByText('Tracking').parentElement?.className).toContain('active');

    fireEvent.click(getByText('Events'));
    expect(getByText('Groups').parentElement?.className).not.toContain('active');
    expect(getByText('Events').parentElement?.className).toContain('active');
    expect(getByText('Tracking').parentElement?.className).toContain('active');

    fireEvent.click(getByText('Import'));
    expect(getByText('Events').parentElement?.className).not.toContain('active');
    expect(getByText('Tracking').parentElement?.className).not.toContain('active');
    expect(getByText('Import').parentElement?.className).toContain('active');
    expect(getByText('Settings').parentElement?.className).toContain('active');

    expect(handleNavigate).toHaveBeenCalledTimes(3);
  });
});
