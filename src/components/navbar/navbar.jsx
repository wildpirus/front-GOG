import { Link } from "react-router-dom";
import { useEffect } from "react";
export function Navbar() {
  const getUrl = () => {
    const { pathname } = window.location;

    if (pathname === "/") {
      return true;
    }

    return false;
  };
  useEffect(() => {
    getUrl();
  }, []);

  return (
    <nav className="border-2 bg-white text-black w-screen flex items-center justify-between p-4">
      <Link to="/">
        <span className="cursor-pointer hover:opacity-80"> The Guardians of the Globe 🦸🏻</span>
      </Link>
        <ul className="flex flex-row cursor-pointer">
          <Link to="/">
            <li className={`${getUrl() && "underline"} mr-10 hover:opacity-80`}>
              Heroes
            </li>
          </Link>

          <Link to="/villians">
            <li
              className={`${!getUrl() && "underline"} mr-10 hover:opacity-80`}
            >
              Villians
            </li>
          </Link>
        </ul>
    </nav>
  );
}
