
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['aprender', 'react', 'fazer projetos', 'se dedicar'];

function App() {
  return (
    compromissos.map((elemento) => Task(elemento))
  );
}

export default App;
