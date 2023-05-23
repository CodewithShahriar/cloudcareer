import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Statistics from './components/Statistics'
import Blogs from './components/Blogs'
import AppliedJobs from './components/AppliedJobs'
import StartApplying from './components/StartApplying'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs />
      },
      {
        path: '/startApplying',
        element: <StartApplying />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
