import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { AppBar, Inventory } from "../../Containers";

export const Home = () => {
  const [stats, setStats] = useState([]);
  const [view, setView] = useState(false);

  const getInventoryStats = async () => {
    try {
      const config = {
        method: "GET",
        url: `https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory`,
      };
      const response = await axios(config);
      setStats(response.data?.map((item, i) => ({ id: i, ...item })));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getInventoryStats();
  }, []);

  return (
    <Flex w="100%" flexDir="column" gap={6}>
      <AppBar view={view} setView={setView} />
      <Inventory tableData={stats} view={view} setTableData={setStats} />
    </Flex>
  );
};
