import ModalPage from '../pages/ModalPage';

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

function Applications({ data }) {
  console.log('from application page');
  console.log(data);

  const rendredRows = data.map((row) => {
    return (
      <tr key={row.name}>
        <td>{row.name}</td>
        <td>{row.applicationType}</td>
        <td>{row.reference}</td>
        <td>
          <ModalPage data={row} />
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h3>All Applications</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Application Type</th>
            <th>reference</th>
            <th>link</th>
          </tr>
        </thead>
        <tbody>{rendredRows}</tbody>
      </table>
      <Link to="/">Close</Link>
    </div>
  );
}

export default Applications;
