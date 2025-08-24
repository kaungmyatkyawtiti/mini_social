import { createContext } from 'react';
import type { PaletteMode } from '@mui/material';

interface AppContextType {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  mode: PaletteMode;
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  globalMsg: string | null;
  setGlobalMsg: React.Dispatch<React.SetStateAction<string | null>>;
  auth: boolean | null;
  setAuth: React.Dispatch<React.SetStateAction<boolean | null>>;
}

// const iniAppState = {
//   showForm: false,
//   setShowForm: () => { },
//   mode: "dark" as PaletteMode,
//   setMode: () => { },
//   showDrawer: false,
//   setShowDrawer: () => { },
//   globalMsg: null,
//   setGlobalMsg: () => { },
//   auth: null,
//   setAuth: () => { },
// }

const AppContext = createContext<AppContextType>({} as AppContextType);

export default AppContext;
