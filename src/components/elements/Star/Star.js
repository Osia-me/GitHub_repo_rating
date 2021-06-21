import star from './star.png';
import starbw from './starbw.png';
import "./Star.css";

function Star({width, height, starclick, color}) {

  return (
    <div>
      <img
        src={color ? star : starbw}
        width={width}
        height={height}
        alt="Star"
        className="star_icon"
        onClick={starclick}
      />
    </div>
  );
}

export default Star;
