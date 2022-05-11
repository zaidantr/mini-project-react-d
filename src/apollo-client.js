import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://ztr-login-react.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret':
          'V4sA2YGBCVj38xypDetB309zmzpJXeWKhm6XizhiAHvATpU84xr0PcGY4zi75duF'
      },
});

export default client;