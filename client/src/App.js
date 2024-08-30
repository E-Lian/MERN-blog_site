import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogList from './components/BlogList';
import CreateBlog from "./components/CreateBlog";
import NotFound from './components/NotFound';

import {createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <BlogList/>,
    errorElement: <NotFound/>
  }, 
  {
    path: '/create',
    element: <CreateBlog/>
  }
]);

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <div class="content">
        <RouterProvider router={router}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
