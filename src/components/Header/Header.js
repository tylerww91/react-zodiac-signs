import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <img className="header-img" src="../../astro-chart.gif" />
      <h2>{"What's your sign?"}</h2>
      <img className="header-img" src="../../astro-chart.gif" />
    </header>
  );
}
