import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false } }
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch(error, info) { console.error('ErrorBoundary caught:', error, info) }
  render() { return this.state.hasError ? <div role="alert">Something went wrong.</div> : this.props.children }
}
