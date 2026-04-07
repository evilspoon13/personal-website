"use client";

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CodeBackground from './components/CodeBackground';
import CursorGlow from './components/CursorGlow';
import LineNumbers from './components/LineNumbers';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="overflow-hidden">
        <CodeBackground />
        <CursorGlow />
        <div className="app">
          <Header />
          <div className="editor-layout">
            <LineNumbers />
            <main className="main-content editor-content">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
