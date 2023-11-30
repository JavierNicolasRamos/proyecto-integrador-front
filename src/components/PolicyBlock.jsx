import "../styles/policyBlock.css";

export const PolicyBlock = () => {
  return (
    <div className="policyBlock">
      <h1>Políticas de uso</h1>
      <div className="cardContainer">
        <section className="policyCard">
          <h2>FAQs</h2>
          <h3>¿Cómo crear una cuenta?</h3>
          <p>
            Para crear una cuenta se puede seleccionar al opción “crear cuenta”
            en la esquina superior derecha de la pantalla de inicio.
          </p>
          <h3>¿Por cuánto tiempo puedo reservar?</h3>
          <p>
            Las reservas pueden realizarse por un tiempo máximo de 90 días
            corridos desde la fecha de confirmación.
          </p>
          <h3>¿Cómo se confirma la reserva?</h3>
          <p>
            La confirmación de tu reserva es enviada al mail que ingresaste al
            momento de crear la cuenta.
          </p>
        </section>

        <section className="policyCard">
          <h2>Requisitos particulares</h2>

          <p>Enviar fotos claras por mail musicrental@musicrental.com.ar</p>
          <p>DNI (ambas caras).</p>
          <p>
            BOLETA DE UN SERVICIO a tu nombre, de luz / gas / teléfono / tarjeta
            / etc.
          </p>
          <h2 className="requisitosProductoras">Requisitos productoras </h2>
          <p>CHEQUE EN GARANTIA x el valor del alquiler</p>
          <p>DATOS PARA EL CHEQUE consultar por mail</p>
        </section>

        <section className="policyCard">
          <h2>Métodos de pago</h2>

          <div className="payMethod">
            <img src="/src/images/efectivo.svg" alt="efectivo" />
            <p>Efectivo</p>
          </div>
          <div className="payMethod">
            <img src="/src/images/transfBancaria.svg" alt="transfBancaria" />
            <p>Transferencia</p>
          </div>
          <div className="payMethod">
            <img src="/src/images/mercadoPago.svg" alt="mercadoPago" />
          </div>
        </section>
      </div>
    </div>
  );
};
