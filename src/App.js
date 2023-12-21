import Example from './components/Example';
import './App.css';

function App() {
  const titles = ['First Example', 'Second Example']

  return (
    <div className="App">
      {titles.map((title, index) => (
        <div key={title + index} style={{ margin: '20px' }}>
          <span style={{ fontWeight: "bold" }}>{title}</span>
          <Example />
        </div>
      ))}
    </div>
  );
}

export default App;
