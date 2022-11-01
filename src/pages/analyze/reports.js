import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
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
  CardActionArea,
  CardContent,
  Chip,
  CircularProgress,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField
} from "@mui/material";
import {
  AssignmentLateTwoTone,
  BentoTwoTone,
  BusinessTwoTone,
  CalendarTodayTwoTone,
  ExpandMore,
  FiberNewTwoTone,
  Inventory2TwoTone,
  Launch,
  LightbulbTwoTone,
  ListAltTwoTone,
  Search,
  SpeedTwoTone,
  StoreMallDirectoryTwoTone,
  WarningTwoTone,
  WidgetsTwoTone
} from "@mui/icons-material";

export default function Reports() {
  // Start accordion
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // End accordion

  return (
    <>
      <Box p={1} display="flex" alignItems="center" bgcolor="background.paper">
        <Box flexGrow={1}>Reports</Box>
        <Box mr={1}>
          <Button
            component={RouterLink}
            to="/analyze/generate"
            size="small"
            variant="contained"
            color="secondary"
          >
            Generate Report
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
            paddingBottom: 20,
            overflow: "auto"
          }}
        >
          <Item>
            <Grid container p={1} spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <Box p={1}>
                  <Stack
                    mb={2}
                    direction={{ xs: "column", sm: "column", md: "row" }}
                    spacing={{ xs: 1, sm: 1, md: 2 }}
                  >
                    <Card sx={{ flexGrow: 1 }}>
                      <CardActionArea
                        component={RouterLink}
                        to="/analyze/generate"
                      >
                        <CardContent sx={{ textAlign: "center" }}>
                          <Typography variant="h6" component="div">
                            New Vendor Report
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Upload a vendor PDF or manifest
                          </Typography>
                          <Box fontSize="52px">
                            <StoreMallDirectoryTwoTone
                              color="secondary"
                              fontSize="inherit"
                            />
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card sx={{ flexGrow: 1 }}>
                      <CardActionArea
                        component={RouterLink}
                        to="/analyze/generate"
                      >
                        <CardContent sx={{ textAlign: "center" }}>
                          <Typography variant="h6" component="div">
                            New Risk Report
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Generate the current risk of this Use Case
                          </Typography>
                          <Box fontSize="52px">
                            <AssignmentLateTwoTone
                              color="info"
                              fontSize="inherit"
                            />
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card sx={{ flexGrow: 1 }}>
                      <CardActionArea
                        component={RouterLink}
                        to="/analyze/generate"
                      >
                        <CardContent sx={{ textAlign: "center" }}>
                          <Typography variant="h6" component="div">
                            New Compliance Report
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Gauge progress against policies
                          </Typography>
                          <Box fontSize="52px">
                            <SpeedTwoTone color="warning" fontSize="inherit" />
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Stack>
                  <TextField
                    sx={{ mb: 2 }}
                    fullWidth
                    placeholder="search"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      )
                    }}
                    variant="outlined"
                    size="small"
                  />
                  <Stack spacing={2}>
                    <Item>
                      <Accordion
                        disableGutters
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                      >
                        <AccordionSummary expandIcon={<ExpandMore />}>
                          <Box flexGrow={1}>
                            <Box display="flex" justifyContent="space-between">
                              <Typography gutterBottom variant="subtitle2">
                                AI Recruiting Software - Vendor Bias Audit
                              </Typography>
                            </Box>
                            <Stack direction="row" spacing={1}>
                              <Chip
                                size="small"
                                avatar={
                                  <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
                                }
                                label="Tyler Lee"
                                variant="outlined"
                              />
                              <Chip
                                size="small"
                                icon={<StoreMallDirectoryTwoTone />}
                                label="Vendor Report"
                                color="secondary"
                              />
                              <Chip
                                size="small"
                                icon={<FiberNewTwoTone />}
                                label="01/12/2022"
                                variant="outlined"
                                color="secondary"
                              />
                            </Stack>
                          </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Stack mx={0.5} spacing={2}>
                            <Card variant="outlined">
                              <List dense>
                                <Box display="flex" flexWrap="wrap">
                                  <ListItem sx={{ width: "50%" }}>
                                    <ListItemIcon
                                      sx={{ mr: -2, color: "teal" }}
                                    >
                                      <LightbulbTwoTone />
                                    </ListItemIcon>
                                    <ListItemText primary="Use case: AI Recruiting Software" />
                                  </ListItem>
                                  <ListItem sx={{ width: "50%" }}>
                                    <ListItemIcon sx={{ mr: -2 }}>
                                      <StoreMallDirectoryTwoTone color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText primary="Vendor: AI Recruiting Co." />
                                  </ListItem>
                                  <ListItem sx={{ width: "50%" }}>
                                    <ListItemIcon
                                      sx={{ mr: -2, color: "indigo" }}
                                    >
                                      <WidgetsTwoTone />
                                    </ListItemIcon>
                                    <ListItemText primary="Models: Intent Classification, Response Generation" />
                                  </ListItem>
                                  <ListItem sx={{ width: "50%" }}>
                                    <ListItemIcon sx={{ mr: -2 }}>
                                      <AssignmentLateTwoTone color="info" />
                                    </ListItemIcon>
                                    <ListItemText primary="Risk: Fairness (Bias)" />
                                  </ListItem>
                                </Box>
                              </List>
                            </Card>
                            <Card variant="outlined">
                              <Box
                                p={1}
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                bgcolor="background.paper"
                              >
                                <Box fontSize="body2.fontSize">
                                  Credo_AI-Vendor_Report-01-12-2022.pdf
                                </Box>
                                <Box mr={1}>
                                  <Chip variant="outlined" label="9 pages" />
                                </Box>
                                <Box mr={1}>
                                  <Button
                                    target="_blank"
                                    href="https://uploads.codesandbox.io/uploads/user/09006d97-99f1-4c26-8f57-5cb33ac63b93/i2DS-Credo+AI+Vendor+Risk+Report+12-27-2021.pdf"
                                    size="small"
                                    variant="outlined"
                                    color="secondary"
                                    endIcon={<Launch />}
                                  >
                                    Open Report
                                  </Button>
                                </Box>
                              </Box>
                              <Divider />
                              <img
                                src="/credo_ai-vendor.png"
                                width="100%"
                                alt="Preview"
                              />
                            </Card>
                          </Stack>
                        </AccordionDetails>
                      </Accordion>
                    </Item>
                    <Item>
                      <Accordion
                        disableGutters
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                      >
                        <AccordionSummary expandIcon={<ExpandMore />}>
                          <Box flexGrow={1}>
                            <Box display="flex" justifyContent="space-between">
                              <Typography gutterBottom variant="subtitle2">
                                AI Recruiting Software - Risk Report
                              </Typography>
                            </Box>
                            <Stack direction="row" spacing={1}>
                              <Chip
                                size="small"
                                avatar={
                                  <Avatar src="https://mui.com/static/images/avatar/5.jpg" />
                                }
                                label="Sam Mavis"
                                variant="outlined"
                              />
                              <Chip
                                size="small"
                                icon={<AssignmentLateTwoTone />}
                                label="Risk Report"
                                color="info"
                              />
                              <Chip
                                size="small"
                                icon={<CalendarTodayTwoTone />}
                                label="01/03/2022"
                                variant="outlined"
                                color="default"
                              />
                            </Stack>
                          </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Stack mx={0.5} spacing={1}>
                            <Card variant="outlined">
                              <List dense>
                                <Box display="flex" flexWrap="wrap">
                                  <ListItem sx={{ width: "33%" }}>
                                    <ListItemIcon
                                      sx={{ mr: -2, color: "teal" }}
                                    >
                                      <LightbulbTwoTone />
                                    </ListItemIcon>
                                    <ListItemText primary="Use case: AI Recruiting Software" />
                                  </ListItem>
                                  <ListItem sx={{ width: "33%" }}>
                                    <ListItemIcon sx={{ mr: -2 }}>
                                      <AssignmentLateTwoTone color="info" />
                                    </ListItemIcon>
                                    <ListItemText primary="Risk: Fairness (Bias)" />
                                  </ListItem>

                                  <ListItem sx={{ width: "33%" }}>
                                    <ListItemIcon sx={{ mr: -2 }}>
                                      <WarningTwoTone color="error" />
                                    </ListItemIcon>
                                    <ListItemText primary="Residual Risk: HIGH" />
                                  </ListItem>
                                  <ListItem sx={{ width: "33%" }}>
                                    <ListItemIcon sx={{ mr: -2 }}>
                                      <BusinessTwoTone color="warning" />
                                    </ListItemIcon>
                                    <ListItemText primary="Brand: MODERATE" />
                                  </ListItem>
                                  <ListItem sx={{ width: "33%" }}>
                                    <ListItemIcon sx={{ mr: -2 }}>
                                      <BusinessTwoTone color="error" />
                                    </ListItemIcon>
                                    <ListItemText primary="Regulatory: HIGH" />
                                  </ListItem>
                                  <ListItem sx={{ width: "33%" }}>
                                    <ListItemIcon sx={{ mr: -2 }}>
                                      <BusinessTwoTone color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary="Financial: LOW" />
                                  </ListItem>
                                </Box>
                              </List>
                            </Card>
                            <Typography color="text.secondary">
                              Model Risk
                            </Typography>
                            <Stack direction="row" spacing={1}>
                              <Card
                                variant="outlined"
                                sx={{
                                  p: 2,
                                  textAlign: "center",
                                  width: "50%"
                                }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  mb={0.25}
                                  color="text.secondary"
                                >
                                  Intent Classification (Prod)
                                </Box>
                                <Box
                                  fontSize="caption.fontSize"
                                  color="text.secondary"
                                >
                                  CRITICAL
                                </Box>
                                <Box fontSize="h5.fontSize" color="error.dark">
                                  6 Issues
                                </Box>
                              </Card>
                              <Card
                                variant="outlined"
                                sx={{
                                  p: 2,
                                  textAlign: "center",
                                  width: "50%"
                                }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  mb={0.25}
                                  color="text.secondary"
                                >
                                  Response Generation (Prod)
                                </Box>
                                <Box
                                  fontSize="caption.fontSize"
                                  color="text.secondary"
                                >
                                  MODERATE
                                </Box>
                                <Box
                                  fontSize="h5.fontSize"
                                  color="warning.main"
                                >
                                  4 Issues
                                </Box>
                              </Card>
                            </Stack>
                            <Typography color="text.secondary">
                              Fairness Risks
                            </Typography>
                            <Card variant="outlined">
                              <Box
                                sx={{ mx: 2, mt: 1 }}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                              >
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  If using proxy variables to evaluate fairness,
                                  evaluate accuracy of proxy variables.
                                </Typography>
                                <Chip
                                  variant="outlined"
                                  label="FAIR.T1"
                                  size="small"
                                />
                              </Box>
                              <List dense disablePadding>
                                <ListItemButton
                                  sx={{ py: 0 }}
                                  component={RouterLink}
                                  to="/assess/policies/policy"
                                >
                                  <ListItemText
                                    primary="Intent Classification (PROD)"
                                    secondary="Dataset (AmbigQA) is not accurate (F1 0.4)"
                                  />
                                  <ListItemSecondaryAction>
                                    <Chip
                                      variant="outlined"
                                      label="HIGH"
                                      size="small"
                                      color="error"
                                    />
                                  </ListItemSecondaryAction>
                                </ListItemButton>
                                <ListItemButton
                                  sx={{ py: 0 }}
                                  component={RouterLink}
                                  to="/assess/policies/policy"
                                >
                                  <ListItemText
                                    primary="Response Generation (PROD)"
                                    secondary="Dataset (AmbigQA) is not accurate (F1 0.4)"
                                  />
                                  <ListItemSecondaryAction>
                                    <Chip
                                      variant="outlined"
                                      label="HIGH"
                                      size="small"
                                      color="error"
                                    />
                                  </ListItemSecondaryAction>
                                </ListItemButton>
                              </List>
                            </Card>
                            <Card variant="outlined">
                              <Box
                                sx={{ mx: 2, mt: 1 }}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                              >
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Evaluate fairness of the model.
                                </Typography>
                                <Chip
                                  variant="outlined"
                                  label="FAIR.T2"
                                  size="small"
                                />
                              </Box>
                              <List dense disablePadding>
                                <ListItemButton
                                  sx={{ py: 0 }}
                                  component={RouterLink}
                                  to="/assess/policies/policy"
                                >
                                  <ListItemText
                                    primary="Intent Classification (PROD)"
                                    secondary="Model is not fair in development (Disparate Impact 0.52)"
                                  />
                                  <ListItemSecondaryAction>
                                    <Chip
                                      variant="outlined"
                                      label="HIGH"
                                      size="small"
                                      color="error"
                                    />
                                  </ListItemSecondaryAction>
                                </ListItemButton>
                                <ListItemButton
                                  sx={{ py: 0 }}
                                  component={RouterLink}
                                  to="/assess/policies/policy"
                                >
                                  <ListItemText
                                    primary="Response Generation (PROD)"
                                    secondary="Model is moderately fair in development (Disparate Impact 0.68)"
                                  />
                                  <ListItemSecondaryAction>
                                    <Chip
                                      variant="outlined"
                                      label="MODERATE"
                                      size="small"
                                      color="warning"
                                    />
                                  </ListItemSecondaryAction>
                                </ListItemButton>
                              </List>
                            </Card>
                            <Card variant="outlined">
                              <Box
                                sx={{ mx: 2, mt: 1 }}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                              >
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Validate fairness of the model.
                                </Typography>
                                <Chip
                                  variant="outlined"
                                  label="FAIR.T3"
                                  size="small"
                                />
                              </Box>
                              <List dense disablePadding>
                                <ListItemButton
                                  sx={{ py: 0 }}
                                  component={RouterLink}
                                  to="/assess/policies/policy"
                                >
                                  <ListItemText
                                    primary="Intent Classification (PROD)"
                                    secondary="Model is not fair in validation (Disparate Impact 0.66)"
                                  />
                                  <ListItemSecondaryAction>
                                    <Chip
                                      variant="outlined"
                                      label="HIGH"
                                      size="small"
                                      color="error"
                                    />
                                  </ListItemSecondaryAction>
                                </ListItemButton>
                                <ListItemButton
                                  sx={{ py: 0 }}
                                  component={RouterLink}
                                  to="/assess/policies/policy"
                                >
                                  <ListItemText
                                    primary="Response Generation (PROD)"
                                    secondary="Model is fair in validation (Disparate Impact 0.75)"
                                  />
                                  <ListItemSecondaryAction>
                                    <Chip
                                      variant="outlined"
                                      label="LOW"
                                      size="small"
                                      color="info"
                                    />
                                  </ListItemSecondaryAction>
                                </ListItemButton>
                              </List>
                            </Card>
                            <Card variant="outlined">
                              <Box
                                sx={{ mx: 2, mt: 1 }}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                              >
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Monitor fairness of the model in production.
                                </Typography>
                                <Chip
                                  variant="outlined"
                                  label="FAIR.T4"
                                  size="small"
                                />
                              </Box>
                              <List dense disablePadding>
                                <ListItemButton
                                  sx={{ py: 0 }}
                                  component={RouterLink}
                                  to="/assess/policies/policy"
                                >
                                  <ListItemText
                                    primary="Intent Classification (PROD)"
                                    secondary="Monitoring not configured (or error in setup)"
                                  />
                                  <ListItemSecondaryAction>
                                    <Chip
                                      variant="outlined"
                                      label="HIGH"
                                      size="small"
                                      color="error"
                                    />
                                  </ListItemSecondaryAction>
                                </ListItemButton>
                                <ListItemButton
                                  sx={{ py: 0 }}
                                  component={RouterLink}
                                  to="/assess/policies/policy"
                                >
                                  <ListItemText
                                    primary="Response Generation (PROD)"
                                    secondary="Monitoring not configured (or error in setup)"
                                  />
                                  <ListItemSecondaryAction>
                                    <Chip
                                      variant="outlined"
                                      label="HIGH"
                                      size="small"
                                      color="error"
                                    />
                                  </ListItemSecondaryAction>
                                </ListItemButton>
                              </List>
                            </Card>
                          </Stack>
                        </AccordionDetails>
                      </Accordion>
                    </Item>
                    <Item>
                      <Accordion
                        disableGutters
                        expanded={expanded === "panel3"}
                        onChange={handleChange("panel3")}
                      >
                        <AccordionSummary expandIcon={<ExpandMore />}>
                          <Box flexGrow={1}>
                            <Box display="flex" justifyContent="space-between">
                              <Typography gutterBottom variant="subtitle2">
                                AI Recruiting Software - Policy Compliance
                                Report
                              </Typography>
                            </Box>
                            <Stack direction="row" spacing={1}>
                              <Chip
                                size="small"
                                avatar={
                                  <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
                                }
                                label="Tyler Lee"
                                variant="outlined"
                              />
                              <Chip
                                size="small"
                                icon={<SpeedTwoTone />}
                                label="Compliance Report"
                                color="warning"
                              />
                              <Chip
                                size="small"
                                icon={<CalendarTodayTwoTone />}
                                label="01/02/2022"
                                variant="outlined"
                                color="default"
                              />
                            </Stack>
                          </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Stack mx={0.5} spacing={1}>
                            <Card variant="outlined">
                              <List dense>
                                <Box display="flex" flexWrap="wrap">
                                  <ListItem sx={{ width: "100%" }}>
                                    <ListItemIcon
                                      sx={{ mr: -2, color: "teal" }}
                                    >
                                      <LightbulbTwoTone />
                                    </ListItemIcon>
                                    <ListItemText primary="Use case: AI Recruiting Software" />
                                  </ListItem>
                                  <ListItem sx={{ width: "33%" }}>
                                    <ListItemIcon sx={{ mr: -2 }}>
                                      <Inventory2TwoTone color="info" />
                                    </ListItemIcon>
                                    <ListItemText primary="Packs: 3" />
                                  </ListItem>

                                  <ListItem sx={{ width: "33%" }}>
                                    <ListItemIcon sx={{ mr: -2 }}>
                                      <ListAltTwoTone color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText primary="Policies: 12" />
                                  </ListItem>
                                  <ListItem sx={{ width: "33%" }}>
                                    <ListItemIcon sx={{ mr: -2 }}>
                                      <BentoTwoTone color="warning" />
                                    </ListItemIcon>
                                    <ListItemText primary="Controls: 45" />
                                  </ListItem>
                                </Box>
                              </List>
                            </Card>
                            <Typography color="text.secondary">
                              Policy Pack Compliance
                            </Typography>
                            <Stack direction="row" spacing={1}>
                              <Card
                                variant="outlined"
                                sx={{
                                  p: 2,
                                  textAlign: "center",
                                  flexGrow: 1
                                }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  mb={0.25}
                                  color="text.secondary"
                                >
                                  NYC 1894-A Pack
                                </Box>
                                <Box
                                  fontSize="caption.fontSize"
                                  color="text.secondary"
                                >
                                  3/4 Policies
                                </Box>
                                <Box
                                  mt={1}
                                  ml={2}
                                  display="flex"
                                  justifyContent="center"
                                >
                                  <Box
                                    height="50px"
                                    sx={{
                                      position: "relative",
                                      display: "inline-flex"
                                    }}
                                    mr={2}
                                    color="warning.main"
                                  >
                                    <CircularProgress
                                      variant="determinate"
                                      value="75"
                                      color="inherit"
                                      thickness={6}
                                      size={50}
                                    />
                                    <Box
                                      color="action.focus"
                                      position="absolute"
                                      left={0}
                                    >
                                      <CircularProgress
                                        variant="determinate"
                                        color="inherit"
                                        thickness={6}
                                        size={50}
                                        value={100}
                                      />
                                    </Box>
                                    <Box
                                      color="text.secondary"
                                      sx={{
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        position: "absolute",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                      }}
                                    >
                                      <Typography variant="caption">
                                        75%
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Box>
                              </Card>
                              <Card
                                variant="outlined"
                                sx={{
                                  p: 2,
                                  textAlign: "center",
                                  flexGrow: 1
                                }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  mb={0.25}
                                  color="text.secondary"
                                >
                                  IEEE EAD Pack
                                </Box>
                                <Box
                                  fontSize="caption.fontSize"
                                  color="text.secondary"
                                >
                                  1/4 Policies
                                </Box>
                                <Box
                                  mt={1}
                                  ml={2}
                                  display="flex"
                                  justifyContent="center"
                                >
                                  <Box
                                    height="50px"
                                    sx={{
                                      position: "relative",
                                      display: "inline-flex"
                                    }}
                                    mr={2}
                                    color="error.main"
                                  >
                                    <CircularProgress
                                      variant="determinate"
                                      value="25"
                                      color="inherit"
                                      thickness={6}
                                      size={50}
                                    />
                                    <Box
                                      color="action.focus"
                                      position="absolute"
                                      left={0}
                                    >
                                      <CircularProgress
                                        variant="determinate"
                                        color="inherit"
                                        thickness={6}
                                        size={50}
                                        value={100}
                                      />
                                    </Box>
                                    <Box
                                      color="text.secondary"
                                      sx={{
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        position: "absolute",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                      }}
                                    >
                                      <Typography variant="caption">
                                        25%
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Box>
                              </Card>
                              <Card
                                variant="outlined"
                                sx={{
                                  p: 2,
                                  textAlign: "center",
                                  flexGrow: 1
                                }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  mb={0.25}
                                  color="text.secondary"
                                >
                                  CorpCo Company Pack
                                </Box>
                                <Box
                                  fontSize="caption.fontSize"
                                  color="text.secondary"
                                >
                                  4/4 Policies
                                </Box>
                                <Box
                                  mt={1}
                                  ml={2}
                                  display="flex"
                                  justifyContent="center"
                                >
                                  <Box
                                    height="50px"
                                    sx={{
                                      position: "relative",
                                      display: "inline-flex"
                                    }}
                                    mr={2}
                                    color="success.main"
                                  >
                                    <CircularProgress
                                      variant="determinate"
                                      value="100"
                                      color="inherit"
                                      thickness={6}
                                      size={50}
                                    />
                                    <Box
                                      color="action.focus"
                                      position="absolute"
                                      left={0}
                                    >
                                      <CircularProgress
                                        variant="determinate"
                                        color="inherit"
                                        thickness={6}
                                        size={50}
                                        value={100}
                                      />
                                    </Box>
                                    <Box
                                      color="text.secondary"
                                      sx={{
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        position: "absolute",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                      }}
                                    >
                                      <Typography variant="caption">
                                        100%
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Box>
                              </Card>
                            </Stack>
                            <Typography color="text.secondary">
                              Policies that need attention
                            </Typography>
                            <Card variant="outlined">
                              <Box
                                sx={{ mx: 2, my: 1 }}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                              >
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  If using proxy variables to evaluate fairness,
                                  evaluate accuracy of proxy variables.
                                </Typography>
                                <Chip
                                  variant="outlined"
                                  label="FAIR.T1"
                                  size="small"
                                />
                              </Box>
                            </Card>
                            <Card variant="outlined">
                              <Box
                                sx={{ mx: 2, my: 1 }}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                              >
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Evaluate fairness of the model.
                                </Typography>
                                <Chip
                                  variant="outlined"
                                  label="FAIR.T2"
                                  size="small"
                                />
                              </Box>
                            </Card>
                            <Card variant="outlined">
                              <Box
                                sx={{ mx: 2, my: 1 }}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                              >
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Validate fairness of the model.
                                </Typography>
                                <Chip
                                  variant="outlined"
                                  label="FAIR.T3"
                                  size="small"
                                />
                              </Box>
                            </Card>
                            <Card variant="outlined">
                              <Box
                                sx={{ mx: 2, my: 1 }}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                              >
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Monitor fairness of the model in production.
                                </Typography>
                                <Chip
                                  variant="outlined"
                                  label="FAIR.T4"
                                  size="small"
                                />
                              </Box>
                            </Card>
                          </Stack>
                        </AccordionDetails>
                      </Accordion>
                    </Item>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
