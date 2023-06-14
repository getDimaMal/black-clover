import { workspace } from '../../workspaces/test-data/workspaces.test-data';
import { CreatePropertyDto } from '../dto/create-property.dto';
import { UpdatePropertyDto } from '../dto/update-property.dto';
import { Property } from '../entities/property.entity';

export const property: Property = {
  workspace,
  id: 'property-id-123',
  name: 'Property Name',
  description: 'Some Property Description',
};

export const propertiesList: Property[] = [
  {
    workspace,
    id: 'property-id-123',
    name: 'Property Name',
    description: 'Some Property Description',
  },
  {
    workspace,
    id: 'property-id-456',
    name: 'Property Name',
    description: 'Another Property Description',
  },
];

export const createProperty: CreatePropertyDto = {
  name: 'New Property',
  description: 'Description for new property',
  workspaceId: 'workspace-id-123',
};

export const updateProperty: UpdatePropertyDto = {
  name: 'Update Property',
  description: 'Description for new property',
};