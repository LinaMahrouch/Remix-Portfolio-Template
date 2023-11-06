import { Disclosure } from "@headlessui/react";
import DarkThemeButton from "./DarkThemeButton";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { GitHubButton, MenuButtonIcon, NavbarMenuItem } from "./NavbarPartials";

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

export default function TemNavbar() {
  return (
    <>
      <Disclosure as="header">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-screen-xl px-6 dark:text-white">
              <div className="flex justify-between items-center py-4">
                <div>
                  <Link to="/" className="text-3xl font-bold">
                    YourName
                  </Link>
                </div>
                <div className="hidden sm:flex space-x-8 items-center">
                  {/*navlink gives an active state*/}
                  <nav className="flex justify-center space-x-10 py-4">
                    <a
                      href="/blog"
                      className="text-black font-semibold dark:text-white"
                    >
                      Articles
                    </a>
                    <a
                      href="/projects"
                      className="text-black font-semibold dark:text-white"
                    >
                      Projects
                    </a>
                    <a
                      href="/Contactme"
                      className="text-black font-semibold dark:text-white"
                    >
                      Contact Me
                    </a>
                  </nav>

                  {/*switch between dark and light mode*/}
                  <DarkThemeButton />

                  <button>
                    <a href="https://github.com/LinaMahrouch" target="_blank" rel="noreferrer" aria-label="View GitHub Profile">
                      <motion.svg
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        className="w-6 h-6  "
                        whileHover="hover"
                        variants={imageVariants}
                        initial="initial"
                      >
                        <motion.path
                          d="M8 .198a8 8 0 00-2.529 15.591c.4.074.547-.174.547-.385 0-.191-.008-.821-.011-1.489-2.226.484-2.695-.944-2.695-.944-.364-.925-.888-1.171-.888-1.171-.726-.497.055-.486.055-.486.803.056 1.226.824 1.226.824.714 1.223 1.872.869 2.328.665.072-.517.279-.87.508-1.07-1.777-.202-3.645-.888-3.645-3.954 0-.873.313-1.587.824-2.147-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.201.82A7.672 7.672 0 018 4.066c.68.003 1.365.092 2.004.269 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.079 2.117.513.56.823 1.274.823 2.147 0 3.073-1.872 3.749-3.653 3.947.287.248.543.735.543 1.481 0 1.07-.009 1.932-.009 2.195 0 .213.144.462.55.384A8 8 0 008.001.196z"
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 2 }}
                        />
                      </motion.svg>
                    </a>
                  </button>
                </div>
                <div className="sm:hidden flex items-center space-x-4">
                  <DarkThemeButton />
                  <GitHubButton />

                  <Disclosure.Button className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset">
                    <MenuButtonIcon isOpen={open} />
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden ">
              <div className="px-6 pt-2 pb-3 space-y-1 font-semibold text-black">
                <NavbarMenuItem
                  to="/blog"
                  activeExtraClass="font-semibold text-black bg-zinc-500"
                >
                  Articles
                </NavbarMenuItem>
                <NavbarMenuItem to="/projects" activeExtraClass=" font-semibold text-black bg-zinc-500">
                  Projects
                </NavbarMenuItem>
                <NavbarMenuItem to="/contactme" activeExtraClass="font-semibold text-black bg-zinc-500 ">
                  Contact Me
                </NavbarMenuItem>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
