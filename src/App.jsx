import { Container, Typography } from "@mui/material";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const App = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ my: 4 }}>
        Gestión de Posts
      </Typography>
      <PostList />
      <PostForm />
    </Container>
  );
};

export default App;
