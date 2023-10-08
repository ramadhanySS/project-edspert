// import './App.css'
// import Navbar from './components/navbar'
import HomePage from './layouts/homePage'
import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter ([
  {
    path: "/",
    element: <HomePage/>
  }
])

const  App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={route} />;
    </Provider>
  )
}

export default App
