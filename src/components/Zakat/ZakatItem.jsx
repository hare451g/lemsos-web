// shared components
import { Box, Card, Divider, Flex, Text } from '../../shared';

function ZakatItem({ key, img, name, handleItemClick }) {
  return (
    <Card
      width="240px"
      m="1rem"
      onClick={() => handleItemClick({ key, img, name })}
      key={key}
    >
      <img src={img} width="100%" style={{ cursor: 'pointer' }} />
      <Divider />
      <Text textAlign="center" fontSize="1.15rem" fontWeight="700">
        {name}
      </Text>
    </Card>
  );
}
export default ZakatItem;
