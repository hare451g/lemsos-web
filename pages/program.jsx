import { useRouter } from 'next/router';
import { CONTENTS_PATH } from '../src/constants/paths';

// containers
import Programs from '../src/containers/Programs';

// shared components
import { Box, Divider, Text } from '../src/shared';

// utils
import { getMDfromFile } from '../src/utils/contents';

export default function Program({ programs }) {
  const router = useRouter();

  const handleProgramClick = (infaqId) => {
    router.push({
      pathname: '/donasi',
      query: {
        infaqId,
      },
    });
  };

  return (
    <Box mx={['0.5rem', '2rem']} my={['1rem', '2rem']}>
      <Box>
        <Text as="h1" fontWeight="400" fontSize="2rem">
          Program
        </Text>
        <Divider />
      </Box>
      <Programs programs={programs} onProgramClick={handleProgramClick} />
    </Box>
  );
}

export async function getStaticProps(context) {
  const path = `${CONTENTS_PATH}/program/`;
  const programs = [
    [
      {
        content: getMDfromFile(`${path}/kebutuhan-santri.md`),
        image: `/images/program/pokok-santri.jpg`,
        title: 'Kebutuhan Pokok Santri',
        infaqId: 1,
      },
      {
        content: getMDfromFile(`${path}/sarana-prasarana.md`),
        image: `/images/program/sarana-prasarana.jpg`,
        title: 'Sarana Prasarana',
        infaqId: 2,
      },
    ],
    [
      {
        content: getMDfromFile(`${path}/infaq-listrik.md`),
        image: `/images/program/infaq-listrik.jpg`,
        title: 'Infaq Listrik',
        infaqId: 3,
      },
      {
        content: getMDfromFile(`${path}/kebutuhan-pokok-guru.md`),
        image: `/images/program/pokok-guru.jpg`,
        title: 'Kebutuhan Pokok Guru',
        infaqId: 4,
      },
    ],
  ];

  return {
    props: { programs }, // will be passed to the page component as props
  };
}
