import React from 'react'
import ReactDOM from 'react-dom/client'
const leftPara = React.createElement('p', { id: 'para1' }, 'left para')

const rightPara = React.createElement('p', { id: 'para2' }, 'right para')

const spanTag2 = React.createElement('span', {}, 'This is final span tag')

const spanTag = React.createElement('span', {}, spanTag2)

const mainTitle = React.createElement('h1', { class: 'title' }, spanTag)

const divContent = React.createElement('div', { id: 'content' }, [
  leftPara,
  rightPara,
  mainTitle,
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(divContent)
