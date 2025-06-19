import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./layout/Index"
import Home from "./pages/Home"
import Error404 from "./pages/Error404"
import UserProfile from "./pages/UserProfile"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/userProfile" element={<UserProfile/>} />

            </Route>
          </Route>
          <Route path="*" element={<Error404/>}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
