import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import 'whatwg-fetch'
import './styles/App.scss'
import './styles/github.scss'
import './styles/styles.scss'
import Link, { listLink } from './Linktomd'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: null,
      idActif: ''
    }
    // this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  saveStateToLocalStorage = () => {
    // localStorage.setItem('state', JSON.stringify(this.state))
    localStorage.setItem('post', this.state.post)
    localStorage.setItem('id', this.state.idActif)
  }


  handleLinkClick(item) {
    if (!item.component) {
      fetch(`./md_files/${item.link}`)
        .then(res => res.text())
        .then(md => this.setState({ post: md }, this.saveStateToLocalStorage))
    } else {
      this.setState({ post: null })
    }

    // add link id to state then to localStorage
    this.setState({ idActif: item.id }, this.saveStateToLocalStorage)
  }

  render() {
    const { post } = this.state ? this.state : localStorage.getItem('post')
    const currentId = this.state.idActif !== '' ? this.state.idActif : parseInt((localStorage.getItem('id')))
    const currentItem = listLink.find(item => item.id === currentId)
    const ActiveComponent = currentItem && currentItem.component
    // console.log(post ? 'true' : localStorage.getItem('post'))
    return (
      <div className="container">
        <Link
          onClick={(item) => { this.handleLinkClick(item) }}
          id={currentId}
        />
        <div className="markdown-body">
          {ActiveComponent
            ? <ActiveComponent />
            : <ReactMarkdown>{post ? post : localStorage.getItem('post')}</ReactMarkdown>}
        </div>
      </div>
    )
  }
}

export default App
