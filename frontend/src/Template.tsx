import { Box, Container, Snackbar } from '@mui/material';
import Header from './components/Header';
import AppDrawer from './AppDrawer';
import useApp from './hooks/useApp';
import { Outlet } from 'react-router-dom';

export default function Template() {
  const { globalMsg, setGlobalMsg } = useApp();

  return (
    <Box>
      <Header />
      <AppDrawer />

      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Outlet />
      </Container>

      <Snackbar
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
        open={!!globalMsg}
        autoHideDuration={5000}
        onClose={() => setGlobalMsg(null)}
        message={globalMsg}
      />
    </Box>
  )
}
