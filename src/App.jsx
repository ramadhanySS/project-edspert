// import './App.css'
// import Navbar from './components/navbar'
import HomePage from './layouts/homePage'
import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DetailPage from './pages/detaiPage';
import CheactOut from './pages/checkoutPage';

const route = createBrowserRouter ([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "detail/:id",
    element: <DetailPage/>
  },
  {
    path: "checkout/:id",
    element: <CheactOut/>
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
