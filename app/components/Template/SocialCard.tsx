
import React from 'react';

interface SocialCardProps {
  username: string;
  service: string;
  href: string;
  icon: JSX.Element; // Expect an icon element to be passed
}

const SocialCard = ({ username, service, href, icon }: SocialCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block p-4 bg-gray-800 bg-opacity-25 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden hover:scale-105 transform transition-transform duration-500"
    >
      <div className="flex items-center space-x-3">
        <div className="text-white text-opacity-75 hover:text-opacity-100 transition-all duration-300">
          {icon}
        </div>
        <div className="text-white font-medium">{username}</div>
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg opacity-0 hover:opacity-50 transition-opacity duration-300"
      ></div>
    </a>
  );
};

export default SocialCard;
