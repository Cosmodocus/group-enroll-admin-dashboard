import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="Group Benefits FAQs" subtitle="Frequently Asked Questions about our benefits offerings" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        What is a taxable benefit?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A taxable benefit is a payment provided to employees that is added to their income during each salary period, determining the total income subject to tax deductions.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        What do Group Benefits cover?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Group Benefits cover various areas including Drugs, Dental, Vision Care, Health Care, Hospital Coverage, Long & Short-Term Disability, Life & Accident Insurance, Critical Illness Insurance, and Travel Insurance.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        How many employees do we need to get Group Benefits?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Some insurance companies allow you to start with just 2 employees.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        What is the length of the contract?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The length of the contract typically ranges from 12 to 16 months.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        When can Group Benefits start?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Group Benefits can begin as early as the 1st or 15th of any month.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        Is there a waiting period for new employees?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The waiting period for new employees is determined by the employer and can be very flexible.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        Are Group Benefits taxable benefits?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, Group Benefits are considered taxable benefits.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        Can we include part-time employees in our Group Benefits plan?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, part-time employees can be included in the Group Benefits plan.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        Can we include contractors in our Group Benefits plan?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, contractors can also be included in the Group Benefits plan.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        Can I split the cost with my employees?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, the cost can be split between the employer and employees in various flexible ways.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        Can employees have different benefits?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, benefits can be tailored based on employee groups, such as management, office staff, etc.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        Can we make changes to our benefit plan at any time?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, most benefits can be adjusted at any time during the contract.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        Are there any cancellation fees or waiting periods?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Group Benefits operate on a month-to-month basis and can be cancelled with a 30-day notice without any fees.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        How do I add/terminate employees with my Group Benefits plan?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Most insurance companies offer an online system to enroll or terminate employees. Alternatively, you can download the enrollment form from GroupEnroll.ca and submit it to your broker or insurance company.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        Do the employees receive drug cards?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yes, each employee will receive a drug card to use at pharmacies and dental offices.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;
