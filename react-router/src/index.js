import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseid" element={<CourseParam />} />
        </Route>
        <Route path="bundle" element={<Bundle />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

function CourseParam() {
  const { courseid } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard', { state: courseid });
  };

  return (
    <div>
      <h1>URL Param is: {courseid} </h1>
      <button onClick={handleClick} className="btn btn-warning">
        Price
      </button>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1>info that i carried here: {location.state}</h1>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Route</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All the courses are listed here</h4>
      <Link className="btn btn-success" to="/learn/courses">
        courses
      </Link>
      |
      <Link className="btn btn-primary" to="/learn/bundle">
        bundle
      </Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  const courseList = ['React', 'Angular', 'Vue', 'NodeJs', 'DinoJs'];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Courses List</h1>
      <h4>Courses Card</h4>

      <p>More test</p>
      <Link to={`/learn/courses/${randomCourseName}`}>{randomCourseName}</Link>
      <Outlet />
    </div>
  );
}

function Bundle() {
  return (
    <div>
      <h1>Bundle List</h1>
      <h4>Bundle Card</h4>
    </div>
  );
}
