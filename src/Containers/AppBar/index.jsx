import { Divider, Flex, Icon, Switch, Text } from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";

export const AppBar = ({ view, setView }) => {
  return (
    <Flex
      w="100%"
      gap={2}
      alignItems="center"
      justifyContent="flex-end"
      p={4}
      borderBottom="0.5px solid grey"
    >
      <Text>admin</Text>
      <Switch isChecked={view} onChange={() => setView(!view)} />
      <Text>user</Text>
      <Divider orientation="vertical" h="30px" mx={4} />
      <Icon as={MdLogout} h="18px" w="18px" />
    </Flex>
  );
};
