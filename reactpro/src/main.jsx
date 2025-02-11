import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// document.getElementById('root') 是 Javascript 中存取 DOM 的方法
// 這裡是取得 id 為 root 的元素，也就是 index.html 中的 <div id="root"></div>
// 這個元素是我們 React App 的根元素
// ReactDOM.createRoot().render() 將 App 元件渲染到根元素中
// <App /> 來自於 ./App.jsx 中的 export default App，看第三行 import App from './App'

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
