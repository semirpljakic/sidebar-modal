import React from 'react';
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://github.com/semirpljakic',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: 'https://rs.linkedin.com/in/semir-pljakic-121887233?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F',
    icon: <FaLinkedin />,
  },

  {
    id: 3,
    url: 'https://twitter.com/SemirPljakic',
    icon: <FaTwitter />,
  },
  {
    id: 4,
    url: 'https://sr-rs.facebook.com/semir.pljakic',
    icon: <FaFacebook />,
  },
  {
    id: 5,
    url: 'https://www.buymeacoffee.com/pljakicsemir',
    icon: <FaSketch />,
  },
];
