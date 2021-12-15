/** @jsxRuntime classic */
/** @jsx jsx */
import type { NextPage } from 'next';
import { jsx } from '@emotion/react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home: NextPage = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box
          component="main"
          sx={{ pt: 8, height: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ textAlign: 'center', mb: 4, textTransform: 'uppercase' }}
          >
            Peyek DApp Starter
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%' }} />
        </Box>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Container sx={{ maxWidth: 'sm' }}>
          <Typography sx={{ textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} Peyek DApp Starter
          </Typography>
        </Container>
      </Box>
    </Stack>
  );
};

export default Home;
