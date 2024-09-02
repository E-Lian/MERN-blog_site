import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogList from './components/BlogList';
import CreateBlog from "./components/CreateBlog";
import NotFound from './components/NotFound';
import Blog from './components/Blog';
import EditForm from "./components/EditForm";
import LoginPage from "./components/LoginPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <BlogList/>,
    errorElement: <NotFound/>
  }, 
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/create',
    element: <CreateBlog/>
  }, 
  {
    path: '/blog/edit/:blogId',
    element: <EditForm />
  },
  {
    path: '/blog/:blogId',
    element: <Blog />
  }
]);

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <RouterProvider router={router}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
