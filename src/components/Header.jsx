import {Typography, Box, useTheme} from "@mui/material";
import { tokens } from "../theme";
import {PropTypes} from "prop-types";

const Header = ({title, subtitle}) => {

    Header.propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    }

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box mb="30px">
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{mr: "5px"}}>{title}</Typography>
                <Typography variant="h5" color={colors.greenAccent[500]} >{subtitle}</Typography>
        </Box>
    )
}

export default Header