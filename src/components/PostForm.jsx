import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/postSlice";
import { TextField, Button, Container } from "@mui/material";

const PostForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      dispatch(addPost({ name, description }));
      setName("");
      setDescription("");
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
        <TextField
          label="Nombre"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Descripción"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Crear
        </Button>
      </form>
    </Container>
  );
};

export default PostForm;
