import { customRender, fireEvent } from '../../../test-utils';

import { navigations } from './__test-data__';
import Sidebar from './Sidebar';

const handleNavigate = jest.fn();

const TestSidebar = () => (
  <Sidebar Footer={<footer>Footer</footer>}>
    {navigations.map((items, index) => (
      <Sidebar.Nav key={index} items={items} onNavigate={handleNavigate} />
    ))}
  </Sidebar>
);

describe('Sidebar', () => {
  it('should render', () => {
    const { getByText, queryByText } = customRender(<TestSidebar />);

    expect(queryByText(/map/)).toBeInTheDocument();
    expect(getByText('Tracking Plan')).toBeInTheDocument();
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
    expect(getByText('Tracking Plan').parentElement?.className).toContain('active');

    fireEvent.click(getByText('Events'));
    expect(getByText('Groups').parentElement?.className).not.toContain('active');
    expect(getByText('Events').parentElement?.className).toContain('active');
    expect(getByText('Tracking Plan').parentElement?.className).toContain('active');

    fireEvent.click(getByText('Import'));
    expect(getByText('Events').parentElement?.className).not.toContain('active');
    expect(getByText('Tracking Plan').parentElement?.className).not.toContain('active');
    expect(getByText('Import').parentElement?.className).toContain('active');
    expect(getByText('Settings').parentElement?.className).toContain('active');

    expect(handleNavigate).toHaveBeenCalledTimes(3);
  });

  it('should NOT change highlighted item on head click', () => {
    const { getByText } = customRender(<TestSidebar />);

    fireEvent.click(getByText('Groups'));
    expect(getByText('Groups').parentElement?.className).toContain('active');
    expect(getByText('Tracking Plan').parentElement?.className).toContain('active');

    fireEvent.click(getByText('Tracking Plan'));
    expect(getByText('Groups').parentElement?.className).toContain('active');
    expect(getByText('Tracking Plan').parentElement?.className).toContain('active');

    expect(handleNavigate).toHaveBeenCalledTimes(1);
  });
});
