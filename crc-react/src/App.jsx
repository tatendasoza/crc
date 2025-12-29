import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import StaticHtml from './components/StaticHtml.jsx'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<StaticHtml path="/index-2.html" />} />
          <Route path="/about" element={<StaticHtml path="/about.html" />} />
          <Route path="/homegroup" element={<StaticHtml path="/homegroup.html" />} />
          <Route path="/tithes" element={<StaticHtml path="/tithes.html" />} />
          <Route path="/contact" element={<StaticHtml path="/contact.html" />} />
          <Route path="/sermons" element={<StaticHtml path="/sermons.html" />} />
          <Route path="/podcast" element={<StaticHtml path="/podcast.html" />} />
          <Route path="/event" element={<StaticHtml path="/event_single.html" />} />
          <Route path="/gallery-ii" element={<StaticHtml path="/gallery_II.html" />} />
          <Route path="/gallery-iii" element={<StaticHtml path="/gallery_III.html" />} />
          <Route path="/gallery-iv" element={<StaticHtml path="/gallery_IV.html" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
