import "../styles/RateInstrument.css";

export const RateInstrument = ({
  presentInstrumentId,
  email,
  reviewDescription,
  setReviewDescription,
  score,
  setScore,
}) => { 
    return (
    <div>
        <div className="scoreStarsContainer">
        <div className="scoreStar">⭐</div>
        </div>

    <label htmlFor="reviewDescription"></label>
          <textarea
            id="reviewDescription"
            type="text"
            placeholder="Contanos qué te pareció..."
            value={reviewDescription}
            onChange={(e) => setReviewDescription(e.target.value)}
          />





  </div>
    )
};
