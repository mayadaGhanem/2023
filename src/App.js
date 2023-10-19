 import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {  ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { HomeController } from './Controllers/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
     <HomeController/>
    </ThemeProvider>
  );
}

export default App;
