import schema from '../schema/api.json';

const components = {
  Posts: [
    schema.components.schemas.Post['x-examples']['example-1'],
    schema.components.schemas.Post['x-examples']['example-2'],
    schema.components.schemas.Post['x-examples']['example-3'],
  ],
  Post: schema.components.schemas.Post['x-examples']['example-1'],
};
export default components;
