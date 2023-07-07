type TUsersAction = 'users/signIn' | 'users/signUp' | 'users/clear';

export type TAllActionTypes = TUsersAction;

export const ActionsType: {
  users: Record<TUsersAction, TUsersAction>;
} = {
  users: {
    'users/signIn': 'users/signIn',
    'users/signUp': 'users/signUp',
    'users/clear': 'users/clear',
  },
};
