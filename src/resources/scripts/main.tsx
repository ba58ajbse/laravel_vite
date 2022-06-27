import { createRoot } from 'react-dom/client';

const App = () => {
    return <div>Hello, World!!!</div>;
};

export default App;

const container = document.getElementById('app');
if (container) {
    const app = createRoot(container);
    app.render(<App />);
}