import { useState } from 'react';
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

function ApplicationPage({ handleUpdate }) {
  const [name, setName] = useState('');
  const [eftNumber, setEftNumber] = useState('');
  const [applicationType, setApplicationType] = useState('PC');
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEftChange = (event) => {
    setEftNumber(event.target.value);
  };

  const handleClick = (event) => {
    console.log(name, applicationType, eftNumber);
    handleUpdate(name, applicationType, eftNumber);
  };

  function onChangeValue(event) {
    setApplicationType(event.target.value);
  }

  return (
    <div>
      <h1>Application Page</h1>
      <form onSubmit={handleClick}>
        <label>
          Enter your name:
          <input type="text" onChange={handleNameChange} value={name} />
        </label>

        <div onChange={onChangeValue}>
          <input
            type="radio"
            value="PC"
            name="applicationType"
            checked={applicationType === 'PC'}
          />
          Practising Certificate
          <input
            type="radio"
            value="QC"
            name="applicationType"
            checked={applicationType === 'QC'}
          />
          Qualifying Certificate
          <input
            type="radio"
            value="SOS"
            name="applicationType"
            checked={applicationType === 'SOS'}
          />
          Service of State
        </div>

        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          Pay by EFT
        </label>

        {checked && (
          <label>
            Enter your EFT Reference Number:
            <input type="text" onChange={handleEftChange} value={eftNumber} />
          </label>
        )}
      </form>
      <Link to="/" onClick={handleClick}>
        Submit
      </Link>{' '}
      |<Link to="/">Back</Link>
    </div>
  );
}

export default ApplicationPage;
