// src/pages/Home.jsx
import { useAuth } from "../context/AuthContext";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Paper,
  Stack,
} from "@mui/material";

const Home = () => {
  const { user } = useAuth();

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card elevation={6}>
        <CardContent>
          <Stack spacing={3} alignItems="center">
            <Avatar
              alt={user.displayName || user.email}
              src={user.photoURL || ""}
              sx={{ width: 80, height: 80, fontSize: 32 }}
            >
              {!user.photoURL && (user.displayName?.[0] || user.email?.[0])}
            </Avatar>

            <Typography variant="h5" gutterBottom>
              Welcome, {user.displayName || user.email}
            </Typography>

            <Typography variant="body1" textAlign="center">
              This is a protected page. You're successfully logged in!
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
