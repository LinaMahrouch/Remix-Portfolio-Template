
import React from 'react';
import SocialCard from '~/components/Template/SocialCard';


// Import or define your icons here
const TwitterIcon = <span>TwitterIcon</span>; // Replace with actual Twitter icon
const EmailIcon = <span>EmailIcon</span>;     // Replace with actual Email icon
const GithubIcon = <span>GithubIcon</span>;   // Replace with actual GitHub icon

const ContactMe = () => {
  return (
    <div className="space-y-4">
      <SocialCard
        username="@Lina_VLR"
        service="Twitter"
        href="https://twitter.com/lina_VLR"
        icon={TwitterIcon}
      />
      <SocialCard
        username="dev@chronark.com"
        service="Email"
        href="mailto:dev@chronark.com"
        icon={EmailIcon}
      />
      <SocialCard
        username="chronark"
        service="GitHub"
        href="https://github.com/chronark"
        icon={GithubIcon}
      />
    </div>
  );
};

export default ContactMe;
