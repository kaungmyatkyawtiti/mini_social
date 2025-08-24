import { Box, Button, TextField } from '@mui/material';
import Item from '../components/Item';
import { v4 as uuidv4 } from 'uuid';

export default function Comments() {
  return (
    <Box>
      <Item
        primary
        key={1}
        item={{
          id: uuidv4(),
          content: "Initial post content from Alice",
          name: "Alice",
        }}
        onDelete={() => { }}
      />
      <Item
        key={2}
        item={{
          id: uuidv4(),
          content: "A comment from Bob",
          name: "Bob",
        }}
        onDelete={() => { }}
      />
      <Item
        key={3}
        item={{
          id: uuidv4(),
          content: "A comment reply from Alice",
          name: "Alice",
        }}
        onDelete={() => { }}
      />
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 3,
          }}
        >
          <TextField multiline placeholder="Your Comment" />
          <Button
            type="submit"
            variant="contained">
            Reply
          </Button>
        </Box>
      </form>
    </Box>
  )
}
