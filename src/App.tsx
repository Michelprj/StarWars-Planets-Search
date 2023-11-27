import Filter from './components/filter/Filter';
import Table from './components/table/Table';
import TotalProvider from './context/TotalProvider';
import './App.css';

function App() {
  return (
    <TotalProvider>
      <Filter />
      <Table />
    </TotalProvider>
  );
}

export default App;
