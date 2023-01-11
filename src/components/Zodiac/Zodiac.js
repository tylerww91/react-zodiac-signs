import './Zodiac.css';

export default function Zodiac(props) {
  const handleClick = () => {
    const div = document.getElementById(`${props.id}`);
    div.classList.toggle('zoom');
  };
  return (
    <div className="zodiac-card" id={props.id} onClick={handleClick}>
      <img src={`/zodiac/${props.name}.png`} />
      <h2>{props.name}</h2>
      <p>{props.dates}</p>
    </div>
  );
}
