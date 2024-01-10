import { Divider, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-4 p-4 border-b border-zinc-200">
      <Typography level="title-lg">FE Challenge</Typography>
      <Divider orientation="vertical" />
      <Link to="/">Home</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/models">Models</Link>
    </nav>
  );
};

export default Navbar;
