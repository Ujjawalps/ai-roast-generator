import { Routes, Route } from 'react-router-dom';
import Form from './component/Form/Form';
import Result from './component/Result';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
