import Filter from './components/filter/Filter';
import Table from './components/table/Table';
import TotalProvider from './context/TotalProvider';
import { GlobalStyles } from './styles/globalStyles';

function App() {
  return (
    <TotalProvider>
      <GlobalStyles/>
      <Filter />
      <Table />
    </TotalProvider>
  );
}

export default App;
