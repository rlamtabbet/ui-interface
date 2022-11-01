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
  Card,
  CardContent,
  Chip,
  FormControl,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Select
} from "@mui/material";
import { ExpandMore, ShieldTwoTone } from "@mui/icons-material";

export default function Policies() {
  // Start accordion
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // End accordion

  // Start select
  const [filter, setFilter] = React.useState("Intent Classification (Prod)");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  // End select

  return (
    <>
      <Box p={1} display="flex" alignItems="center" bgcolor="background.paper">
        <Box flexGrow={1}>Required Policies</Box>
        <Box mr={1}>
          <Button size="small" variant="outlined" color="secondary">
            Visit Policy Center
          </Button>
        </Box>
        <Box mr={1}>
          <Button size="small" variant="contained" color="secondary">
            Modify Policy Packs
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
            overflow: "auto"
          }}
        >
          <Item>
            <Grid container p={2} spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <Box mb={1}>
                  <FormControl size="small">
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={filter}
                      onChange={handleFilterChange}
                    >
                      <MenuItem value={"All Models"}>All Models</MenuItem>
                      <MenuItem value={"Intent Classification (Prod)"}>
                        Model: Intent Classification (Prod)
                      </MenuItem>
                      <MenuItem value={"Response Generation (Prod)"}>
                        Model: Response Generation (Prod)
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Stack spacing={2}>
                  <Card>
                    <CardContent>
                      <Box
                        flexGrow={1}
                        px={1}
                        display="flex"
                        alignItems="center"
                      >
                        <Typography flexGrow={1} fontWeight="bold">
                          Technical Policies
                        </Typography>
                        <Chip variant="outlined" label="3/4 OK" size="small" />
                      </Box>
                    </CardContent>
                    <Accordion
                      disableGutters
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Box
                          flexGrow={1}
                          px={1}
                          display="flex"
                          alignItems="center"
                        >
                          <Typography flexGrow={1} variant="body2">
                            Dataset Review
                          </Typography>
                          <Chip variant="outlined" label="1 OK" size="small" />
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack mx={0.5} spacing={2}>
                          <Card variant="outlined">
                            <List dense disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                  <ShieldTwoTone />
                                </ListItemIcon>
                                <ListItemText
                                  primary="If using proxy variables to evaluate fairness, evaluate accuracy of proxy variables."
                                  secondary="FAIR.T1"
                                />
                                <ListItemSecondaryAction>
                                  <Chip
                                    variant="outlined"
                                    label="OK"
                                    size="small"
                                  />
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </List>
                          </Card>
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      disableGutters
                      expanded={expanded === "panel2"}
                      onChange={handleChange("panel2")}
                    >
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Box
                          flexGrow={1}
                          px={1}
                          display="flex"
                          alignItems="center"
                        >
                          <Typography flexGrow={1} variant="body2">
                            Development Review
                          </Typography>
                          <Chip variant="outlined" label="1 OK" size="small" />
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack mx={0.5} spacing={2}>
                          <Card variant="outlined">
                            <List dense disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                  <ShieldTwoTone />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Evaluate fairness of the model."
                                  secondary="FAIR.T2"
                                />
                                <ListItemSecondaryAction>
                                  <Chip
                                    variant="outlined"
                                    label="OK"
                                    size="small"
                                  />
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </List>
                          </Card>
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      disableGutters
                      expanded={expanded === "panel3"}
                      onChange={handleChange("panel3")}
                    >
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Box
                          flexGrow={1}
                          px={1}
                          display="flex"
                          alignItems="center"
                        >
                          <Typography flexGrow={1} variant="body2">
                            Validation Review
                          </Typography>
                          <Chip variant="outlined" label="1 OK" size="small" />
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack mx={0.5} spacing={2}>
                          <Card variant="outlined">
                            <List dense disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                  <ShieldTwoTone />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Validate the fairness of the model."
                                  secondary="FAIR.T3"
                                />
                                <ListItemSecondaryAction>
                                  <Chip
                                    variant="outlined"
                                    label="OK"
                                    size="small"
                                  />
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </List>
                          </Card>
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      disableGutters
                      expanded={expanded === "panel4"}
                      onChange={handleChange("panel4")}
                    >
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Box
                          flexGrow={1}
                          px={1}
                          display="flex"
                          alignItems="center"
                        >
                          <Typography flexGrow={1} variant="body2">
                            Production Review
                          </Typography>
                          <Chip
                            variant="outlined"
                            label="1 WARNING"
                            color="warning"
                            size="small"
                          />
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack mx={0.5} spacing={2}>
                          <Card variant="outlined">
                            <List dense disablePadding>
                              <ListItemButton
                                component={RouterLink}
                                to="/assess/policies/policy"
                              >
                                <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                  <ShieldTwoTone />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Monitor fairness of the model in production."
                                  secondary="FAIR.T4"
                                />
                                <ListItemSecondaryAction>
                                  <Chip
                                    variant="outlined"
                                    label="WARNING"
                                    size="small"
                                    color="warning"
                                  />
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </List>
                          </Card>
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                  </Card>
                  <Card>
                    <CardContent>
                      <Box
                        flexGrow={1}
                        px={1}
                        display="flex"
                        alignItems="center"
                      >
                        <Typography flexGrow={1} fontWeight="bold">
                          Process Policies
                        </Typography>
                        <Chip variant="outlined" label="7/9 OK" size="small" />
                      </Box>
                    </CardContent>
                    <Accordion
                      disableGutters
                      expanded={expanded === "panelb1"}
                      onChange={handleChange("panelb1")}
                    >
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Box
                          flexGrow={1}
                          px={1}
                          display="flex"
                          alignItems="center"
                        >
                          <Typography flexGrow={1} variant="body2">
                            Dataset Review
                          </Typography>
                          <Chip variant="outlined" label="2 OK" size="small" />
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack mx={0.5} spacing={2}>
                          <Card variant="outlined">
                            <List dense disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                  <ShieldTwoTone />
                                </ListItemIcon>
                                <ListItemText
                                  primary="If using proxy variables to evaluate fairness, evaluate accuracy of proxy variables."
                                  secondary="FAIR.T1"
                                />
                                <ListItemSecondaryAction>
                                  <Chip
                                    variant="outlined"
                                    label="OK"
                                    size="small"
                                  />
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </List>
                          </Card>
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      disableGutters
                      expanded={expanded === "panelb2"}
                      onChange={handleChange("panelb2")}
                    >
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Box
                          flexGrow={1}
                          px={1}
                          display="flex"
                          alignItems="center"
                        >
                          <Typography flexGrow={1} variant="body2">
                            Design Review
                          </Typography>
                          <Chip variant="outlined" label="1 OK" size="small" />
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack mx={0.5} spacing={2}>
                          <Card variant="outlined">
                            <List dense disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                  <ShieldTwoTone />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Evaluate fairness of the model."
                                  secondary="FAIR.T2"
                                />
                                <ListItemSecondaryAction>
                                  <Chip
                                    variant="outlined"
                                    label="OK"
                                    size="small"
                                  />
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </List>
                          </Card>
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      disableGutters
                      expanded={expanded === "panelb3"}
                      onChange={handleChange("panelb3")}
                    >
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Box
                          flexGrow={1}
                          px={1}
                          display="flex"
                          alignItems="center"
                        >
                          <Typography flexGrow={1} variant="body2">
                            Development Review
                          </Typography>
                          <Chip variant="outlined" label="2 OK" size="small" />
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack mx={0.5} spacing={2}>
                          <Card variant="outlined">
                            <List dense disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                  <ShieldTwoTone />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Evaluate fairness of the model."
                                  secondary="FAIR.T2"
                                />
                                <ListItemSecondaryAction>
                                  <Chip
                                    variant="outlined"
                                    label="OK"
                                    size="small"
                                  />
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </List>
                          </Card>
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      disableGutters
                      expanded={expanded === "panelb4"}
                      onChange={handleChange("panelb4")}
                    >
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Box
                          flexGrow={1}
                          px={1}
                          display="flex"
                          alignItems="center"
                        >
                          <Typography flexGrow={1} variant="body2">
                            Validation Review
                          </Typography>
                          <Chip variant="outlined" label="1 OK" size="small" />
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack mx={0.5} spacing={2}>
                          <Card variant="outlined">
                            <List dense disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                  <ShieldTwoTone />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Validate the fairness of the model."
                                  secondary="FAIR.T3"
                                />
                                <ListItemSecondaryAction>
                                  <Chip
                                    variant="outlined"
                                    label="OK"
                                    size="small"
                                  />
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </List>
                          </Card>
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      disableGutters
                      expanded={expanded === "panelb5"}
                      onChange={handleChange("panelb5")}
                    >
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Box
                          flexGrow={1}
                          px={1}
                          display="flex"
                          alignItems="center"
                        >
                          <Typography flexGrow={1} variant="body2">
                            Production Review
                          </Typography>
                          <Chip
                            sx={{ mr: 1 }}
                            variant="outlined"
                            label="1 INCOMPLETE"
                            color="warning"
                            size="small"
                          />
                          <Chip variant="outlined" label="1 OK" size="small" />
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack mx={0.5} spacing={2}>
                          <Card variant="outlined">
                            <List dense disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                  <ShieldTwoTone />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Monitor fairness of the model in production."
                                  secondary="FAIR.T4"
                                />
                                <ListItemSecondaryAction>
                                  <Chip
                                    variant="outlined"
                                    label="INCOMPLETE"
                                    size="small"
                                    color="warning"
                                  />
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </List>
                          </Card>
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      disableGutters
                      expanded={expanded === "panelb6"}
                      onChange={handleChange("panelb6")}
                    >
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Box
                          flexGrow={1}
                          px={1}
                          display="flex"
                          alignItems="center"
                        >
                          <Typography flexGrow={1} variant="body2">
                            Ongoing Audit Review
                          </Typography>
                          <Chip
                            variant="outlined"
                            label="1 ERROR"
                            color="error"
                            size="small"
                          />
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack mx={0.5} spacing={2}>
                          <Card variant="outlined">
                            <List dense disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                  <ShieldTwoTone />
                                </ListItemIcon>
                                <ListItemText
                                  primary="Monitor fairness of the model in production."
                                  secondary="FAIR.T4"
                                />
                                <ListItemSecondaryAction>
                                  <Chip
                                    variant="outlined"
                                    label="ERROR"
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
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
