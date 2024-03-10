import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Formulario = ({ alRegistrar, alAlertar }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const validarEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validarContrasena = (contrasena) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(contrasena);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !email || !contrasena || !confirmarContrasena) {
      alAlertar('Todos los campos son obligatorios', 'danger');
      return;
    }

    if (!validarEmail(email)) {
      alAlertar('Por favor ingresa un email válido', 'danger');
      return;
    }

    if (!validarContrasena(contrasena)) {
      alAlertar('La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número', 'danger');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      alAlertar('Las contraseñas no coinciden', 'danger');
      return;
    }

    // Si llegamos aquí, todo está validado correctamente
    alRegistrar(nombre, email, contrasena);
    alAlertar('Registro exitoso', 'success');

    // Restablecemos los campos después del registro
    setNombre('');
    setEmail('');
    setContrasena('');
    setConfirmarContrasena('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresa una contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirma tu contraseña"
          value={confirmarContrasena}
          onChange={(e) => setConfirmarContrasena(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
};

export default Formulario;
