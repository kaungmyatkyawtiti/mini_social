import {
  Box,
  TextField,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import type { InferType } from 'yup'
import { log } from '../utils/logger';

interface FormProps {
  onAdd: (content: string, name: string) => void;
}

const postSchema = yup
  .object({
    content: yup.string().required(),
  })
  .required()

export type PostFormData = InferType<typeof postSchema>;

export default function Form({
  onAdd,
}: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostFormData>({
    defaultValues: {
      content: '',
    },
    resolver: yupResolver(postSchema),
  });

  const onSubmit = (data: PostFormData) => {
    log(data);
    onAdd(data.content, "Alice");
    reset();
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ mb: 4, textAlign: "right" }}>
        <TextField
          {...register("content")}
          type="text"
          placeholder="Content"
          fullWidth
          multiline
          helperText={errors?.content?.message}
          error={!!errors?.content}
          sx={{ mb: 1 }}
        />
        <Button
          variant="contained"
          type="submit">
          Post
        </Button>
      </Box>
    </form>
  )
}
