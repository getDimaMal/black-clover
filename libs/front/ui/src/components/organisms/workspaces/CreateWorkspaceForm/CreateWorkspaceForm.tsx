import React, { FC } from 'react';
import { CreateWorkspaceFormProps } from '@black-clover/front/shared/types/workspace.type';

import Button from '../../../atoms/Buttons/Button/Button';
import Loader from '../../../atoms/Loader/Loader';
import Alert from '../../../atoms/Messages/Alert/Alert';
import Paper from '../../../atoms/Paper/Paper';
import Typography from '../../../atoms/Typography/Typography';

import useStyles from './CreateWorkspaceForm.styles';

const CreateWorkspaceForm: FC<CreateWorkspaceFormProps> = ({ isLoading, errorMessage }) => {
  const { classes } = useStyles();

  return (
    <Paper>
      <form noValidate className={classes.root} aria-label="form">
        <Loader isLoading={isLoading} />

        <Typography variant="h2" className={classes.alignCenter}>
          Create Workspace
        </Typography>

        {errorMessage && <Alert variant="error" message={errorMessage} />}

        {/*<TextField {...getInputProps('name')} autoFocus type="text" label="Workspace Name" />*/}

        <Button fullWidth type="submit" label="Create" />
      </form>
    </Paper>
  );
};

export default CreateWorkspaceForm;
