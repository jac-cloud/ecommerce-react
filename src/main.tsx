import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './lib';
import { router } from './router';
import '@mantine/core/styles.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <MantineProvider>
        <RouterProvider router={router}/>
      </MantineProvider>
    </ReduxProvider>
  </StrictMode>
)
