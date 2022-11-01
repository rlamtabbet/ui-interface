import * as React from "react";
import Box from "@mui/material/Box";
import Item from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Card,
  CardContent,
  Chip,
  Container,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  Stack,
  Switch
} from "@mui/material";
import {
  ArchiveTwoTone,
  ArticleTwoTone,
  AssignmentLateTwoTone,
  BalanceTwoTone,
  DeleteForeverTwoTone,
  Edit,
  ExpandMore,
  FeaturedPlayListTwoTone,
  FileCopy,
  LabelTwoTone,
  ListAltTwoTone,
  LocalOfferTwoTone,
  NetworkCheckTwoTone,
  SpeedTwoTone,
  StoreTwoTone,
  TagTwoTone,
  TodayTwoTone,
  TransferWithinAStation,
  WidgetsTwoTone
} from "@mui/icons-material";

export default function Generate() {
  // Start accordion
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // End accordion

  // Start report type
  const [reportType, setReportType] = React.useState("Vendor Report");

  const handleReportTypeChange = (event) => {
    setReportType(event.target.value);
  };
  const [openReportType, setReportTypeOpen] = React.useState(false);

  const handleReportTypeClose = () => {
    setReportTypeOpen(false);
  };

  const handleReportTypeOpen = () => {
    setReportTypeOpen(true);
  };
  // End report type

  // Begin switch list
  const [checked, setChecked] = React.useState(["wifi"]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  // End switch list

  return (
    <>
      <Box p={1} display="flex" alignItems="center" bgcolor="background.paper">
        <Box flexGrow={1}>Generate Report</Box>
        <Box mr={1}>
          <Button size="small" variant="outlined" color="inherit">
            Cancel
          </Button>
        </Box>
        <Box mr={1}>
          <Button size="small" variant="contained" color="secondary">
            Generate
          </Button>
        </Box>
      </Box>
      <Divider />
      <Grid
        container
        sx={{
          height: "calc(100vh - 50px)",
          position: "relative"
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            height: "calc(100vh - 50px)",
            overflow: "auto",
            paddingBottom: 25
          }}
        >
          <Item p={1}>
            <Container maxWidth="md" sx={{ py: 3 }}>
              <Stack spacing={2}>
                <Card>
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      Report Info
                    </Typography>
                  </CardContent>
                  <Divider />
                  <List dense disablePadding>
                    <ListItem>
                      <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                        <FeaturedPlayListTwoTone />
                      </ListItemIcon>
                      <ListItemText
                        primary="Report Name"
                        secondary={
                          <>
                            <Box>AI Recruiting Co. - Vendor Report</Box>
                          </>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                        <ArticleTwoTone />
                      </ListItemIcon>
                      <ListItemText
                        primary="Report Description"
                        secondary={
                          <>
                            <Box fontSize="caption.fontSize">
                              The latest snapshot we plan to use for our website
                              report
                            </Box>
                          </>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem disableGutters>
                      <ListItemButton
                        onClick={handleReportTypeOpen}
                        sx={{ mb: -3 }}
                      >
                        <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                          {reportType === "Vendor Report" ? (
                            <StoreTwoTone />
                          ) : reportType === "Risk Report" ? (
                            <AssignmentLateTwoTone />
                          ) : reportType === "Compliance Report" ? (
                            <SpeedTwoTone />
                          ) : null}
                        </ListItemIcon>
                        <ListItemText
                          primary="Report Type"
                          secondary={
                            <>
                              <Box>{reportType}</Box>
                            </>
                          }
                        />
                        <ListItemSecondaryAction>
                          <IconButton size="small">
                            <Edit fontSize="small" />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItemButton>
                    </ListItem>
                    <FormControl fullWidth>
                      <Select
                        input={
                          <Input style={{ visibility: "hidden", height: 0 }} />
                        }
                        value={reportType}
                        open={openReportType}
                        onClose={handleReportTypeClose}
                        onOpen={handleReportTypeOpen}
                        onChange={handleReportTypeChange}
                      >
                        <MenuItem value={"Vendor Report"}>
                          Vendor Report
                        </MenuItem>
                        <MenuItem value={"Risk Report"}>Risk Report</MenuItem>
                        <MenuItem value={"Compliance Report"}>
                          Compliance Report
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </List>
                </Card>
                <Card>
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      Report Settings
                    </Typography>
                  </CardContent>
                  <Divider />
                  <List dense disablePadding>
                    <ListItem>
                      <ListItemIcon>
                        <BalanceTwoTone />
                      </ListItemIcon>
                      <ListItemText primary="Include Fairness results" />
                      <Switch
                        edge="end"
                        onChange={handleToggle("fairness")}
                        checked={checked.indexOf("fairness") !== -1}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <NetworkCheckTwoTone />
                      </ListItemIcon>
                      <ListItemText primary="Include Performance results" />
                      <Switch
                        edge="end"
                        onChange={handleToggle("performance")}
                        checked={checked.indexOf("performance") !== -1}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <WidgetsTwoTone />
                      </ListItemIcon>
                      <ListItemText primary="Include individual Model results" />
                      <Switch
                        edge="end"
                        onChange={handleToggle("model")}
                        checked={checked.indexOf("model") !== -1}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ListAltTwoTone />
                      </ListItemIcon>
                      <ListItemText primary="Include individual Policy results" />
                      <Switch
                        edge="end"
                        onChange={handleToggle("policy")}
                        checked={checked.indexOf("policy") !== -1}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ArticleTwoTone />
                      </ListItemIcon>
                      <ListItemText primary="Generate content for disclosure webpage" />
                      <Switch
                        edge="end"
                        onChange={handleToggle("webpage")}
                        checked={checked.indexOf("webpage") !== -1}
                      />
                    </ListItem>
                  </List>
                </Card>
              </Stack>
            </Container>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
