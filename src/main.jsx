import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function ErrorFallback({ error }) {
  return (
    <div style={{
      minHeight: '100vh',
      padding: 24,
      background: '#000',
      color: '#fff',
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
    }}>
      <h1 style={{ color: '#f87171', marginBottom: 16 }}>Something went wrong</h1>
      <pre style={{ margin: 0, fontSize: 14 }}>{error?.message ?? String(error)}</pre>
      {error?.stack && (
        <pre style={{ marginTop: 16, fontSize: 12, opacity: 0.8 }}>{error.stack}</pre>
      )}
    </div>
  )
}

class ErrorBoundary extends React.Component {
  state = { error: null }
  static getDerivedStateFromError(error) {
    return { error }
  }
  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info)
  }
  render() {
    if (this.state.error) {
      return <ErrorFallback error={this.state.error} />
    }
    return this.props.children
  }
}

const rootEl = document.getElementById('root')
if (!rootEl) {
  document.body.innerHTML = '<div style="padding:24px;font-family:monospace;">Root element #root not found.</div>'
} else {
  try {
    ReactDOM.createRoot(rootEl).render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    )
  } catch (err) {
    rootEl.innerHTML = ''
    const fallback = document.createElement('div')
    fallback.id = 'root-error'
    document.body.appendChild(fallback)
    ReactDOM.createRoot(fallback).render(<ErrorFallback error={err} />)
  }
}
