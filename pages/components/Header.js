import Link from 'next/link';

const Header = ({ currentUser }) => {
  console.log(currentUser);
  const links = [
    !currentUser ? { label: 'Sign In', href: '/auth/signin' } : null,
    !currentUser ? { label: 'Sign Up', href: '/auth/signup' } : null,
    currentUser ? { label: 'Sign Out', href: '/auth/signout' } : null,
  ].filter((link) => link);

  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        Ticketing
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">
          {links.map((link) => (
            <li className="nav-item" key={link.href}>
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
