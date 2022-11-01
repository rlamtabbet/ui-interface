import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Item from "@mui/material/Stack";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import {
  AssignmentLateTwoTone,
  BallotTwoTone,
  BusinessTwoTone,
  ChatTwoTone,
  Close,
  ContactsTwoTone,
  FactCheckTwoTone,
  KitchenTwoTone,
  LanguageTwoTone,
  LightbulbTwoTone,
  ListAltTwoTone,
  LiveHelpTwoTone,
  LocalOfferTwoTone,
  PlaylistAddCheckTwoTone,
  QuestionAnswerTwoTone,
  StoreTwoTone,
  ViewListTwoTone,
  WysiwygTwoTone
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Link,
  ListItemAvatar,
  ListItemButton,
  ListSubheader,
  Step,
  StepButton,
  StepContent,
  Stepper
} from "@mui/material";

// Start steps
const steps = [
  {
    label: "Add use case info",
    description: `Provide some helpful information to describe this use case, where it will be used and how it will be used.`
  },
  {
    label: "Add vendor info",
    description:
      "Add vendor contact info to provide connectivity for notifications and requests."
  },
  {
    label: "Define requirements",
    description: `Align on process requirements like optional industry regulations and company policies, then work with your stakeholders to define a common definition of metrics with threshold bounds for your technical requirements to be assessed.`
  },
  {
    label: "Send vendor questionnaire",
    description: `Request necessary information from vendor to assess to risk of the product and to ensure they are meeting your organization's process and technical requirements.`
  },
  {
    label: "Request assessment",
    description: `Send the technical requirements to the data science team to request an assessment using the Credo AI Lens framework.`
  },
  {
    label: "Generate report",
    description: `Using the Credo AI Risk Translation Engine, process all available assessments and contextual evidence against the use case info requirements and custom AI risk profile to generate an AI risk report for analysis.`
  },
  {
    label: "Request audit",
    description: `Provide some helpful information to describe this use case, where it will be used and how it will be used.`
  }
];
// End steps

