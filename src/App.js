import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Experience from './Pages/Experience'
import Index from './Component/Index'

function App() {
  return (
    <Router>
      <Index />
      <Routes>
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  )
}

export default App
