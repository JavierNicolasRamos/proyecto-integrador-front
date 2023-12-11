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
  const { divRef, divSize } = useHandlerResize()
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
  const { handlerConfirm, isFetching } = usePostBooking()

  useEffect(() => {
    setFormData({
      ...formData,
      bookingDto: {
        bookingStart: rangeValue[0],
        bookingEnd: rangeValue[1],
        activeBooking: true
      }
    });
  }, [rangeValue]);

  const handlerRangeChange = (value) => {
    const data = value.map(date => date.toISOString().split('T')[0])
    setRangeValue(data)
  };

  const handlerSubmit = () => {
    handlerConfirm(formData)
  }

  return (
    <div className="reservation">
      <div className="reservation__container">
        <h3 className="reservation__title">Confirmación de reserva</h3>
        <div className="reservation__user-info">
          <div className="reservation__user-name">
            <p>{user.name} {user.surname}</p>
          </div>
          <div className="reservation__user-email">
            <p>{sessionStorage.getItem("email")}</p>
          </div>
        </div>
        <h2 className="reservation__instrument-name">{instrument.name}</h2>
        <div className="reservation__instrument-info">
            <div className="reservation__instrument-info__container">
              <img className="reservation__instrument-info__image"src={image} alt={`Imagen del producto`} />
              <p className="reservation__instrument-info__text">{instrument.detail}</p>
            </div>
            <div className="reservation__instrument-info__date" ref={divRef}>
              <RangeCalendar id={id} onChange={handlerRangeChange} size={divSize <= 180 ? 180 : divSize}/>
              <div className="reservation__instrument-date__start">{rangeValue[0] === undefined ? 'Desde' : rangeValue[0]}</div>
              <div className="reservation__instrument-date__end">{rangeValue[1] === undefined ? 'Hasta' : rangeValue[1]}</div>
            </div>
        </div>
            { 
              !isFetching 
              ? (
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
              ):(
                <p className="reservation__message">Creando la reserva, aguarde </p>
              )  
            }
      </div>
    </div>
  )
}
