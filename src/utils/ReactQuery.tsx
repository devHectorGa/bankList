import React, {FC, PropsWithChildren} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export const ReactQuery: FC<PropsWithChildren> = ({children}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
