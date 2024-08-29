import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';

function App({ children }: { children: ReactElement<ReactNode> }) {
  return <Provider store={store}>{children}</Provider>;
}

export default App;
