import { useEffect, useState } from "react";

const sections = [ "about","skills", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50
                    bg-black/60 backdrop-blur
                    px-6 py-3 rounded-full
                    border border-gray-800">
      <ul className="flex gap-6 text-sm">
        {sections.map((sec) => (
          <li key={sec}>
            <a
              href={`#${sec}`}
              className={`transition font-medium ${
                active === sec
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
