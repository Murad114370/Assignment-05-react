import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-[0_2px_6px_-2px_rgba(0,0,0,0.15)]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Mobile: Left Hamburger */}
        <button className="md:hidden text-2xl">
          ☰
        </button>

        {/* Logo */}
        <img
          src={Logo}
          alt="Dev Stack"
          className="w-32"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 items-center">
          <li>
            <span className="text-[#DB2777]">
              Home
            </span>
          </li>

          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Right Buttons */}
        <div className="flex gap-2 md:gap-4 items-center">

          <button className="text-sm md:text-base">
            Sign In
          </button>

          <button className="rounded-3xl bg-[#DB2777] px-3 py-1 text-white text-sm md:text-base">
            Sign Up
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Nav;