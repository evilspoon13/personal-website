"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css';

const TSIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ts-icon">
    <rect width="16" height="16" rx="2" fill="#3178c6" />
    <text x="3" y="12" fontSize="9" fontWeight="bold" fill="white" fontFamily="monospace">TS</text>
  </svg>
);

const tabs = [
  { href: '/', label: 'home.tsx' },
  { href: '/about', label: 'about.tsx' },
  { href: '/projects', label: 'projects.tsx' },
];

const breadcrumbMap: Record<string, string> = {
  '/': 'home.tsx',
  '/about': 'about.tsx',
  '/projects': 'projects.tsx',
};

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="vscode-header">
      <div className="tab-bar">
        <div className="tab-bar-left">
          <div className="sidebar-icon" title="Explorer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </div>
        </div>
        <nav className="tabs">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`tab ${isActive ? 'tab-active' : 'tab-inactive'}`}
              >
                <TSIcon />
                <span className="tab-label">{tab.label}</span>
                <span className="tab-close" aria-hidden="true">×</span>
              </Link>
            );
          })}
        </nav>
        <div className="tab-bar-fill" />
      </div>
      <div className="breadcrumb-bar">
        <span className="breadcrumb-item">src</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-item">app</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-item breadcrumb-active">{breadcrumbMap[pathname] || 'page.tsx'}</span>
      </div>
    </header>
  );
};

export default Header;
