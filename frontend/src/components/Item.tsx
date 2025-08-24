import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";

import {
  Alarm as TimeIcon,
  AccountCircle as UserIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import { green } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';
import type { Post } from '../types/post';

interface ItemProps {
  item: Post;
  onDelete: (id: string) => void;
  primary?: boolean;
}

export default function Item({
  item,
  onDelete,
  primary
}: ItemProps) {
  const navigate = useNavigate();

  const handleNavigateComment = () => {
    navigate("/comments/1");
  }

  return (
    <Card sx={{ mb: 2 }}>
      {
        primary && <Box sx={{ height: 50, bgcolor: green[500] }} />
      }
      <CardContent onClick={handleNavigateComment}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          {/* card top */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}>
            <TimeIcon fontSize="small" color="success" />
            <Typography
              variant="caption"
              sx={{ color: green[500] }}>
              A few second ago
            </Typography>
          </Box>
          <IconButton
            size="small"
            onClick={(e) => {
              onDelete(item.id);
              e.stopPropagation();
            }}
          >
            <DeleteIcon fontSize="small" color='error' />
          </IconButton>
        </Box>
        {/* card middle */}
        <Typography sx={{ my: 3 }}>
          {item.content}
        </Typography>
        {/* card bottom */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}>
          <UserIcon
            fontSize="small"
            color="info"
          />
          <Typography variant="caption">
            {item.name}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
