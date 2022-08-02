import { AppBar, Toolbar, IconButton, Typography, Button, ThemeProvider, CssBaseline, Grid, createStyles, makeStyles, Container } from '@mui/material'
import { useState } from 'react'
import PresenceShareGraph from './components/PresenceShareGraph'
import PriceEvolutionGraph from './components/PriceEvolutionGraph'
import ProductsTable from './components/ProductsTable'
import { theme } from './styles/theme'
import AtlantiaLogo from './assets/atlantia.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={AtlantiaLogo} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Grid container columnSpacing={2} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3">General Performance Analysis</Typography>
          </Grid>
          <Grid item xs={12} lg sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>
            <Typography variant="h4">Price Evolution</Typography>
            <PriceEvolutionGraph />
          </Grid>
          <Grid item xs={12} lg='auto' sx={{ display: 'flex', flexDirection: 'column',  rowGap: 2 }}>
            <Typography variant="h4">Presence Share by Product</Typography>
            <PresenceShareGraph />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column',  rowGap: 2 }}>
            <Typography variant="h4">Comparative Analysis</Typography>
            <ProductsTable />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}
export default App;