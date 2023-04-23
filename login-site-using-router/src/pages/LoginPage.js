import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-container">
      <form className="form-container">
        <input type="text" placeholder="Email or Username" />
        <input type="text" placeholder="Password" />
      </form>
      <button className=" btn btn-primary">Sign in</button>

      <p className="register-link">
        Not a member ? <Link to="/register"> Register</Link>
      </p>
    </div>
  );
}

export default LoginPage;
