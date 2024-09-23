import React from 'react';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';

export const navigations = [
  {
    name: 'Home',
    hash: '/',
  },
  {
    name: 'Sobre',
    hash: '/about',
  },

];

export const navigationsDashboard = [
  {
    name: '',
    icon: React.createElement(FaHome),
    path: '/dashboard',
  },
  {
    name: '',
    icon: React.createElement(FaSignOutAlt),
    action: 'logout',
  },
];

export const links = [
  {
    name: 'Home',
    hash: '/',
  },
  {
    name: 'About',
    hash: '/about',
  },
  {
    name: 'Login',
    hash: '/login',
  },
  {
    name: 'Dashboard',
    hash: '/dashboard',
  },
];