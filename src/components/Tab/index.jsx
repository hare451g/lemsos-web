import { useState } from 'react';

// shared
import { Box, Flex } from '../../shared';

// styled
import Pane from './Pane';
import Button from './Button';

function Tab({ children, initialKey }) {
  const [activeKey, setKey] = useState(initialKey);

  return (
    <Box>
      <Flex justifyContent="space-between" as="nav">
        {children.map(({ key }) => (
          <Button isActive={activeKey === key} onClick={() => setKey(key)}>
            {key}
          </Button>
        ))}
      </Flex>
      {children.map(({ props, key }) => (
        <Pane key={key} isActive={activeKey === key}>
          {props.children}
        </Pane>
      ))}
    </Box>
  );
}

export default Tab;
