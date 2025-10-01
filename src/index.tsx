import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ReactHooks from './ReactHooks'
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ReactHooks />
  </React.StrictMode>
)
