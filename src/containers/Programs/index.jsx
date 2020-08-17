// shared components
import { Box, Flex } from '../../shared';
import ProgramCard from './ProgramCard';

function Programs({ onProgramClick, programs }) {
  return (
    <Box as="section" name="program cards">
      {programs.map((row, index) => (
        <Flex key={`prog-row-${index}`} flexDirection={['column', 'row']}>
          {row.map(({ content, image, infaqId, title }, colIndex) => (
            <Box m={['0.5rem', '1rem']} width={['100%', '50%']}>
              <ProgramCard
                content={content}
                image={image}
                infaqId={infaqId}
                key={`program-${colIndex + 1}`}
                title={title}
                onClick={onProgramClick}
              />
            </Box>
          ))}
        </Flex>
      ))}
    </Box>
  );
}

export default Programs;
