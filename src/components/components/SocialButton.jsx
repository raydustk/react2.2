import { Button } from 'react-bootstrap';

const SocialButton = ({ icono, alHacerClick }) => {
  return (
    <Button onClick={alHacerClick} variant="outline-primary" className="mr-2">
      {icono}
    </Button>
  );
};

export default SocialButton;