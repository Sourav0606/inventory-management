import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { StatsCard, StatsTable } from "../../Components";
import {
  MdShoppingCart,
  MdRemoveShoppingCart,
  MdCategory,
} from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";

export const Inventory = ({ tableData, view, setTableData }) => {
  const stats = [
    {
      icon: MdShoppingCart,
      title: "Total product",
      stats: tableData.length,
    },
    {
      icon: RiExchangeDollarLine,
      title: "Total store value",
      stats: tableData.reduce(
        (total, item) => total + parseFloat(item.value.replace("$", "")),
        0
      ),
    },
    {
      icon: MdRemoveShoppingCart,
      title: "Out of stocks",
      stats: tableData.filter((item) => item.quantity === 0).length,
    },
    {
      icon: MdCategory,
      title: "No of Category",
      stats: new Set(tableData.map((item) => item.category)).size,
    },
  ];

  return (
    <Flex flexDir="column" gap={6} px={4}>
      <Heading>Inventory Stats</Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {stats?.map((item, i) => (
          <GridItem key={i}>
            <StatsCard {...item} />
          </GridItem>
        ))}
      </Grid>
      <StatsTable
        tableData={tableData}
        view={view}
        setTableData={setTableData}
      />
    </Flex>
  );
};
