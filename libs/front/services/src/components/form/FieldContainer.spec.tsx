import { IsString, MinLength } from 'class-validator';

import { fireEvent, render } from '../../../jest.setup';

import FieldContainer, { RenderProps } from './FieldContainer';
import FormContainer from './FormContainer';

const error = 'Error';
const fieldName = 'firstName';

class TestDto {
  @IsString()
  @MinLength(3, { message: error })
  firstName: string;
}

const initForm: TestDto = {
  firstName: 'Rick',
};

function Field<FORM extends object>({ name, error, value, onChange }: RenderProps<FORM>) {
  return (
    <div>
      <label>
        {name as string}
        <input
          type="text"
          name={name as string}
          value={value as string}
          onChange={(e) => onChange(e.target.value as FORM[keyof FORM])}
        />
      </label>
      {error}
    </div>
  );
}

function Form() {
  return (
    <FormContainer
      initForm={initForm}
      onSubmit={jest.fn()}
      Resolver={TestDto}
      render={(props) => <FieldContainer {...props} name={fieldName} render={(props) => <Field {...props} />} />}
    />
  );
}

describe('FieldContainer', () => {
  it('should render field', () => {
    const { getByLabelText } = render(<Form />);

    expect(getByLabelText(fieldName)).toBeInTheDocument();
  });

  it('should change field value', () => {
    const value = 'Morty';
    const { getByLabelText, getByDisplayValue } = render(<Form />);

    fireEvent.change(getByLabelText(fieldName), { target: { value } });
    expect(getByDisplayValue(value)).toBeInTheDocument();
  });

  it('should display error', () => {
    const value = '!';
    const { getByText, queryByText, getByRole, getByLabelText } = render(<Form />);

    fireEvent.change(getByLabelText(fieldName), { target: { value } });
    expect(queryByText(error)).not.toBeInTheDocument();

    fireEvent.submit(getByRole('form'));
    expect(getByText(error)).toBeInTheDocument();
  });
});
