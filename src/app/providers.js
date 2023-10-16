'use client'

import { ModalProvider } from '@/providers/modal'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return <ThemeProvider enableSystem={false} attribute="class">
    <ModalProvider>
      {children}
    </ModalProvider>
  </ThemeProvider>
}

