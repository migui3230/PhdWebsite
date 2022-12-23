import { Navbar } from "./Navbar";

// create a simple layout component
const Layout = ({ children }) => {
  return (
    <div>
      {/* render the navbar component with a dummy link */}
      <Navbar links={[{ link: "#", label: "Link", links: [] }]} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
