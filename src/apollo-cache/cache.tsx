import { INotify } from '@/@types/types';
import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      // Store local data as fields in the Apollo Client cache
      fields: {
        // Field policy for notify field
        notify: {
          // Defines a read function that reads the variable's value.
          read() {
            return notifyVar();
          },
        },
        token: {
          read() {
            return tokenVar();
          },
        },
        // Relay-style Pagination in Apollo Client.
        allProjects: relayStylePagination(),
      },
    },
  },
});

/**
 * @see https://www.apollographql.com/docs/react/local-state/reactive-variables
 */
export const notifyVar: ReactiveVar<INotify> = makeVar<INotify>({
  message: '',
});

export const tokenVar: ReactiveVar<string | null> = makeVar<string | null>(
  localStorage.getItem('token') || null
);
