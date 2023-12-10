import { useState } from 'react';
import { useInstrument, useUserAccountData } from "../hooks"
import { useParams } from 'react-router-dom';
import { Button } from "../components/Button";
import { RangeCalendar } from "../components";
import "../styles/ConfirmReservation.css"

export const ConfirmReservation = () => {

  const { id } = useParams()
  const { instrument, image } = useInstrument(id)
  const { user } = useUserAccountData()
  const [rangeValue, setRangeValue] = useState();

  const handlerRangeChange = (value) => {
    const data = value.map(date => date.toISOString().split('T')[0])
    setRangeValue(data);
  };

  return (
    <div className="reservation">
      <div className="reservation__container">
        <h3 className="reservation__title">Confirmación de reserva</h3>
        <div className="reservation__user-info">
          <div className="reservation__user-name">
            <h4>Nombre:</h4>
            <p>{user.name} {user.surname}</p>
          </div>
          <div className="reservation__user-email">
            <h4>Correo:</h4>
            <p>{sessionStorage.getItem("email")}</p>
          </div>
        </div>
        <div className="reservation__instrument-info">
          <div className="reservation__instrument-info__container">
            <h4>Producto</h4>
            <div className="reservation__instrument-name">
              <img src={image} alt={`Imagen del producto`} />
              <p>{instrument.name}</p>
            </div>
          </div>
          <div className="reservation__instrument-detail">
            <h4>Descripcion</h4>
            <p className="reservation__instrument-detail-text">{instrument.detail}</p>
          </div>
          <div className="reservation__instrument-date">

            <input
              id="startDate"
              type="text"
              placeholder="Desde"
              value={
                rangeValue === undefined
                  ? ""
                  : rangeValue[0]
                }
              className="reservation__instrument-date__start"
              readOnly
            />
            <input
              id="startDate"
              type="text"
              placeholder="Hasta"
              value={
                rangeValue === undefined
                  ? ""
                  : rangeValue[1]
                }
              className="reservation__instrument-date__end"
              readOnly
            />
            <RangeCalendar 
              id={id}
              onChange={handlerRangeChange}
            />

          </div>
        </div>
        <div className="reservatioon__actions-buttons">
          <Button
            text={"Volver"}
            route={`/product/detail/${id}`}
          />
          <Button
            text={"Confirmar"}
            color={"red"}
          />
        </div>
      </div>
    </div>
  )
}
