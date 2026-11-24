
import './App.css'
import { Routes, Route } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
      </Route>
    </Routes> 
  )
}

export default App
