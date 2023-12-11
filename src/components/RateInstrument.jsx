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
                <img src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1702168226277-Star.svg" alt={`scoreStar${starValue}`} />
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
