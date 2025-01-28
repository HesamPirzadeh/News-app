import { BrowserRouter } from "react-router"
import Layout from "./layout/Layout.jsx"
import Router from "./Routes/Router.jsx"

function App() {

  return (
    <>
    <BrowserRouter>
    <Layout>
      <Router/>
    </Layout>
    </BrowserRouter>
      
    </>
  )
}

export default App
