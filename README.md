## Nextjs application based on openapi

> MSW + aspida + testing-library + Chakra UI + React-Query Example

# Setup

```
yarn
npx openapi2aspida -i schema/api.json // Create API client
json-server --watch ./Backend/db.json -p 3000  // Starting the Fake Server (using json-server)
yarn dev
```

## Test

`yarn test`
