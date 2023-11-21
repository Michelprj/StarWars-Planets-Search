import './App.css';
import Filter from './components/Filter';
import Table from './components/Table';
import TotalProvider from './context/TotalProvider';

function App() {
  return (
    <TotalProvider>
      <Filter />
      <Table />
    </TotalProvider>
  );
}

export default App;
