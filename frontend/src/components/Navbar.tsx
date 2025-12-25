import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Monitoring", href: "/monitoring" },
    { name: "Deployments", href: "/deployment" },
    { name: "Analytics", href: "/analytics" },
  ];

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      {/* FULL-WIDTH BAR */}
      <div className="flex h-16 items-center justify-between px-6">
        {/* LEFT */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
            <img src="./src/assets/atlas.png" alt="Logo"
              className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold text-slate-900">
            Atlas
          </span>
        </Link>

        {/* CENTER NAV (DESKTOP) */}
        {user && (
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}

        {/* RIGHT */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">U</span>
                </div>
                <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                    Profile Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden rounded-md p-2 hover:bg-slate-100"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className="h-6 w-6 text-slate-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-2">
          {user &&
            navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100"
              >
                {item.name}
              </Link>
            ))}

          <div className="pt-4 border-t border-slate-200">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100"
                >
                  Profile Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full rounded-md px-3 py-2 text-left text-base font-medium text-red-600 hover:bg-red-50"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md bg-blue-600 px-3 py-2 text-base font-medium text-white hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
