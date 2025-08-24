import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import useApp from '../hooks/useApp';
import { Box } from '@mui/material';
import Form from '../components/Form';
import Item from '../components/Item';
import type { Post } from '../types/post';

const mockData: Post[] = [
  { id: uuidv4(), content: "Hello, World!", name: "Alice" },
  { id: uuidv4(), content: "React is fun.", name: "Bob" },
  { id: uuidv4(), content: "Yay, interesting.", name: "Chris" },
]

export default function Home() {
  const { showForm, setGlobalMsg } = useApp();
  const [data, setData] = useState(mockData);

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
    setGlobalMsg("An item deleted");
  }

  const handleAdd = (content: string, name: string) => {
    const newOne = {
      id: uuidv4(),
      content,
      name,
    }
    setData([newOne, ...data]);
    setGlobalMsg("An item added");
  }

  return (
    <Box>
      {
        showForm && <Form onAdd={handleAdd} />
      }
      {
        data.map(item =>
          <Item
            key={item.id}
            item={item}
            onDelete={handleDelete}
          />
        )
      }
    </Box >
  );
}
