import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Header from "../../components/Header";

const DashBoard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title={"DASHBOARD"} subtitle={"Welcome to your dashboard"} />
        {/* Uncomment if you want to include a download button */}
        {/* <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box> */}
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(4, 1fr)", // 4 columns for extra small screens
          sm: "repeat(8, 1fr)",  // 8 columns for small screens
          md: "repeat(12, 1fr)", // 12 columns for medium screens and up
        }}
        gridAutoRows="140px"
        gap="20px"
      >
       {/* ROW 1 */}
<Box
  gridColumn={{ xs: "span 4", sm: "span 4", md: "span 3" }}
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  justifyContent="center"
>
  <StatBox
    title={"8,124"} // Number of Claims Processed
    subtitle={"Claims Processed"} // Updated title
    progress="0.80"
    increase="+10%"
    icon={<EmailIcon sx={{ color: colors.greenAccent[500], fontSize: "26px" }} />} // Adjust icon as necessary
  />
</Box>

<Box
  gridColumn={{ xs: "span 4", sm: "span 4", md: "span 3" }}
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  justifyContent="center"
>
  <StatBox
    title={"543"} // Number of Policies Sold
    subtitle={"Policies Sold"} // Updated title
    progress="0.75"
    increase="+12%"
    icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[500], fontSize: "26px" }} />}
  />
</Box>

<Box
  gridColumn={{ xs: "span 4", sm: "span 4", md: "span 3" }}
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  justifyContent="center"
>
  <StatBox
    title={"132"} // Number of New Clients
    subtitle={"New Clients"} // Updated title
    progress="0.60"
    increase="+8%"
    icon={<PersonAddIcon sx={{ color: colors.greenAccent[500], fontSize: "26px" }} />}
  />
</Box>

<Box
  gridColumn={{ xs: "span 4", sm: "span 4", md: "span 3" }}
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  justifyContent="center"
>
  <StatBox
    title={"$45,234"} // Amount of Claims Paid
    subtitle={"Claims Paid"} // Updated title
    progress="0.85"
    increase="+15%"
    icon={<MonetizationOnIcon sx={{ color: colors.greenAccent[500], fontSize: "26px" }} />} // Adjust icon as necessary
  />
</Box>

        {/* ROW 2 */}
        <Box
          gridColumn={{ xs: "span 4", sm: "span 4", md: "span 8" }}
          gridRow={{ xs: "span 2", sm: "span 2", md: "span 2" }}
          backgroundColor={colors.primary[400]}
        >
          <Box mt={"25px"} p={"0 30px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Box>
              <Typography variant="h5" fontWeight={"600"} color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant="h3" fontWeight={"bold"} color={colors.greenAccent[500]}>
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>
          <Box height={"250px"} mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* TRANSACTIONS */}
        <Box
          gridColumn={{ xs: "span 4", sm: "span 4", md: "span 4" }}
          gridRow={{ xs: "span 2", sm: "span 2", md: "span 2" }}
          backgroundColor={colors.primary[400]}
          overflow={"auto"}
        >
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} borderBottom={`4px solid ${colors.primary[500]}`} color={colors.grey[100]} p={"15px"}>
            <Typography color={colors.grey[100]} variant="h5" fontWeight={"600"}>
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={`4px solid ${colors.primary[500]}`}
              p={"15px"}
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight={"600"}>
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box backgroundColor={colors.greenAccent[500]} p={"5px 10px"} borderRadius={"4px"}>
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn={{ xs: "span 4", sm: "span 4", md: "span 4" }}
          gridRow={{ xs: "span 2", sm: "span 2", md: "span 2" }}
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight={"600"}>
            Campaign
          </Typography>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={"25px"}>
            <ProgressCircle size="125" />
            <Typography variant="h5" color={colors.greenAccent[500]} mt="15px">
              $48,352 revenue generated
            </Typography>
            <Typography variant="h5" fontWeight={"600"} align="center">
              Includes extra miscellaneous expenditures and costs
            </Typography>
          </Box>
        </Box>

        <Box
          gridColumn={{ xs: "span 4", sm: "span 4", md: "span 8" }}
          gridRow={{ xs: "span 2", sm: "span 2", md: "span 2" }}
          backgroundColor={colors.primary[400]}
          height={"300px"} // Increased height for more space
          p="30px" // Added padding for more space around the chart
        >
          <Typography variant="h5" fontWeight={"600"} sx={{ pb: "20px" }}>
            Sales Quantity
          </Typography>
          <Box height={"250px"} mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashBoard;
