import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Views";

const App = () => {
  return (
    <Box>
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
