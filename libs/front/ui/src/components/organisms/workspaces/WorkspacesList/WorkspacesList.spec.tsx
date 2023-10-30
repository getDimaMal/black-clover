import { customRender, fireEvent } from '../../../../test-utils';

import WorkspacesList from './WorkspacesList';

describe('WorkspacesList', () => {
  it('should render default', () => {
    const children = 'children';
    const { getByText, queryByText } = customRender(
      <WorkspacesList>
        <WorkspacesList.Item>{children}</WorkspacesList.Item>
      </WorkspacesList>
    );

    expect(getByText(children)).toBeInTheDocument();
    expect(queryByText(/add/)).toBeInTheDocument();
  });

  it('should call onClick', () => {
    const onClick = jest.fn();
    const children = 'children';
    const { getByText } = customRender(
      <WorkspacesList>
        <WorkspacesList.Item onClick={onClick}>{children}</WorkspacesList.Item>
      </WorkspacesList>
    );

    fireEvent.click(getByText(children));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should open modal onClick', () => {
    const modal = 'modal';
    const { getByText, queryByText } = customRender(
      <WorkspacesList CreateWorkspaceForm={modal}>
        <WorkspacesList.Item>Item</WorkspacesList.Item>
      </WorkspacesList>
    );

    fireEvent.click(queryByText(/add/) as Element);
    expect(getByText(modal)).toBeInTheDocument();
  });
});
