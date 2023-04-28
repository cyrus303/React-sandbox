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

import { BiX } from 'react-icons/bi';

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
    <div className="shadow p-3 mb-5 bg-white rounded">
      <div className="header">
        <h3>Active Applications</h3>
        <Link to="/" class="closebtn">
          <BiX />
        </Link>
      </div>
      <table class="table table-hover table-bordered mt-3">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Application Type</th>
            <th scope="col">reference No</th>
            <th scope="col">Recept Link</th>
          </tr>
        </thead>
        <tbody>{rendredRows}</tbody>
      </table>
    </div>
  );
}

export default Applications;
