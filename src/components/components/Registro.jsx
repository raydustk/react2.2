import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alerta from './Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Registro = () => {
  const [alerta, setAlerta] = useState({ mensaje: '', variante: '' });

  const actualizarAlerta = (mensaje, variante) => {
    setAlerta({ mensaje, variante });
  };

  const manejarRegistro = (nombre, email, contrasena) => {
    console.log('Usuario registrado:', { nombre, email, contrasena });
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
      <div className="social-login mb-3 d-flex justify-content-center">
          <SocialButton icono={<FontAwesomeIcon icon={faFacebookF} />} alHacerClick={() => alert('Login con Facebook')} />
          <SocialButton icono={<FontAwesomeIcon icon={faTwitter} />} alHacerClick={() => alert('Login con Twitter')} />
          <SocialButton icono={<FontAwesomeIcon icon={faLinkedinIn} />} alHacerClick={() => alert('Login con LinkedIn')} />
      </div>
      <Formulario alRegistrar={manejarRegistro} alAlertar={actualizarAlerta} />
       <Alerta mensaje={alerta.mensaje} variante={alerta.variante} />
      </div>
    </Container>
  );
};

export default Registro;