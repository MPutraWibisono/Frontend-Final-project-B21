import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const noFooter = [
    "/auth/login",
    "/auth/register",
    "/auth/otp",
    "/auth/forgot-password",
    "/auth/forgot-otp",
    "/auth/reset-password",
    "/admin/dashboard",
    "/admin/dashboard/kelola-kelas",
  ];

  const shouldShowFooter = noFooter.includes(location.pathname);
  if (shouldShowFooter) {
    return null; // Tidak menampilkan footer untuk path tertentu
  }

  return (
    <>
      <footer className="footer items-center p-4 bg-darkGrayish text-neutral-content px-6">
        <aside className="items-center flex flex-col md:flex-row md:gap-5 md: w-full">
          <div className="w-fit ">
            <Link to={"/"}>
              <img src="./logo.png" alt="Demyu" width="50" />
            </Link>
          </div>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end w-full">
          <Link
            to={"https://github.com/MPutraWibisono/Frontend-Final-project-B21"}
            target="blank"
            className="justify-self-center md:justify-self-end"
          >
            <img
              src="https://github.githubassets.com/assets/github-mark-9be88460eaa6.svg"
              width="20"
              height="20"
              className="d-block"
              loading="lazy"
              decoding="async"
              alt="GitHub mark"
            />
          </Link>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
