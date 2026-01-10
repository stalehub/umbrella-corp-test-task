import '@/locales/i18n';
import { ApolloClient, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { motion } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { cache } from './apollo-cache/cache.tsx';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_SERVER_URL,
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
});

const variants = {
  hidden: { opacity: 0, x: -50, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{ type: 'linear' }}
        >
          <App />
        </motion.main>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
