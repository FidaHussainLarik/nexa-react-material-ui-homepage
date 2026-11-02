import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowForward,
  CheckCircle,
  Groups,
  Insights,
  Menu,
  PlayArrow,
  Schedule,
  TaskAlt,
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: '#635bff', dark: '#4e46d8' },
    secondary: { main: '#f5b84b' },
    background: { default: '#f7f8fc', paper: '#ffffff' },
    text: { primary: '#172033', secondary: '#68738a' },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.055em', lineHeight: 1.04 },
    h2: { fontWeight: 800, letterSpacing: '-0.04em' },
    h3: { fontWeight: 750, letterSpacing: '-0.03em' },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: { borderRadius: 16 },
});

const features = [
  {
    icon: <TaskAlt />,
    color: '#635bff',
    title: 'One space for every project',
    description: 'Bring tasks, briefs, and feedback together so your team always knows what matters next.',
  },
  {
    icon: <Insights />,
    color: '#e9815b',
    title: 'Clarity at a glance',
    description: 'Turn busywork into momentum with simple views that show progress without the noise.',
  },
  {
    icon: <Groups />,
    color: '#2b9c8b',
    title: 'Built for better teamwork',
    description: 'Keep conversations close to the work and make every handoff feel effortless.',
  },
];

function Logo() {
  return (
    <Stack direction="row" spacing={1.1} alignItems="center">
      <Box
        sx={{
          width: 32,
          height: 32,
          bgcolor: 'primary.main',
          borderRadius: '10px 10px 10px 3px',
          transform: 'rotate(-8deg)',
          display: 'grid',
          placeItems: 'center',
          color: 'white',
          fontWeight: 900,
          fontSize: 18,
        }}
      >
        N
      </Box>
      <Typography fontWeight={800} fontSize={21} color="text.primary" letterSpacing="-0.04em">
        nexa
      </Typography>
    </Stack>
  );
}

