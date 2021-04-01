import {HashRouter} from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import {DataProvider} from './components/Context'


function App() {
  return (
    <DataProvider>
    <HashRouter basename={process.env.PUBLIC_URL}>
    <div>
<Header/>
<Section/>
    </div>
    </HashRouter>
    </DataProvider>
  );
}

export default App;
