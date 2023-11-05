import SocialCard from "~/components/Template/SocialCard";
import type { ReactElement } from 'react';

const ContactMe= () => {
    // Define your icons here as React Elements
    const TwitterIcon: ReactElement = (
      // Your Twitter SVG icon HERE
      <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" fill="currentColor" height="20" viewBox="0 0 24 24">
      <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
      </svg></span>
    );
  
    const EmailIcon: ReactElement = (
      // Your Email SVG icon
      <span><svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="20"
      width="20"
    >
      <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" />
    </svg></span>
    );
  
    const GithubIcon: ReactElement = (
      // Your GitHub SVG icon
      <span><svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="20"
      width="20"
      
    >
      <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
    </svg></span>
    );
  
    return (
        
       <div className="flex flex-col items-center p-8 min-h-screen "> {/* This ensures the content is centered vertically and horizontally in the viewport */}
  <h1 className="text-4xl font-bold p-4 mb-6">My Socials</h1> {/* Adjust the margin-bottom (mb-8) as needed */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
       
        <SocialCard
          username="@Lina_VLR"
          service="Twitter"
          href="https://twitter.com/lina_VLR"
          icon={TwitterIcon}
        
          
        />
        <SocialCard
          username="Elina_codes"
          service="Instagram"
          href="https://www.instagram.com/elina_codes/"
          icon={EmailIcon}
        />
        <SocialCard
          username="Elina_Codes"
          service="GitHub"
          href="https://github.com/LinaMahrouch"
          icon={GithubIcon}
        />
      </div>
      </div>
    );
  };
  
  export default ContactMe;