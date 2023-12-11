import { useEffect, useState } from 'react';
import { useHandlerResize, useInstrument, usePostBooking, useUserAccountData } from "../hooks"
import { useParams } from 'react-router-dom';
import { Button } from "../components/Button";
import { RangeCalendar } from "../components";
import "../styles/ConfirmReservation.css"

export const ConfirmReservation = () => {

  const { id } = useParams()
  const { instrument, image } = useInstrument(id)
  const { user } = useUserAccountData()
  const [rangeValue, setRangeValue] = useState([])
  const initialFormData = {
    bookingDto: {
      bookingStart: rangeValue[0],
      bookingEnd: rangeValue[1],
      activeBooking: true
    },
    buyerDto: {
      email: sessionStorage.getItem("email") || ''
    },
    instrumentDto: {
      id: id || ''
    }
  };
  let [formData, setFormData] = useState(initialFormData)
  const { handlerConfirm } = usePostBooking()

  // useEffect(() => {
  //   setFormData({
  //     ...formData,
  //     bookingDto: {
  //       bookingStart: rangeValue[0],
  //       bookingEnd: rangeValue[1],
  //       activeBooking: true
  //     }
  //   });
  // }, [rangeValue]);

  const handlerRangeChange = (value) => {
    const data = value.map(date => date.toISOString().split('T')[0])
    setRangeValue(data)
  };

  const handlerSubmit = () => {
    console.log(rangeValue[0], rangeValue[1])
    setFormData({
      ...formData,
      bookingDto: {
        bookingStart: rangeValue[0],
        bookingEnd: rangeValue[1],
        activeBooking: true
      }
    });
    console.log(first)
    handlerConfirm(formData)
  }

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
            <RangeCalendar id={id} onChange={handlerRangeChange} size={200}/>
            <div className="reservation__instrument-date__container">
              <div className="reservation__instrument-date__start">{rangeValue[0] === undefined ? 'Desde' : rangeValue[0]}</div>
              <div className="reservation__instrument-date__end">{rangeValue[1] === undefined ? 'Hasta' : rangeValue[1]}</div>
              {console.log(rangeValue[0], rangeValue[1])}
            </div>
          </div>
        </div>
        <div className="reservation__actions-buttons">
          <Button
            text={"Volver"}
            route={`/product/detail/${id}`}
            color={"grey"}
          />
          <button
            className='btn red'
            onClick={handlerSubmit}
           >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}
