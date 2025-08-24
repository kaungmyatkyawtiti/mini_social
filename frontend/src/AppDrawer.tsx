import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import {
  Home as HomeIcon,
  Person as ProfileIcon,
  Logout as LogoutIcon,
  PersonAdd as RegisterIcon,
  Login as LoginIcon,
} from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";
import useApp from './hooks/useApp';
import { useNavigate } from 'react-router-dom';

interface DrawerItemProps {
  text: string;
  Icon: typeof HomeIcon;
  onClick?: () => void;
  iconColor?: string;
}

function AppDrawerItem({
  text,
  Icon,
  onClick,
  iconColor
}: DrawerItemProps) {
  return (
    <ListItem>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>
          <Icon
            sx={
              iconColor
                ? { color: iconColor }
                : undefined
            }
          />
        </ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default function AppDrawer() {
  const {
    showDrawer,
    setShowDrawer,
    auth,
    setAuth
  } = useApp();
  const navigate = useNavigate();

  return (
    <div>
      <Drawer
        open={showDrawer}
        onClose={() => setShowDrawer(false)}>
        <Box
          sx={{
            mb: 6,
            width: 300,
            height: 140,
            bgcolor: "banner",
            position: "relative",
          }}>
          <Box
            sx={{
              gap: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              left: 20,
              bottom: -30,
            }}>
            <Avatar
              sx={{
                width: 94,
                height: 94,
                color: "white",
                background: deepPurple[500],
              }}
            />
            <Typography sx={{ fontWeight: "bold" }}>
              Alice
            </Typography>
          </Box>
        </Box>
        <List>

          <AppDrawerItem
            text="Home"
            Icon={HomeIcon}
            onClick={() => navigate("/")}
          />
          <Divider />
          {
            auth
              ? (
                <>
                  <AppDrawerItem
                    text="Profile"
                    Icon={ProfileIcon}
                    onClick={() => navigate("/profile/1")}
                  />
                  <AppDrawerItem
                    text="Logout"
                    Icon={LogoutIcon}
                    onClick={() => setAuth(null)}
                    iconColor="error.main"
                  />
                </>
              )
              : (
                <>
                  <AppDrawerItem
                    text="Register"
                    Icon={RegisterIcon}
                    onClick={() => navigate("/register")}
                  />
                  <AppDrawerItem
                    text="Login"
                    Icon={LoginIcon}
                    onClick={() => navigate("/login")}
                  />
                </>
              )
          }
        </List>
      </Drawer>
    </div >
  );
}
