import { v4 as uuidV4 } from 'uuid';

export const getUUID = (): string => {
  return uuidV4();
};
