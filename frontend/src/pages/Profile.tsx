import { Avatar, Box, Typography } from '@mui/material';
import Item from '../components/Item';
import { pink } from '@mui/material/colors';
import { v4 as uuidv4 } from 'uuid';

export default function Profile() {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "banner",
          height: 150,
          borderRadius: 4
        }}
      ></Box>

      <Box
        sx={{
          mb: 4,
          marginTop: "-60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}>
        <Avatar
          sx={{
            width: 100,
            height: 100,
            bgcolor: pink[500]
          }}
        />
        <Box sx={{ textAlign: "center" }}>
          <Typography>Alice</Typography>
          <Typography
            sx={{
              fontSize: "0.8em",
              color: "text.fade"
            }}
          >
            Alice's profile bio content here
          </Typography>
        </Box>
      </Box>
      <Item
        key={1}
        onDelete={() => { }}
        item={{
          id: uuidv4(),
          content: "A post content from Alice",
          name: "Alice",
        }}
      />
    </Box>
  )
}
