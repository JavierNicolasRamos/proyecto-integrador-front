import { useGetInstrumentReviews } from "../hooks/index";
import "../styles/InstrumentReviews.css";

export const InstrumentReviews = ({ id }) => {
  const { reviews } = useGetInstrumentReviews(id);

  return (
    <div className="instrumentReviews">
      <h1 className="instrumentReviewsTitle">Opiniones del producto</h1>
      {Array.isArray(reviews) && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div className="reviewCard" key={index}>
            <div className="scoreStarsContainer">
              {[1, 2, 3, 4, 5].map((starValue) => (
                <div
                  key={starValue}
                  className={
                    review.score >= starValue ? "scoreStar" : "scoreStar scoreStarUnfilled"
                  }
                >
                  <img
                    src="/src/images/Star.svg"
                    alt={`scoreStar${starValue}`}
                  />
                </div>
              ))}
            </div>
            <p>{review.reviewDateTime}</p>
            <p>{review.reviewDescription}</p>
            {index !== reviews.length - 1 && <hr />}
          </div>
        ))
      ) : (
        <p>No hay revisiones disponibles</p>
      )}
    </div>
  );
};
