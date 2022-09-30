import { Outlet } from 'react-router-dom';

import Nav from './nav/Nav';
import classes from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Nav />

      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
