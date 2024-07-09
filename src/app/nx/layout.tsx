import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-screen-md w-full p-4 bg-white-100 h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
