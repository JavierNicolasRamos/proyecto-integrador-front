import { useGetAllLikes } from "../hooks/index";
import { Card, Spinner } from "../components";
import "../styles/UserFavs.css";

export const UserFavs = () => {
  const { allLikes, isFetching } = useGetAllLikes();

  return (
    <div className="AccountPanelUserFavs">
      {isFetching && <Spinner />}
      {allLikes.map((instrument) => (
        <Card
          key={instrument.id}
          id={instrument.id}
          name={instrument.name}
          image={instrument.image[0].image}
          score={instrument.score}
          category={instrument.category.name}
          reviewCount={instrument.reviewCount}
        />
      ))}
    </div>
  );
};
