import './App.css'
import GymDetail from './pages/GymDetail'
import Homepage from './pages/Homepage'
import GymReview from './pages/GymReview'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Container } from '@mui/material'

function App() {
  return (
    <Router>
      <Header />
      <Container style={{ minHeight: 'calc(100vh - 240px)' }}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gym/:id" element={<GymDetail />} />
        <Route path="/gym/:id/review" element={<GymReview />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
