import * as apiHook from '@black-clover/front/api';
import * as authHook from '@black-clover/front/api';
import { WorkspaceDto } from '@black-clover/shared/dto/workspaces/workspace.dto';

import { customRender } from '../../../test-utils';

import CreateWorkspace from './CreateWorkspace';

type ResultType = ReturnType<typeof apiHook.useCreateWorkspace>;

const getResult = (result: Partial<ResultType> = {}): ResultType => ({
  data: null,
  error: null,
  status: 'idle',
  isLoading: false,
  createWorkspace: jest.fn(),
  ...result,
});
jest.mock('@black-clover/front/api', () => ({
  useCreateWorkspace: jest.fn<ResultType, unknown[]>(() => getResult()),
}));

describe('CreateWorkspace', () => {
  it('should render form', () => {
    const form = 'form';
    const onSuccess = jest.fn();
    const { getByText } = customRender(<CreateWorkspace onSuccess={onSuccess} render={() => <div>{form}</div>} />);

    expect(onSuccess).not.toHaveBeenCalled();
    expect(getByText(form)).toBeInTheDocument();
  });

  it('should call onSuccess', () => {
    jest
      .spyOn(authHook, 'useCreateWorkspace')
      .mockReturnValue(getResult({ data: {} as WorkspaceDto, status: 'success' }));

    const onSuccess = jest.fn();
    customRender(<CreateWorkspace onSuccess={onSuccess} render={() => <div />} />);

    expect(onSuccess).toHaveBeenCalledTimes(1);
  });
});
