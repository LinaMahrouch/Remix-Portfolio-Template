import React, { ReactElement } from 'react';

// Define an interface for the props
interface SocialCardProps {
  username: string;
  service: string;
  href: string;
  icon: ReactElement; // Assuming the icon is a JSX element, such as an SVG
}

// Define the component 
const SocialCard: React.FC<SocialCardProps> = ({ username, service, href, icon }) => {
  return (
      // This div will contain the card
      <div className="overflow-hidden relative duration-300 border rounded-xl dark:bg-zinc-200 dark:hover:bg-zinc-300 hover:bg-zinc-800 group bg-black hover:border-zinc-400 border-zinc-600 max-w-full h-auto transition-transform hover:scale-105">
      <a target="_blank" className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16" href={href} relgroup-hover:text-white="noreferrer" rel="noreferrer">
        <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200  group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
          {icon}
        </span>
        <div className="z-10 flex flex-col items-center">
        <span className="text-lg sm:text-xl font-medium duration-150 xl:text-3xl dark:text-black text-zinc-200 dark:group-hover:text-slate-800 group-hover:text-white font-display">{username}</span>
      <span className="mt-1 text-xs sm:mt-4 sm:text-sm text-center duration-1000 text-zinc-400 dark:text-black dark:group-hover:text-slate-800 group-hover:text-zinc-200">{service}</span>
        </div>
      </a>
    </div>
  );
};

export default SocialCard;