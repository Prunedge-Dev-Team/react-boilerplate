import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
    mutations: {
      throwOnError: false,
    },
  }
})
const AppProviders = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
    </QueryClientProvider>
);

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProviders };
