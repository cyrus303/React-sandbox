import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="login-container">
      <p>Enter Your Details</p>
      <form className="form-container">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Repeat Password" />
      </form>
      <button className="btn btn-primary">Sign Up</button>
      <p className="mt-3">
        Have an account ? <Link to="/login"> Sign In</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
