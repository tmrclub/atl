import { pagesConfig } from './pages.config.js'
import './App.css'

const { mainPage, Pages, Layout } = pagesConfig
const MainComponent = Pages[mainPage]

function App() {
  const content = <MainComponent />
  return Layout ? <Layout>{content}</Layout> : content
}

export default App
