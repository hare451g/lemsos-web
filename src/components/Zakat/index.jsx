// shared components
import { Box, Card, Divider, Flex, Text } from '../../shared';

function Zakat({ types = [], onZakatClick = () => {} }) {
  return (
    <>
      <Box m="24px">
        <Text as="h1" fontSize="2rem" textAlign="center">
          ZAKAT
        </Text>
        <Divider />
      </Box>
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        {types.map((type) => (
          <Card
            width="240px"
            m="1rem"
            onClick={() => onZakatClick(type)}
            key={type.key}
          >
            <img src={type.img} width="100%" />
            <Divider />
            <Text textAlign="center" fontSize="1.15rem" fontWeight="700">
              {type.name}
            </Text>
          </Card>
        ))}
      </Flex>
    </>
  );
}
export default Zakat;
