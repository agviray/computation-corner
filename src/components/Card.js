import Image from 'next/image';

const Card = ({ icon, heading, text }) => {
  return (
    <div class="card">
      <div className="iconContainer">
        <span>
          <Image src={icon.src} alt={icon.alt} />
        </span>
        <h3>{heading}</h3>
        <div className="textContainer">{text}</div>
      </div>
    </div>
  );
};

export default Card;
