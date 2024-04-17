import { Card, Flex, Icon, Text } from "@chakra-ui/react";

export const StatsCard = ({ icon, title, stats }) => {
  return (
    <Card p={4}>
      <Flex gap={6}>
        <Icon as={icon} h="24px" w="24px" />
        <Flex flexDir="column">
          <Text fontSize="14px">{title}</Text>
          <Text fontSize="24px" fontWeight={700}>
            {stats}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};
