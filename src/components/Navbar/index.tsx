import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { pathname } = useRouter();

  const routes = [
    {
      id: 0,
      name: "Characters",
      route: "/Characters",
    },
    {
      id: 1,
      name: "Episodes",
      route: "/Episodes",
    },
  ];

  return (
    <div className="flex items-center justify-end mr-4">
      <nav>
        <section className="flex my-4 md:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex flex-col items-center justify-between min-h-[250px]">
              {routes.map((route) => (
                <Link href={route.route} key={route.id}>
                  <p
                    className={`font-bold underline ${
                      route.route === pathname ? "text-[#87CD53]" : "text-white"
                    }`}
                  >
                    {route.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <div
          className="hidden lg:flex w-full md:block md:w-auto"
          id="navbar-default"
        >
          <div className="flex flex-col p-4 mt-4 justify-end border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {routes.map((route) => (
              <Link
                href={route.route}
                key={route.id}
                className={`p-2 rounded-md ${
                  route.route === pathname && "bg-[#87CD53]"
                }`}
              >
                <p className={`font-bold text-white`}>{route.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: #000;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
    `}</style>
    </div>
  );
};

export default Navbar;
