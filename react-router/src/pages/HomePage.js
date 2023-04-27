import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

function HomePage() {
  const handleClick = () => {};

  return (
    <div>
      <h1>Law Society</h1>
      <Link to="/application">Application Form</Link> |
      <Link to="/allApplications"> View All Applications</Link>
      <Outlet />
    </div>
  );
}

export default HomePage;
