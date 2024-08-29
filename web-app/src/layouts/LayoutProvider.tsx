import { Outlet } from 'react-router-dom';

import RootLayout from './RootLayout';

// provides root level layouts
const LayoutProvider = () => {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};
export default LayoutProvider;
