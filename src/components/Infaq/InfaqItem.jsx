import { useState } from 'react';

// shared components
import { Button, Card, Divider, Flex, Text } from '../../shared';

function InfaqItem({ img, title, content }) {
  const [isExpanded, setExpanded] = useState(false);

  const cardProps = isExpanded
    ? {
        width: '100%',
      }
    : {
        width: '240px',
      };

  return (
    <Card
      width={cardProps.width}
      m="1rem"
      onClick={() => setExpanded(!isExpanded)}
    >
      <img src={img} alt={title} width="100%" />
      <Divider />
      <Text as="h3" textAlign="center" fontSize="1.15rem" fontWeight="700">
        {title}
      </Text>
      {isExpanded && (
        <Flex flexDirection="column">
          <Text my="2rem" fontSize="1.25rem" lineHeight="1.5rem">
            {content}
          </Text>
          <Button color="primary">{title}</Button>
        </Flex>
      )}
    </Card>
  );
}

export default InfaqItem;
