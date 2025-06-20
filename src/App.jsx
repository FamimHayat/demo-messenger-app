import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./layout/Index"
import Home from "./pages/Home"
import Error404 from "./pages/Error404"

import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import MyProfile from "./pages/MyProfile"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/myProfile" element={<MyProfile/>} />

            </Route>
          </Route>
          <Route path="*" element={<Error404/>}></Route>
          <Route path="/signUp" element={<SignUp/>}></Route>
          <Route path="/signIn" element={<SignIn/>}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
