import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
