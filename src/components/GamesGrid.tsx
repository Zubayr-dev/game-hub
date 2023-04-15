import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
const GamesGrid = () => {
  const { data, error, isloading } = useGames();
  const skelotns = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text> error </Text>}
      <SimpleGrid padding="10px" columns={{ sm: 1, md: 2, lg: 3 }} spacing={3}>
        {isloading &&
          skelotns.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
