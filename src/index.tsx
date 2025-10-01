import React from 'react'
import './index.css'
import ReactHooks from './ReactHooks'
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ReactHooks />
  </React.StrictMode>
)
