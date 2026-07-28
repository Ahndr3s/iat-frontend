// import { Link, NavLink, useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import logo from "../../../public/assets/logo.jpg";
import "./NavbarStyles.css";
import { useAuthStore } from "../../hooks/useAuthStore";

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  // const { status, checkAuthToken, startLogout, user } = useAuthStore();
  const { status, checkAuthToken, user } = useAuthStore();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // const handleShowSearch = () => {
  //   navigate("/SearchPage", {
  //     replace: true,
  //   });
  // };

  useEffect(() => {
    checkAuthToken;
  }, []);

  // const navigate = useNavigate();

  // const onLogout = () => {
  //   startLogout();
  //   navigate("login", {
  //     replace: true,
  //   });
  //   handleShowNavbar();
  // };

  return (
    <nav className="fixed top-0 left-0 right-0 h-[8vh] w-full bg-(--bg-primary) z-1000 flex items-center justify-between px-6 box-border transition-all duration-300">
      <ul className="flex flex-row items-center list-none m-0 p-0 flex-1 h-full">
        <li
          className="flex md:hidden cursor-pointer mr-4"
          onClick={handleShowNavbar}
        >
          <FontAwesomeIcon icon={faBars} size="2x" style={{ color: `#fff` }} />
        </li>

        <li className="flex items-center h-full mr-3">
          <Link to={"home"} className="flex items-center">
            <img
              className="h-10 w-auto object-contain rounded-md"
              src={logo}
              alt="Logo"
            />
          </Link>
        </li>

        <div
          className={`
          fixed md:relative top-[8vh] md:top-0 left-0 h-[92vh] md:h-auto 
          bg-(--bg-primary) md:bg-transparent z-1000 overflow-y-auto md:overflow-visible
          transition-all duration-300 ease-in-out box-border
          ${showNavbar ? "w-67.5 p-6 border-r border-gray-800 md:border-0" : "w-0 md:w-auto overflow-hidden md:overflow-visible"}
          md:flex md:flex-row md:items-center md:p-0 flex-1
        `}
        >
          <ul className="flex flex-col md:flex-row list-none m-0 p-0 w-full md:gap-6 justify-start md:items-center">
            <li className="py-3 md:py-0" onClick={handleShowNavbar}>
              <NavLink
                className={({ isActive }) =>
                  `no-underline transition-opacity text-base ${
                    isActive
                      ? "text-(--text-secondary) opacity-100 font-semibold"
                      : "text-(--text-primary) opacity-75 hover:opacity-100"
                  }`
                }
                to={"/courses"}
              >
                <span>Cursos</span>
              </NavLink>
            </li>

            <li className="py-3 md:py-0" onClick={handleShowNavbar}>
              <NavLink
                className={({ isActive }) =>
                  `no-underline transition-opacity text-base ${
                    isActive
                      ? "text-(--text-secondary) opacity-100 font-semibold"
                      : "text-(--text-primary) opacity-75 hover:opacity-100"
                  }`
                }
                to={"/about"}
              >
                <span>Nosotros</span>
              </NavLink>
            </li>

            <li className="py-3 md:py-0" onClick={handleShowNavbar}>
              <NavLink
                className={({ isActive }) =>
                  `no-underline transition-opacity text-base ${
                    isActive
                      ? "text-(--text-secondary) opacity-100 font-semibold"
                      : "text-(--text-primary) opacity-75 hover:opacity-100"
                  }`
                }
                to={"/projects"}
              >
                <span>Proyectos</span>
              </NavLink>
            </li>

            <li className="py-3 md:py-0" onClick={handleShowNavbar}>
              <NavLink
                className={({ isActive }) =>
                  `no-underline transition-opacity text-base ${
                    isActive
                      ? "text-(--text-secondary) opacity-100 font-semibold"
                      : "text-(--text-primary) opacity-75 hover:opacity-100"
                  }`
                }
                to={"/inspirAccion"}
              >
                <span>InspirAccion</span>
              </NavLink>
            </li>

            <li
              className="py-3 md:py-0 hidden md:block"
              onClick={handleShowNavbar}
            >
              <NavLink
                className={({ isActive }) =>
                  `no-underline transition-opacity text-base ${
                    isActive
                      ? "text-(--text-secondary) opacity-100 font-semibold"
                      : "text-(--text-primary) opacity-75 hover:opacity-100"
                  }`
                }
                to={"/blog"}
              >
                <span>Blog</span>
              </NavLink>
            </li>

            <li className="py-3 md:py-0" onClick={handleShowNavbar}>
              <NavLink
                className={({ isActive }) =>
                  `no-underline transition-opacity text-base ${
                    isActive
                      ? "text-(--text-secondary) opacity-100 font-semibold"
                      : "text-(--text-primary) opacity-75 hover:opacity-100"
                  }`
                }
                to={"/contact"}
              >
                <span>Contacto</span>
              </NavLink>
            </li>

            {status === "Authenticated" && (
              <li className="py-3 md:py-0 text---text-primary) font-medium">
                <span>{user.name}</span>
              </li>
            )}

            {/* Iniciar / Cerrar Sesión empujado automáticamente al extremo derecho solo en escritorio */}
            {/* <li className="py-3 md:py-0 md:ml-auto" onClick={onLogout}>
              <NavLink
                className="text-(--text-primary) no-underline opacity-75 hover:opacity-100 transition-opacity text-base"
                to={"/login"}
              >
                <span>
                  {status === "Authenticated"
                    ? "Cerrar Sesión"
                    : "Iniciar Sesión"}
                </span>
              </NavLink>
            </li> */}
          </ul>
        </div>
      </ul>

      {/* Botón de búsqueda: Alineado limpiamente a la derecha mediante el espacio del flex principal */}
      {/* <div
        className="flex items-center cursor-pointer pl-4"
        onClick={handleShowSearch}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="2x"
          style={{ color: `#fff` }}
        />
      </div> */}
    </nav>
  );
};
