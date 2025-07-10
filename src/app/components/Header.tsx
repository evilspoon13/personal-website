"use client";

import React from 'react';
import Link from 'next/link';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <ul>
            <li>
                <Link href="/">home()</Link>
            </li>
            <li>
                <Link href="/about">about()</Link>
            </li>
            <li>
                <Link href="/projects">projects()</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;