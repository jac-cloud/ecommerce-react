import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import '@mantine/core/styles.css';


createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </MantineProvider>
)
