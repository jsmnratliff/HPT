import { createRoot } from 'react-dom/client'; // Updated import path
import App from './App'; // Import your main application component

// Create a root instance
const root = createRoot(document.getElementById('root'));

// Render your component(s) using the root instance
root.render(<App />);
