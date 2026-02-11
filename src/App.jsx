import { pagesConfig } from './pages.config.js'
import './App.css'

const { mainPage, Pages, Layout } = pagesConfig
const MainComponent = Pages?.[mainPage]

function App() {
  if (!MainComponent) {
    return (
      <div style={{ minHeight: '100vh', background: '#000', color: '#fff', padding: 24, fontFamily: 'monospace' }}>
        Page &quot;{mainPage}&quot; not found in config.
      </div>
    )
  }
  const content = <MainComponent />
  return Layout ? <Layout>{content}</Layout> : content
}

export default App
