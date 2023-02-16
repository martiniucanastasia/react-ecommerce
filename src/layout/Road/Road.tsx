import { ActiveRoad, RoadStyled as R } from "./RoadStyled";
import { GlobalContainer } from "../../styles/global";

interface RoadProps {
  pageName: string;
  pageUrl: string;
}

export const Road = ({ pageName, pageUrl }: RoadProps) => {
  return (
    <R.Background>
      <GlobalContainer>
        <R.Title>{pageName}</R.Title>
        <R.Road to="/">Home</R.Road>
        {pageName && (
          <>
            <ActiveRoad to={pageUrl}>{pageName}</ActiveRoad>
          </>
        )}
      </GlobalContainer>
    </R.Background>
  );
};
