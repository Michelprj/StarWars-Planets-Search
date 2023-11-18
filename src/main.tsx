import ReactDOM from 'react-dom/client';
import App from './App';
import TotalProvider from './context/TotalProvider';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <TotalProvider>
      <App />
    </TotalProvider>,
  );
