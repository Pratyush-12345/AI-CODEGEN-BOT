import { useLocation } from 'react-router-dom';
import botImage from '../assets/bot-removebg-preview.png';

const Background = () => {
  const location = useLocation();

  return (
    <div className="background">
      <div className="image-wrapper">
        <img src={botImage} alt="Bot" className="floating-bot" />
      </div>
    </div>
  );
};

export default Background;








