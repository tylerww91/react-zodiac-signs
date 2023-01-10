import './Zodiac.css';

export default function Zodiac(props) {
  return (
    <div className="zodiac-card">
      <h2>{props.name}</h2>
      <p>{props.dates}</p>
      <img src={`/zodiac/${props.name}.png`} />
    </div>
  );
}
