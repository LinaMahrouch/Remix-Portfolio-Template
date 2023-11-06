import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

// This file probably shouldn't exits / have all these components

export const NavbarMenuItem = ({
  children,
  to,
  activeExtraClass,
}: {
  children: ReactNode;
  to: string;
  activeExtraClass: string;
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `bg-teal-50 border-violet-500 dark:text-slate-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${activeExtraClass}`
          : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-indigo-900 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:text-white dark:hover:bg-neutral-600'
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export const NavbarItem = ({
  children,
  to,
}: {
  children: ReactNode;
  to: string;
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'border-slate-900    h-full inline-flex items-center px-1 pt-1 border-b-2  font-semibold'
          : 'border-transparent text-black   dark:hover:bg-zinc-700 inline-flex items-center px-1 pt-1 border-b-2  font-semibold '
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export const GitHubButton = () => {
  return (
    <button aria-label="Check my GitHub" >
      <a href="https://github.com/LinaMahrouch" target="_blank" rel="noreferrer">
        <motion.svg
          viewBox="0 0 16 16"
          fill="currentColor"
          height="1em"
          width="1em"
          className="w-6 h-6 "
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
  );
};

export const MenuButtonIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      {isOpen ? (
        <svg
          aria-label={isOpen ? "Close menu" : "Open menu"}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      )}
    </>
  );
};
