import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Text,
  Tag,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdEdit, MdRemoveRedEye, MdDelete } from "react-icons/md";
import { EditDialog } from "../EditDialog";

export const StatsTable = ({ tableData, view, setTableData }) => {
  const [editDialog, setEditDialog] = useState({ open: false, data: null });
  const [disabledRows, setDisabledRows] = useState([]);

  const handleEyeClick = (id) => {
    setDisabledRows((prevDisabledRows) => {
      if (prevDisabledRows.includes(id)) {
        return prevDisabledRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevDisabledRows, id];
      }
    });
  };

  const handleDelete = (id) => {
    const updatedData = tableData.filter((item) => item.id !== id);
    setTableData(updatedData);
  };

  return (
    <>
      <TableContainer
        w="100%"
        h="100%"
        overflowY="scroll"
        border="1px solid gray"
        borderRadius={8}
      >
        <Table variant="simple">
          <Thead sx={{ position: "sticky", top: 0, zIndex: 900 }}>
            <Tr sx={{ position: "sticky", top: 0 }}>
              {["Name", "Category", "Price", "Quantity", "Value", "Action"].map(
                (item, i) => (
                  <Th key={i} sx={{ position: "sticky", top: 0 }}>
                    <Tag>
                      <Text fontWeight="700">{item}</Text>
                    </Tag>
                  </Th>
                )
              )}
            </Tr>
          </Thead>
          <Tbody>
            {tableData?.map((item, i) => {
              const isDisabled = disabledRows.includes(item.id);
              return (
                <Tr key={i}>
                  <Td>
                    <Text fontSize="12px">{item.name}</Text>
                  </Td>
                  <Td>
                    <Text fontSize="12px">{item.category}</Text>
                  </Td>
                  <Td>
                    <Text fontSize="12px">{item.price}</Text>
                  </Td>
                  <Td>
                    <Text fontSize="12px">{item.quantity}</Text>
                  </Td>
                  <Td>
                    <Text fontSize="12px">{item.value}</Text>
                  </Td>

                  <Td>
                    <Flex gap={1} alignItems="center">
                      <IconButton
                        onClick={() =>
                          setEditDialog({ open: true, data: item })
                        }
                        size="sm"
                        variant="icon"
                        icon={<MdEdit />}
                        isDisabled={view || isDisabled}
                        color="green.400"
                      />
                      <IconButton
                        onClick={() => handleEyeClick(item.id)}
                        size="sm"
                        variant="icon"
                        icon={<MdRemoveRedEye />}
                        color="purple.200"
                        isDisabled={view}
                      />
                      <IconButton
                        onClick={() => handleDelete(item.id)}
                        size="sm"
                        variant="icon"
                        icon={<MdDelete />}
                        color="red.600"
                        isDisabled={view}
                      />
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <EditDialog
        isOpen={editDialog.open}
        data={editDialog.data}
        onClose={() => setEditDialog({ open: false, data: null })}
        tableData={tableData}
        setTableData={setTableData}
      />
    </>
  );
};
