import { useContext } from 'react';
import NavigationContext from '../context/NavigationContext';

function Route({ path, children }) {
  const { currentPath } = useContext(NavigationContext);

  if (path === currentPath) {
    console.log('inside route');
    return children;
  }
  return null;
}

export default Route;
