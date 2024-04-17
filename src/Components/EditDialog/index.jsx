import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

export const EditDialog = ({
  isOpen,
  onClose,
  data,
  tableData,
  setTableData,
}) => {
  const [formData, setFormData] = useState({
    category: data?.category || "",
    price: data?.price || "",
    quantity: data?.quantity || "",
    value: data?.value || "",
  });

  useEffect(() => {
    if (isOpen && data) {
      console.log(data);
      setFormData({
        category: data?.category || "",
        price: data?.price || "",
        quantity: data?.quantity || "",
        value: data?.value || "",
      });
    }
  }, [isOpen, data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const updatedTableData = tableData.map((item) =>
      item.id === data.id ? { ...item, ...formData } : item
    );
    setTableData(updatedTableData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex flexDir="column">
            <Text>Edit product</Text>
            <Text fontSize="12px" fontWeight={400}>
              {data?.name}
            </Text>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" gap={4} flexDir="column">
          <Flex gap={4}>
            <Flex gap={4} flexDir="column">
              <Text fontSize="12px" fontWeight={600}>
                Category
              </Text>
              <Input
                variant="filled"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </Flex>
            <Flex gap={4} flexDir="column">
              <Text fontSize="12px" fontWeight={600}>
                Price
              </Text>
              <Input
                variant="filled"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </Flex>
          </Flex>
          <Flex gap={4}>
            <Flex gap={4} flexDir="column">
              <Text fontSize="12px" fontWeight={600}>
                Quantity
              </Text>
              <Input
                variant="filled"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </Flex>
            <Flex gap={4} flexDir="column">
              <Text fontSize="12px" fontWeight={600}>
                Value
              </Text>
              <Input
                variant="filled"
                name="value"
                value={formData.value}
                onChange={handleChange}
              />
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="ghost" onClick={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
