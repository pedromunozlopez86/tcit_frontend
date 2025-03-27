import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../features/postSlice";
import {
  Container,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const filteredPosts = posts.filter((post) =>
    post.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="md">
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <TextField
          label="Filtro de Nombre"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
        <Button variant="contained">Buscar</Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Nombre</strong></TableCell>
              <TableCell><strong>Descripción</strong></TableCell>
              <TableCell><strong>Acción</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPosts.map((post) => (
              <TableRow key={post.id} sx={{ backgroundColor: "#f8f8f8" }}>
                <TableCell>{post.name}</TableCell>
                <TableCell>{post.description}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDelete(post.id)} color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PostList;