import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-black bg-opacity-50 p-4 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold transition-all duration-300 hover:text-blue-400">CodeGen</Link>
        <div>
          <Link to="/" className="text-white mr-4 transition-all duration-300 hover:text-blue-400">Home</Link>
          {isLoggedIn ? (
            <>
              <Link to="/generate" className="text-white mr-4 transition-all duration-300 hover:text-blue-400">Generate Code</Link>
              <button onClick={handleLogout} className="text-white transition-all duration-300 hover:text-red-400">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white mr-4 transition-all duration-300 hover:text-blue-400">Login</Link>
              <Link to="/signup" className="text-white transition-all duration-300 hover:text-green-400">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




