import { customRender, fireEvent } from '../../../../test-utils';

import WorkspacesList, { WorkspacesListProps } from './WorkspacesList';

const modal = 'modal';
const children = 'children';
const getProps = (props: Partial<WorkspacesListProps> = {}): WorkspacesListProps => ({
  renderWorkspaceForm: () => <div>{modal}</div>,
  children: <WorkspacesList.Item>{children}</WorkspacesList.Item>,
  ...props,
});

describe('WorkspacesList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render default', () => {
    const props = getProps();
    const { getByText, queryByText } = customRender(<WorkspacesList {...props} />);

    expect(queryByText(/add/)).toBeInTheDocument();
    expect(getByText(children)).toBeInTheDocument();
    expect(queryByText(modal)).not.toBeInTheDocument();
  });

  it('should call onClick', () => {
    const onClick = jest.fn();
    const props = getProps({ children: <WorkspacesList.Item onClick={onClick}>{children}</WorkspacesList.Item> });
    const { getByText } = customRender(<WorkspacesList {...props}></WorkspacesList>);

    fireEvent.click(getByText(children));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should open modal onClick', () => {
    const props = getProps();
    const { queryByText, getByText } = customRender(<WorkspacesList {...props} />);

    fireEvent.click(queryByText(/add/) as Element);
    expect(getByText(modal)).toBeInTheDocument();
  });

  it('should close modal', () => {
    const button = 'button';
    const props = getProps({
      renderWorkspaceForm: ({ handleClose }) => <button onClick={handleClose}>{button}</button>,
    });
    const { queryByText, getByRole } = customRender(<WorkspacesList {...props} />);

    fireEvent.click(queryByText(/add/) as Element);
    expect(getByRole('button', { name: button })).toBeInTheDocument();

    fireEvent.click(getByRole('button', { name: button }));
    expect(queryByText(modal)).not.toBeInTheDocument();
  });
});
