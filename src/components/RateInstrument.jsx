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
    <div className="rateInstrumentContainer">
         <div className="scoreStarsContainer">
        {[1, 2, 3, 4, 5].map((starValue) => (
            <div
                key={starValue}
                className={score >= starValue ? "" : "scoreStarUnfilled"}
                onClick={() => setScore(starValue)}
            >
                <img src="/src/images/Star.svg" alt={`scoreStar${starValue}`} />
            </div>
        ))}
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
