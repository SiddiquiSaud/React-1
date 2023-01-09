import React from 'react'
import ReactDOM from 'react-dom/client'
// const leftPara = React.createElement('p', { id: 'para1' }, 'left para')

// const rightPara = React.createElement('p', { id: 'para2' }, 'right para')

// const spanTag2 = React.createElement('span', {}, 'This is final span tag')

// const spanTag = React.createElement('span', {}, spanTag2)

// const mainTitle = React.createElement('h1', { class: 'title' }, spanTag)

// const divContent = React.createElement('div', { id: 'content' }, [
//   leftPara,
//   rightPara,
//   mainTitle,
// ])

const heading = (
  <h1 id='title' key='id1'>
    Hi saud
  </h1>
)
const Heading = () => <h1>Hi All</h1>

const HeaderComponent = () => {
  return (
    <div>
      {Heading()}
      {heading}
      <h1>Hi hadi</h1>
      <h2>Hi Abdullah</h2>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeaderComponent />)
