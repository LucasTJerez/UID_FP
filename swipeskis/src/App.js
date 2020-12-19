import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Bar from './components/TopBar'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';




function App() {

  return (
    <div style={{maxWidth:396, maxHeight:667, margin:'auto'}} className="App">
      <Bar />
      <Homepage />
      
    </div>
  );
}

export default App;
