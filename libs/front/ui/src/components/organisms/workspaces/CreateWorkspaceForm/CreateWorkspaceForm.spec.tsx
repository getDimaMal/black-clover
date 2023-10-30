import { CreateWorkspaceFormProps } from '@black-clover/front/shared/types/workspace.type';

import { customRender, fireEvent } from '../../../../test-utils';

import CreateWorkspaceForm from './CreateWorkspaceForm';

const getProps = (props: Partial<CreateWorkspaceFormProps> = {}): CreateWorkspaceFormProps => ({
  isLoading: false,
  errorMessage: null,
  onSubmit: jest.fn(),
  ...props,
});

describe('CreateWorkspaceForm', () => {
  it('should render default', () => {
    const { getByLabelText, getByRole } = customRender(<CreateWorkspaceForm {...getProps()} />);

    expect(getByLabelText('Workspace Name')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Create' })).toBeInTheDocument();
  });

  it('should render errorMessage', () => {
    const errorMessage = 'errorMessage';
    const { getByText } = customRender(<CreateWorkspaceForm {...getProps({ errorMessage })} />);

    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it('should render Loading', () => {
    const { getByText } = customRender(<CreateWorkspaceForm {...getProps({ isLoading: true })} />);

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should call onSubmit when form submit', () => {
    const onSubmit = jest.fn();
    const { getByRole, getByLabelText } = customRender(<CreateWorkspaceForm {...getProps({ onSubmit })} />);

    fireEvent.change(getByLabelText('Workspace Name'), { target: { value: 'Some name' } });

    fireEvent.submit(getByRole('form'));

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should call onSubmit when button click', async () => {
    const props = getProps();
    const { getByLabelText, getByRole } = customRender(<CreateWorkspaceForm {...props} />);

    fireEvent.change(getByLabelText('Workspace Name'), { target: { value: 'Some name' } });

    fireEvent.click(getByRole('button', { name: 'Create' }));

    expect(props.onSubmit).toHaveBeenCalled();
  });

  it.each<[string, string]>([
    ['password is too short', 'W'],
    ['password is too long', new Array(50).fill('q').join()],
  ])('should NOT submit when: %s', async (_, name) => {
    const props = getProps();
    const { getByLabelText, getByRole } = customRender(<CreateWorkspaceForm {...props} />);

    fireEvent.change(getByLabelText('Workspace Name'), { target: { value: name } });

    fireEvent.click(getByRole('button', { name: 'Create' }));

    expect(props.onSubmit).not.toHaveBeenCalled();
  });
});
