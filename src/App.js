import './App.css';

import Home from 'pages/Home';
import { DataProvider } from 'context/dataProvider';

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
