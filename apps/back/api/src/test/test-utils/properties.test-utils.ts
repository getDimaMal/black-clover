import { CreatePropertyDto } from '@black-clover/back/properties/dto/create-property.dto';
import { PropertyDto } from '@black-clover/back/properties/dto/property.dto';
import { UpdatePropertyDto } from '@black-clover/back/properties/dto/update-property.dto';

import { getCreatePropertyProps, getUpdatePropertyProps } from '../test-data/properties.test-data';

import { getServer } from './test-utils';
import { ErrorType, UseProps } from './types';

type UsePostProps = UseProps & {
  props?: CreatePropertyDto;
};

type UseGetListProps = UseProps & {
  workspaceId: string;
};

type UseGetProps = UseProps & {
  propertyId: string;
};

type UsePutProps = UseProps &
  UseGetProps & {
    props?: UpdatePropertyDto;
  };

type UsePropertyResultProps = [PropertyDto & ErrorType, number];
type UseListPropertiesResultProps = [PropertyDto[] & ErrorType, number];

export const usePostProperty = async ({
  app,
  header = ['header', ''],
  props = getCreatePropertyProps(),
}: UsePostProps): Promise<UsePropertyResultProps> => {
  const { body, status } = await getServer(app)
    .post('/properties')
    .set(...header)
    .send(props);

  return [body as UsePropertyResultProps[0], status];
};

export const useGetListProperties = async ({
  app,
  workspaceId,
  header = ['header', ''],
}: UseGetListProps): Promise<UseListPropertiesResultProps> => {
  const { body, status } = await getServer(app)
    .get(`/properties/workspace/${workspaceId}`)
    .set(...header);

  return [body as UseListPropertiesResultProps[0], status];
};

export const useGetProperty = async ({
  app,
  propertyId,
  header = ['header', ''],
}: UseGetProps): Promise<UsePropertyResultProps> => {
  const { body, status } = await getServer(app)
    .get(`/properties/${propertyId}`)
    .set(...header);

  return [body as UsePropertyResultProps[0], status];
};

export const usePutProperty = async ({
  app,
  propertyId,
  header = ['header', ''],
  props = getUpdatePropertyProps(),
}: UsePutProps): Promise<UsePropertyResultProps> => {
  const { body, status } = await getServer(app)
    .put(`/properties/${propertyId}`)
    .set(...header)
    .send(props);

  return [body as UsePropertyResultProps[0], status];
};