function ProductPreview() {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: '#20283b',
        borderRadius: 3,
        p: { xs: 1.5, sm: 2 },
        width: '100%',
        maxWidth: 520,
        border: '8px solid #fff',
        boxShadow: '0 24px 70px rgba(37, 45, 80, 0.18)',
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Stack direction="row" spacing={0.75} alignItems="center">
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ef796c' }} />
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#f6c95d' }} />
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#63cf9d' }} />
        </Stack>
        <Typography color="#aeb8cd" fontSize={10}>MY WORKSPACE / OVERVIEW</Typography>
      </Stack>
      <Box sx={{ bgcolor: '#2b344b', borderRadius: 2, p: { xs: 1.5, sm: 2.2 } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2.5}>
          <Box>
            <Typography color="white" fontWeight={700} fontSize={15}>Good morning, Alex</Typography>
            <Typography color="#9ba8c0" fontSize={10} mt={0.4}>Here&apos;s what&apos;s happening today.</Typography>
          </Box>
          <Box sx={{ bgcolor: '#635bff', borderRadius: 1.5, p: 1, color: 'white', lineHeight: 0 }}>
            <Schedule fontSize="small" />
          </Box>
        </Stack>
        <Stack direction="row" spacing={1.2} mb={2}>
          {[['12', 'Tasks done', '#635bff'], ['04', 'In review', '#e9815b'], ['86%', 'On track', '#2b9c8b']].map(([value, label, color]) => (
            <Box key={label} sx={{ flex: 1, bgcolor: '#222b40', borderRadius: 1.5, p: 1.2 }}>
              <Typography color={color} fontWeight={800} fontSize={17}>{value}</Typography>
              <Typography color="#8996ad" fontSize={9}>{label}</Typography>
            </Box>
          ))}
        </Stack>
        <Typography color="#dce2ed" fontSize={11} fontWeight={700} mb={1}>This week&apos;s focus</Typography>
        {[['Website refresh', 78, '#635bff'], ['Q4 campaign launch', 54, '#f5b84b'], ['Team offsite planning', 32, '#2b9c8b']].map(([label, value, color]) => (
          <Box key={label} mb={1.2}>
            <Stack direction="row" justifyContent="space-between" mb={0.5}>
              <Typography color="#aeb8cd" fontSize={9}>{label}</Typography>
              <Typography color="#aeb8cd" fontSize={9}>{value}%</Typography>
            </Stack>
            <LinearProgress variant="determinate" value={value} sx={{ height: 5, borderRadius: 3, bgcolor: '#3a445a', '& .MuiLinearProgress-bar': { bgcolor: color, borderRadius: 3 } }} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navItems = ['Product', 'Solutions', 'Resources', 'Pricing'];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="transparent" elevation={0} sx={{ bgcolor: 'rgba(247,248,252,.9)' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 76, justifyContent: 'space-between' }}>
            <Logo />
            <Stack direction="row" spacing={3.5} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => <Link key={item} href={`#${item.toLowerCase()}`} underline="none" color="text.secondary" fontSize={14} fontWeight={600}>{item}</Link>)}
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <Button color="inherit" sx={{ color: 'text.secondary', px: 2 }}>Log in</Button>
              <Button variant="contained" disableElevation sx={{ borderRadius: 2.5, px: 2.2 }}>Get started</Button>
            </Stack>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ display: { xs: 'flex', sm: 'none' } }} aria-label="Open menu"><Menu /></IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <Logo />
          <List sx={{ mt: 2 }}>
            {navItems.map((item) => <ListItem key={item} disablePadding><ListItemButton component="a" href={`#${item.toLowerCase()}`} onClick={() => setDrawerOpen(false)}><ListItemText primary={item} /></ListItemButton></ListItem>)}
          </List>
          <Button variant="contained" fullWidth onClick={() => setDrawerOpen(false)}>Get started</Button>
        </Box>
      </Drawer>

      <Box component="main">
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.03fr .97fr' }, gap: { xs: 6, md: 4 }, alignItems: 'center', pt: { xs: 7, md: 11 }, pb: { xs: 9, md: 13 } }}>
            <Box>
              <Chip label="THE NEW WAY TO WORK TOGETHER" size="small" sx={{ bgcolor: '#ebeaff', color: 'primary.dark', fontWeight: 800, fontSize: 10, letterSpacing: '.08em', mb: 2.5 }} />
              <Typography variant="h1" sx={{ fontSize: { xs: 48, sm: 64, md: 72 }, maxWidth: 680 }}>
                Make room for <Box component="span" sx={{ color: 'primary.main' }}>better work.</Box>
              </Typography>
              <Typography color="text.secondary" fontSize={{ xs: 17, sm: 19 }} lineHeight={1.65} sx={{ maxWidth: 510, mt: 3 }}>
                Nexa brings your team, projects, and ideas together in one calm, focused workspace.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
                <Button variant="contained" size="large" disableElevation endIcon={<ArrowForward />} sx={{ borderRadius: 2.5, px: 3, py: 1.5 }}>Start for free</Button>
                <Button variant="outlined" size="large" startIcon={<PlayArrow />} sx={{ borderRadius: 2.5, px: 3, py: 1.5, borderColor: '#d9dce8', color: 'text.primary' }}>See how it works</Button>
              </Stack>
              <Stack direction="row" spacing={2.5} mt={3} flexWrap="wrap" useFlexGap>
                {['No credit card', 'Free forever plan'].map((item) => <Stack key={item} direction="row" spacing={0.7} alignItems="center"><CheckCircle sx={{ color: '#2b9c8b', fontSize: 16 }} /><Typography fontSize={12} color="text.secondary">{item}</Typography></Stack>)}
              </Stack>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, position: 'relative' }}>
              <Box sx={{ position: 'absolute', width: 330, height: 330, borderRadius: '50%', bgcolor: '#e9e7ff', filter: 'blur(2px)', zIndex: -1 }} />
              <ProductPreview />
            </Box>
          </Box>
        </Container>

        <Box sx={{ bgcolor: 'white', py: { xs: 8, md: 11 } }} id="product">
          <Container maxWidth="lg">
            <Box sx={{ maxWidth: 600, mb: 5 }}>
              <Typography color="primary.main" fontSize={12} fontWeight={800} letterSpacing=".12em">WHY NEXA</Typography>
              <Typography variant="h2" fontSize={{ xs: 34, md: 44 }} mt={1.2}>Everything you need to move forward.</Typography>
              <Typography color="text.secondary" fontSize={16} mt={1.5} lineHeight={1.7}>Less time searching. More time creating. Nexa gives your best work the space it deserves.</Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
              {features.map((feature) => <Card key={feature.title} elevation={0} sx={{ border: '1px solid #eaebf2', borderRadius: 3, height: '100%' }}><CardContent sx={{ p: 3.2, '&:last-child': { pb: 3.2 } }}><Box sx={{ width: 45, height: 45, display: 'grid', placeItems: 'center', bgcolor: `${feature.color}18`, color: feature.color, borderRadius: 2, mb: 2.5 }}>{feature.icon}</Box><Typography variant="h3" fontSize={20}>{feature.title}</Typography><Typography color="text.secondary" fontSize={14} lineHeight={1.7} mt={1.2}>{feature.description}</Typography></CardContent></Card>)}
            </Box>
          </Container>
        </Box>

        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 8, md: 11 }, textAlign: 'center' }}>
            <Typography variant="h2" fontSize={{ xs: 34, md: 48 }}>Ready to make space for what matters?</Typography>
            <Typography color="text.secondary" mt={1.5} fontSize={16}>Join 18,000+ teams doing their best work with Nexa.</Typography>
            <Button variant="contained" size="large" disableElevation endIcon={<ArrowForward />} sx={{ mt: 3.5, borderRadius: 2.5, px: 3.5, py: 1.5 }}>Get started for free</Button>
          </Box>
        </Container>
      </Box>

      <Box component="footer" sx={{ bgcolor: '#20283b', color: '#aeb8cd', py: 3 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }}>
            <Logo />
            <Typography fontSize={12}>© 2024 Nexa, Inc. Built for better work.</Typography>
            <Stack direction="row" spacing={2}><Link href="#privacy" color="inherit" underline="hover" fontSize={12}>Privacy</Link><Link href="#terms" color="inherit" underline="hover" fontSize={12}>Terms</Link></Stack>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(<App />);
