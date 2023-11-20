'use client';

import { PropsWithChildren } from 'react';
import StyledComponentsRegistry from '@/app/styles/StyleRegistry';
import GlobalStyles from '@/app/styles/global';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/app/styles/theme';
import { Provider } from 'react-redux';
import store from '@/app/store/Index';

export function Providers({ children }: PropsWithChildren) {
   return (
      <Provider store={store}>
      <StyledComponentsRegistry>
         <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
         </ThemeProvider>
      </StyledComponentsRegistry>
      </Provider>
   );
}
