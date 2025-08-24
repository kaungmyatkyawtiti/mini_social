import { CssBaseline } from '@mui/material';
import GlobalProvider from './GlobalProvider';
import AppRouter from './AppRouter';

export default function ThemedApp() {
  return (
    <GlobalProvider>
      <AppRouter />
      <CssBaseline />
    </GlobalProvider>
  )
}
