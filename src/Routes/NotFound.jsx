import "../styles/NotFound.css";

export const NotFound = ({code, text}) => {
  return (
    <div className="NotFound">
      <img src="/src/images/404NotFound.svg" alt="Error" />
      <h1>#{code}</h1>
      <h1>{text}</h1>
    </div>
  )
};