import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen h-fit">
      <div className="max-w-screen-md w-full bg-white-100 min-h-screen h-fit">
        {children}
      </div>
    </div>
  );
};

export default Layout;
