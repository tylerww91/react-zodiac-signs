import './Zodiac.css';

export default function Zodiac(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.dates}</p>
      <p>{props.symbol}</p>
    </div>
  );
}
