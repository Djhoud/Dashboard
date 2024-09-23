import { Link } from 'react-router-dom';
import { navigationsDashboard } from '../lib/data';

const Sidebar = () => {
  return (
    <div className="px-6 py-4">
      <nav className="mt-6">
        {navigationsDashboard.map((nav) => (
          <Link
            key={nav.name}
            to={nav.path || '/'}
            className="text-gray-800 dark:text-white"
            aria-label={nav.name}
          >
            {nav.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
