import { CONTENTS_PATH } from '../src/constants/paths';

// shared components
import { Box, Card, Divider, Flex, Text } from '../src/shared';

// layout
import MainLayout from '../src/layouts/MainLayout';

// utils
import { getMDfromFile } from '../src/utils/contents';

export default function Program({ articles }) {
  return (
    <MainLayout>
      <Box as="section" name="program header" m="16px" mb="8px">
        <Text as="h1" fontSize="2.5rem" fontWeight="400">
          Program
        </Text>
      </Box>
      <Box as="section" name="program cards">
        {articles.map((row, index) => (
          <Flex key={`prog-row-${index}`}>
            {row.map(({ content, image, title }, colIndex) => (
              <Flex
                flexDirection="column"
                key={`prog-row-${index}-col-${colIndex}`}
                width="50%"
                my="24px"
                mx="12px"
              >
                <Card minHeight="240px">
                  <Text as="h3" fontSize="1.25rem">
                    {title}
                  </Text>
                  <Divider />
                  <Text fontSize="1.15rem" lineHeight="1.5rem">
                    {content}
                  </Text>
                </Card>
              </Flex>
            ))}
          </Flex>
        ))}
      </Box>
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  const path = `${CONTENTS_PATH}/program/`;
  const articles = [
    [
      {
        title: 'Infaq Listrik',
        content: getMDfromFile(`${path}/infaq-listrik.md`),
        image: `/images/lemsos-logo.jpg`,
      },
      {
        title: 'Kebutuhan Pokok Guru',
        content: getMDfromFile(`${path}/kebutuhan-pokok-guru.md`),
        image: `/images/lemsos-logo.jpg`,
      },
    ],
    [
      {
        title: 'Kebutuhan Pokok Santri',
        content: getMDfromFile(`${path}/kebutuhan-santri.md`),
        image: `/images/lemsos-logo.jpg`,
      },
      {
        title: 'Sarana Prasarana',
        content: getMDfromFile(`${path}/sarana-prasarana.md`),
        image: `/images/lemsos-logo.jpg`,
      },
    ],
  ];

  return {
    props: { articles }, // will be passed to the page component as props
  };
}
