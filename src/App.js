import { Header } from './components/templates';
import { BestList } from './components/lists';
import Store from './Store';

import './App.css';

function App() {

  return (
    <Store className="app">
      <Header />
      <BestList />
    </Store>
  );
}

export default App;
