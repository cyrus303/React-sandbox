import HomePage from './pages/HomePage';
import ApplicationPage from './pages/ApplicationPage';
import Applications from './components/Applications';

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
import { useState } from 'react';

function App() {
  const [applicationData, setApplicationData] = useState([
    { name: 'sachin', applicationType: 'PC', reference: 111111 },
    { name: 'Mahesh', applicationType: 'SOS', reference: 222222 },
    { name: 'Roopa', applicationType: 'QC', reference: 333333 },
    { name: 'Madhu', applicationType: 'QC', reference: 444444 },
    { name: 'Hulamani', applicationType: 'PC', reference: 555555 },
  ]);

  const handleUpdate = (name, applicationType, eftNumber) => {
    const updatedData = [
      ...applicationData,
      { name, applicationType, reference: eftNumber },
    ];
    setApplicationData(updatedData);
  };

  // console.log(applicationData);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route
              path="/allApplications"
              element={<Applications data={applicationData} />}
            />
          </Route>
          <Route
            path="/application"
            element={<ApplicationPage handleUpdate={handleUpdate} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
