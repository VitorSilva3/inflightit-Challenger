import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Cliente from './components/juncao';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Cliente tab=""/>);