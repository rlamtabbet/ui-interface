import * as React from "react";
import Box from "@mui/material/Box";
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
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Stack
} from "@mui/material";
import {
  Edit,
  ExpandMore,
  InsertChartTwoTone,
  WarningTwoTone,
  WidgetsTwoTone
} from "@mui/icons-material";
import { Masonry } from "@mui/lab";

export default function Finalize() {
  // Start accordion
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // End accordion

  return (
    <>
      <Box p={1} display="flex" alignItems="center" bgcolor="background.paper">
        <Box flexGrow={1}>Finalize Alignment</Box>
        <Box mr={1}>
          <Button size="small" variant="outlined" color="secondary">
            Request Review
          </Button>
        </Box>
        <Box mr={1}>
          <Button size="small" variant="contained" color="secondary">
            Save
          </Button>
        </Box>
      </Box>
      <Divider />
      <Grid
        container
        spacing={2}
        sx={{
          height: "calc(100vh - 50px)",
          position: "relative",

          p: 2
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            height: "calc(100vh - 50px)",
            paddingBottom: 15,
            overflow: "auto"
          }}
        >
          <Stack spacing={2}>
            <Card>
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  Risks, Impact, and Outcomes
                </Typography>
              </CardContent>
              <Divider />
              <List dense disablePadding>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <WarningTwoTone color="error" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Fairness risk"
                      secondary={
                        <>
                          <Box>Impact (High)</Box>
                          <Box>
                            Outcomes: Financial (Low), Brand (High), Regulatory
                            (High)
                          </Box>
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
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <WarningTwoTone color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Performance risk"
                      secondary={
                        <>
                          <Box>Impact (Low)</Box>
                          <Box>
                            Outcomes: Financial (Low), Brand (Low), Regulatory
                            (Moderate)
                          </Box>
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
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <WarningTwoTone color="warning" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Security risk"
                      secondary={
                        <>
                          <Box>Impact (Moderate)</Box>
                          <Box>
                            Outcomes: Financial (Moderate), Brand (Low),
                            Regulatory (Moderate)
                          </Box>
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
                <Divider />
                <Box p={1}>
                  <Button fullWidth color="secondary" variant="outlined">
                    Add Risk
                  </Button>
                </Box>
              </List>
            </Card>

            <Card>
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  Required Policies
                </Typography>
              </CardContent>
              <Accordion
                disableGutters
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    variant="body2"
                    sx={{ width: "33%", flexShrink: 0 }}
                  >
                    Fairness Pack
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    9 Process Policies, 4 Technical Policies
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Risk that your AI systems disproportionately advantage
                    certain groups above others.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                disableGutters
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    variant="body2"
                    sx={{ width: "33%", flexShrink: 0 }}
                  >
                    Performance Pack
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    21 Process Policies, 4 Technical Policies
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Risk that your AI systems are not performant or do not
                    behave in a way that is aligned with your stated objectives.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                elevation={0}
                disableGutters
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography
                    variant="body2"
                    sx={{ width: "33%", flexShrink: 0 }}
                  >
                    Security Pack
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    14 Process Policies, 1 Technical Policies
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    Risk that your AI systems (and its associated data) are
                    vulnerable to cybersecurity or other security breach.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Divider />
              <Box p={1}>
                <Button fullWidth color="secondary" variant="outlined">
                  Add Policy Pack
                </Button>
              </Box>
            </Card>
          </Stack>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            height: "calc(100vh - 50px)",
            paddingBottom: 15,
            overflow: "auto"
          }}
        >
          <Stack spacing={2}>
            <Card>
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  Models to Assess
                </Typography>
              </CardContent>
              <Divider />
              <List dense disablePadding>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                      <WidgetsTwoTone />
                    </ListItemIcon>
                    <ListItemText
                      primary="Intent Classification (Prod)"
                      secondary="Project: Intent Classification"
                    />
                    <ListItemSecondaryAction>
                      <IconButton size="small">
                        <Edit fontSize="small" />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                      <WidgetsTwoTone />
                    </ListItemIcon>
                    <ListItemText
                      primary="Response Generation (Prod)"
                      secondary="Project: Response Generation"
                    />
                    <ListItemSecondaryAction>
                      <IconButton size="small">
                        <Edit fontSize="small" />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItemButton>
                </ListItem>
                <Divider />
                <Box p={1}>
                  <Button fullWidth color="secondary" variant="outlined">
                    Add Model
                  </Button>
                </Box>
              </List>
            </Card>

            <Card>
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  Technical Assessment Metrics
                </Typography>
              </CardContent>
              <Divider />
              <ListSubheader sx={{ bgcolor: "action.hover" }}>
                Intent Classification (Prod) Metrics
              </ListSubheader>
              <List dense disablePadding>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                      <InsertChartTwoTone />
                    </ListItemIcon>
                    <ListItemText
                      primary="Precision Score (0.8 - 1.0)"
                      secondary={
                        <>
                          <Box>
                            Fairness (
                            <span title="If using proxy variables to evaluate fairness, evaluate accuracy of proxy variables.">
                              FAIR.T1
                            </span>
                            )
                          </Box>
                          <Box>Dataset: AmbigQA, Stage: Dataset</Box>
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
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                      <InsertChartTwoTone />
                    </ListItemIcon>
                    <ListItemText
                      primary="Disparate Impact (0.7 - 1.0)"
                      secondary={
                        <>
                          <Box>
                            Fairness (
                            <span title="Evaluate fairness of the model.">
                              FAIR.T2
                            </span>
                            )
                          </Box>
                          <Box>Dataset: AmbigQA, Stage: Development</Box>
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
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                      <InsertChartTwoTone />
                    </ListItemIcon>
                    <ListItemText
                      primary="Disparate Impact (0.7 - 1.0)"
                      secondary={
                        <>
                          <Box>
                            Fairness (
                            <span title="Validate fairness of the model.">
                              FAIR.T3
                            </span>
                            )
                          </Box>
                          <Box>Dataset: AmbigQA, Stage: Validation</Box>
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
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                      <InsertChartTwoTone />
                    </ListItemIcon>
                    <ListItemText
                      primary="Toxicity (0.7 - 1.0)"
                      secondary={
                        <>
                          <Box>
                            Fairness (
                            <span title="Validate fairness of the model.">
                              FAIR.T3
                            </span>
                            )
                          </Box>
                          <Box>Dataset: AmbigQA, Stage: Validation</Box>
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
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                      <InsertChartTwoTone />
                    </ListItemIcon>
                    <ListItemText
                      primary="Profanity (0.7 - 1.0)"
                      secondary={
                        <>
                          <Box>
                            Fairness (
                            <span title="Validate fairness of the model.">
                              FAIR.T3
                            </span>
                            )
                          </Box>
                          <Box>Dataset: AmbigQA, Stage: Validation</Box>
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
              </List>
              <Divider />
              <ListSubheader sx={{ bgcolor: "action.hover" }}>
                Response Generation (Prod) Metrics
              </ListSubheader>
              <List dense disablePadding>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                      <InsertChartTwoTone />
                    </ListItemIcon>
                    <ListItemText
                      primary="Precision Score (0.8 - 1.0)"
                      secondary={
                        <>
                          <Box>
                            Fairness (
                            <span title="If using proxy variables to evaluate fairness, evaluate accuracy of proxy variables.">
                              FAIR.T1
                            </span>
                            )
                          </Box>
                          <Box>Dataset: AmbigQA, Stage: Dataset</Box>
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
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                      <InsertChartTwoTone />
                    </ListItemIcon>
                    <ListItemText
                      primary="Disparate Impact (0.7 - 1.0)"
                      secondary={
                        <>
                          <Box>
                            Fairness (
                            <span title="Evaluate fairness of the model.">
                              FAIR.T2
                            </span>
                            )
                          </Box>
                          <Box>Dataset: AmbigQA, Stage: Development</Box>
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
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                      <InsertChartTwoTone />
                    </ListItemIcon>
                    <ListItemText
                      primary="Disparate Impact (0.7 - 1.0)"
                      secondary={
                        <>
                          <Box>
                            Fairness (
                            <span title="Validate fairness of the model.">
                              FAIR.T3
                            </span>
                            )
                          </Box>
                          <Box>Dataset: AmbigQA, Stage: Validation</Box>
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
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                      <InsertChartTwoTone />
                    </ListItemIcon>
                    <ListItemText
                      primary="Toxicity (0.7 - 1.0)"
                      secondary={
                        <>
                          <Box>
                            Fairness (
                            <span title="Validate fairness of the model.">
                              FAIR.T3
                            </span>
                            )
                          </Box>
                          <Box>Dataset: AmbigQA, Stage: Validation</Box>
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
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                      <InsertChartTwoTone />
                    </ListItemIcon>
                    <ListItemText
                      primary="Profanity (0.7 - 1.0)"
                      secondary={
                        <>
                          <Box>
                            Fairness (
                            <span title="Validate fairness of the model.">
                              FAIR.T3
                            </span>
                            )
                          </Box>
                          <Box>Dataset: AmbigQA, Stage: Validation</Box>
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
              </List>
              <Divider />
              <Box p={1}>
                <Button fullWidth color="secondary" variant="outlined">
                  Add Metric
                </Button>
              </Box>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
