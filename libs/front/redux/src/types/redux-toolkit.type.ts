import { Dispatch } from '@reduxjs/toolkit';

export type AsyncThunkConfig<Extra, Error> = {
  extra: Extra;
  rejectValue: Error;
  dispatch?: Dispatch;
  state?: unknown;
  pendingMeta?: unknown;
  rejectedMeta?: unknown;
  fulfilledMeta?: unknown;
  serializedErrorType?: unknown;
};
