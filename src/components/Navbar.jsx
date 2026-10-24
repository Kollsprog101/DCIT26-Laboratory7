import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `transition ${isActive ? "text-red-400" : "text-slate-300 hover:text-red-300"}`;

  return (
    <nav className="border-b border-slate-800 bg-slate-950 px-6 py-4 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link to="/" className="text-lg font-bold text-red-400">
          Student Portal
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/students" className={linkClass}>Students</NavLink>
          <NavLink to="/faculties" className={linkClass}>Faculty</NavLink>
        </div>
      </div>
    </nav>
  );
}