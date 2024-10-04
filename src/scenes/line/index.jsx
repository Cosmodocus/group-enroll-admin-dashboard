import LineChart from "../../components/LineChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const Line = () => {

    return (
        <Box m="20px">
            <Header title="REVENUE GENERATED" subtitle="Simple Line Chart" />
            <Box height="75vh" mt="20px">
                <LineChart />
            </Box>
        </Box>
    )
}

export default Line