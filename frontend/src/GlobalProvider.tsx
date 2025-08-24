import { useMemo, useState } from 'react';
import AppContext from './hooks/AppContext';
import { createTheme, ThemeProvider } from '@mui/material';
import type { PaletteMode } from '@mui/material';
import { deepPurple, grey } from '@mui/material/colors';

interface GlobalProviderProps {
  children: React.ReactNode;
}

declare module "@mui/material/styles" {
  interface Palette {
    banner: string;
  }
  interface PaletteOptions {
    banner?: string;
  }
  interface TypeText {
    fade: string;
  }
}

export default function GlobalProvider({ children }: GlobalProviderProps) {
  const [showForm, setShowForm] = useState(false);
  const [mode, setMode] = useState<PaletteMode>("dark");
  const [showDrawer, setShowDrawer] = useState(true);
  const [globalMsg, setGlobalMsg] = useState<string | null>(null);
  const [auth, setAuth] = useState<boolean | null>(null);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: deepPurple,
        banner: mode === "dark" ? grey[800] : grey[300],
        background: {
          default: mode === "dark" ? grey[900] : grey[100],
          paper: mode === "dark" ? grey[800] : grey[200],
        },
        text: {
          primary: mode === "dark" ? grey[100] : grey[900],
          secondary: grey[500],
          fade: grey[500],
        },
      },
    });
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          showForm,
          setShowForm,
          mode,
          setMode,
          showDrawer,
          setShowDrawer,
          globalMsg,
          setGlobalMsg,
          auth,
          setAuth,
        }}
      >
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  )
}
