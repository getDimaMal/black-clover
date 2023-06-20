import { customRender } from '../../../test-utils';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  it('should render', () => {
    const { getByText } = customRender(<ProgressBar isLoading />);

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should NOT render', () => {
    const { queryByText } = customRender(<ProgressBar />);

    expect(queryByText('Loading...')).not.toBeInTheDocument();
  });
});
