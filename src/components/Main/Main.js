import React from 'react';
import './Main.css';
import Zodiac from '../Zodiac/Zodiac';
import { zodiac } from '../../data';
import background from '../../background.png';

export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((sign) => (
        <Zodiac key={sign.id} name={sign.name} dates={sign.dates} symbol={sign.symbol} />
      ))}
    </main>
  );
}