export default function Overview() {
  // Start steps
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  // End steps

  return (
    <Grid
      container
      sx={{
        height: "calc(100vh - 50px)",
        position: "relative"
      }}
    >
      <Grid
        item
        xs={8}
        sm={8}
        md={9}
        sx={{
          height: "calc(100vh - 50px)",
          overflow: "auto"
        }}
      >
        <Item>
          <Grid container p={1} spacing={1}>
            <Grid item xs={8} sm={8} md={7}>
              <Item p={1}>
                <Card>
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      Action Items
                    </Typography>
                    <Box sx={{ width: "100%" }}>
                      <Stepper
                        nonLinear
                        orientation="vertical"
                        activeStep={activeStep}
                      >
                        {steps.map((step, index) => (
                          <Step
                            sx={{ mb: -2 }}
                            key={step.label}
                            completed={completed[index]}
                          >
                            <StepButton
                              color="inherit"
                              onClick={handleStep(index)}
                            >
                              {step.label}
                            </StepButton>
                            <StepContent>
                              <Box fontSize="caption.fontSize" mb={1}>
                                {step.description}
                              </Box>
                              <Box display="flex" sx={{ mb: 2 }}>
                                <Box mr={2}>
                                  {activeStep !== steps.length &&
                                    (completed[activeStep] ? (
                                      <Button
                                        size="small"
                                        variant="outlined"
                                        onClick={handleComplete}
                                      >
                                        Edit
                                      </Button>
                                    ) : (
                                      <Button
                                        size="small"
                                        variant="contained"
                                        onClick={handleComplete}
                                      >
                                        Complete Step
                                      </Button>
                                    ))}
                                </Box>
                                <Box mr={1}>
                                  <Button size="small">Learn more</Button>
                                </Box>
                              </Box>
                            </StepContent>
                          </Step>
                        ))}
                      </Stepper>
                      <Box mb={-2} mt={2}>
                        {allStepsCompleted() ? (
                          <React.Fragment>
                            <Button onClick={handleReset}>Reset</Button>
                          </React.Fragment>
                        ) : null}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4} sm={4} md={5}>
              <Item p={1}>
                <Card>
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      Recent Activity
                    </Typography>
                  </CardContent>
                  <List dense disablePadding sx={{ mt: -2 }}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "blue" }}>
                          <WysiwygTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Peter Barrett (Moveworks) uploaded a report"
                          secondary="AI Recruiting Software - Vendor Report"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "red" }}>
                          <ChatTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Kyle Hirai (AI Recruiting Co.) left a comment"
                          secondary="Which metric are we needing for FAIR.T3 again?"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                          <LiveHelpTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Fei Simmons sent a vendor report request"
                          secondary="AI Recruiting Software - Vendor Survey"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "green" }}>
                          <FactCheckTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Fei Simmons submitted final alignment"
                          secondary="AI Recruiting Software - Alignment (Final)"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "magenta" }}>
                          <ViewListTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Sam Mavis generated a policy compliance report"
                          secondary="AI Recruiting Software - Policy Compliance"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "orange" }}>
                          <QuestionAnswerTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Tyler Lee submitted an alignment response"
                          secondary="AI Recruiting Software - Alignment"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                          <ContactsTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Sam Mavis added vendor info"
                          secondary="AI Recruiting Co."
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                  <CardActions>
                    <Button size="small">View More</Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item p={1}>
                <Card>
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      Align
                    </Typography>
                  </CardContent>
                  <List dense disablePadding sx={{ mt: -2 }}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "blue" }}>
                          <FactCheckTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Finalized Requirements"
                          secondary="Use case requirements"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "blue" }}>
                          <BallotTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Technical Requirements"
                          secondary="Assessment metrics and thresholds"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "blue" }}>
                          <ListAltTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Process Requirements"
                          secondary="Policies and standards"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "blue" }}>
                          <QuestionAnswerTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Requirements Responses (3)"
                          secondary="Requirements alignment"
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item p={1}>
                <Card>
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      Assess
                    </Typography>
                  </CardContent>
                  <List dense disablePadding sx={{ mt: -2 }}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                          <WysiwygTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Fairness Assessments (2)"
                          secondary="Results from 2 Model Projects"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                          <WysiwygTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Performance Assessment (3)"
                          secondary="Results from 2 Model Projects"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                          <LiveHelpTwoTone />
                        </ListItemIcon>
                        <ListItemText primary="Assessment Requests (4)" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                          <KitchenTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Text Parsing Assessments (2)"
                          secondary="Model Project Asset Store"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                          <KitchenTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Intent Classification Assessments (3)"
                          secondary="Model Project Asset Store"
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item p={1}>
                <Card>
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      Analyze
                    </Typography>
                  </CardContent>
                  <List dense disablePadding sx={{ mt: -2 }}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "magenta" }}>
                          <AssignmentLateTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Use Case AI Risk Report"
                          secondary="Fri Jan 7 11:13 PM"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "magenta" }}>
                          <StoreTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="AI Vendor Report"
                          secondary="Thu Jan 6 9:11 AM"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "magenta" }}>
                          <BusinessTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Internal Audit"
                          secondary="Wed Jan 5 8:42 PM"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "magenta" }}>
                          <PlaylistAddCheckTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Policy Compliance Report"
                          secondary="Tue Jan 4 8:22 AM"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "magenta" }}>
                          <AssignmentLateTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Fairness Risk Report"
                          secondary="Tue Jan 4 8:22 AM"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2, color: "magenta" }}>
                          <AssignmentLateTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Performance Risk Report"
                          secondary="Tue Jan 4 8:19 AM"
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </Item>
      </Grid>
      <Grid
        item
        xs={4}
        sm={4}
        md={3}
        sx={{
          bgcolor: "background.paper",
          borderLeft: "1px solid rgba(0,0,0,0.1)",
          height: "calc(100vh - 50px)",
          overflow: "auto"
        }}
      >
        <Item>
          <Stack spacing={1} divider={<Divider />}>
            <Item
              sx={{
                px: 2,
                pt: 3,
                position: "sticky",
                top: 0,
                bgcolor: "background.paper",
                zIndex: 3
              }}
            >
              <Box display="flex" alignItems="center">
                <Box flexGrow={1}>Use Case Details</Box>
                <Box>
                  <IconButton size="small">
                    <Close fontSize="inherit" />
                  </IconButton>
                </Box>
              </Box>
            </Item>
            <Item sx={{ px: 2 }}>
              <Box>
                NGC HR will use the chatbot to automate simple requests, which
                frees up our HR staff to focus on...{" "}
                <Link href="#" variant="body2">
                  [more]
                </Link>
              </Box>
            </Item>
            <Item>
              <Typography sx={{ px: 2 }}>Stakeholders</Typography>
              <List dense disablePadding>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Fei Simmons"
                      src="https://mui.com/static/images/avatar/4.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Fei Simmons"
                    secondary={
                      <React.Fragment>
                        <Typography variant="body2">Product Manager</Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Tyler Lee"
                      src="https://mui.com/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Tyler Lee"
                    secondary={
                      <React.Fragment>
                        <Typography variant="body2">
                          Data Science Lead
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Sam Mavis"
                      src="https://mui.com/static/images/avatar/2.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Sam Mavis"
                    secondary={
                      <React.Fragment>
                        <Typography variant="body2">Compliance</Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </Item>
            <Item>
              <Typography sx={{ px: 2 }}>Info</Typography>
              <List dense disablePadding>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LanguageTwoTone />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography variant="body2" color="text.seconary">
                          Regions
                        </Typography>
                      </React.Fragment>
                    }
                    secondary="US, EU, Canada"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocalOfferTwoTone />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography variant="body2" color="text.seconary">
                          Tags
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Link href="#" variant="caption">
                          HR
                        </Link>
                        ,{" "}
                        <Link href="#" variant="caption">
                          Bias
                        </Link>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LightbulbTwoTone />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography variant="body2" color="text.seconary">
                          Use Case Type
                        </Typography>
                      </React.Fragment>
                    }
                    secondary="Vendor Product"
                  />
                </ListItem>
              </List>
            </Item>
            <Item>
              <Typography sx={{ px: 2 }}>Vendor</Typography>
              <List dense disablePadding>
                <ListItem>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography variant="body2" color="text.seconary">
                          Name
                        </Typography>
                      </React.Fragment>
                    }
                    secondary="Moveworks"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography variant="body2" color="text.seconary">
                          Address
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Link href="#" underline="none" variant="caption">
                          1277 Terra Bella Avenue Mountain View, CA 94043
                        </Link>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography variant="body2" color="text.seconary">
                          Phone
                        </Typography>
                      </React.Fragment>
                    }
                    secondary="(408) 435-5100"
                  />
                </ListItem>
                <ListSubheader>Contacts</ListSubheader>
                <ListItem>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography variant="body2" color="text.seconary">
                          Peter Barrett
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Link href="#" underline="none" variant="caption">
                          pbarrett@moveworks.ai
                        </Link>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography variant="body2" color="text.seconary">
                          Kyle S. Hirai
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Link href="#" underline="none" variant="caption">
                          kyle@moveworks.ai
                        </Link>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </Item>
          </Stack>
        </Item>
      </Grid>
    </Grid>
  );
}
