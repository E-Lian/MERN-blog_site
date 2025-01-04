import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import './App.css';
import Blog from './components/Blog';
import BlogList from './components/BlogList';
import CreateBlog from "./components/CreateBlog";
import EditForm from "./components/EditForm";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import NotFound from './components/NotFound';
import RegisterPage from "./components/RegisterPage";


const Layout = () => (
  <>
    <Navbar />
    <div className="content">
      <Outlet /> {/* renders child route */}
    </div>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />, // Apply the layout for all routes
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <BlogList /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/create', element: <CreateBlog /> },
      { path: '/blog/edit/:blogId', element: <EditForm /> },
      { path: '/blog/:blogId', element: <Blog /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
