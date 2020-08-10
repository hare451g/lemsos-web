// shared components
import { Box, Card, Divider, Flex, Text } from '../../../shared';

function CardDeck({
  title = 'no-title',
  contents = [],
  onItemClick = () => {},
}) {
  return (
    <>
      <Box m="24px">
        <Text as="h1" fontSize="2rem" textAlign="center">
          {title}
        </Text>
        <Divider />
      </Box>
      <Flex as="section" flexWrap="wrap" justifyContent="space-evenly">
        {contents.map(({ key, img, name, content }) => (
          <Card width={'240px'} m="1rem" key={key}>
            <img
              src={img}
              alt={name}
              width="100%"
              style={{ cursor: 'pointer' }}
              onClick={() => onItemClick({ key, img, name, content })}
            />
            <Divider />
            <Text
              as="h3"
              textAlign="center"
              fontSize="1.15rem"
              fontWeight="700"
            >
              {name}
            </Text>
          </Card>
        ))}
      </Flex>
    </>
  );
}

export default CardDeck;
