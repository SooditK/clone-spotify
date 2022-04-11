import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundImage,
}) => {
  return (
    <Box
      height="100%"
      overflowX="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
        <Flex padding="20px">
          <Image
            boxSize="160px"
            boxShadow="2xl"
            src={image}
            borderRadius={roundImage ? "100%" : "3px"}
          />
          <Box padding="20px" lineHeight="50px" color="white">
            <Text fontSize="x-small" fontWeight="bold" casing="uppercase">
              {subtitle}
            </Text>
            <Text fontSize="6xl">{title}</Text>
            <Text fontSize="sm">{description}</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default GradientLayout;
