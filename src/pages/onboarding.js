import * as React from "react";
import { useLocation } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

import {
  AddCircleOutline,
  ArrowForward,
  ArticleTwoTone,
  BatchPredictionTwoTone,
  CableTwoTone,
  ChevronRight,
  FeaturedPlayListTwoTone,
  InfoOutlined,
  IntegrationInstructionsTwoTone,
  Launch,
  LightbulbTwoTone,
  MonitorHeartTwoTone,
  SettingsApplicationsTwoTone
} from "@mui/icons-material";
import {
  Button,
  Container,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemIcon,
  ListItemSecondaryAction,
  Icon,
  MenuItem,
  Select,
  TextField,
  Typography,
  DialogActions,
  DialogContent,
  Dialog,
  DialogTitle,
  Alert,
  ToggleButton,
  Tooltip,
  FormControlLabel,
  Switch
} from "@mui/material";

import {
  AssessmentDocsIcon,
  CaiIcon,
  ProductDocsIcon
} from "../components/icons";

// Start steps
const docs = [
  {
    value: "useCaseOwner",
    items: [
      {
        title: "Create a Use Case",
        description: "The core contextual governance for AI systems",
        link: "https://docs.credo.ai/docs/configuration",
        route: "",
        icon: "lightbulb",
        color: "mediumOrchid"
      },
      {
        title: "Invite Contributors",
        description: "To assist with compliance and assessments",
        link: "https://docs.credo.ai/docs/configuration#owners--contributors",
        route: "",
        icon: "people",
        color: "lightSeaGreen"
      },
      {
        title: "Add Policy Packs for Compliance",
        description: "Choose the proper policies and standards",
        link: "https://docs.credo.ai/docs/policy-packs",
        route: "",
        icon: "security",
        color: "hotPink"
      },
      {
        title: "Add Models & Assessment Plans",
        description: "Measure and mitigate AI risk issues",
        link: "https://docs.credo.ai/docs/assessment-plans",
        route: "",
        icon: "art_track",
        color: "darkOrange"
      }
      /* {
        title: "Align on Risk and Compliance",
        description:
          "Define a plan with your stakeholders to provide context, select governance policies, and to create a risk technical assessment plan appropriate for your models, use case, industry, region and users.",
        link: "link",
        icon: "align_horizontal_center",
        color: "teal"
      },
      {
        title: "Assign Compliance Tasks",
        description:
          "Assign policies to the proper teams and members and work with them to ensure the proper information is provided for compliance.",
        link: "link",
        icon: "security",
        color: "darkOrange"
      },
      {
        title: "Request Assessments",
        description:
          "Request risk assessments from data scientists and collaborate with governance team members to provide feedback.",
        link: "link",
        icon: "analytics",
        color: "lightSeaGreen"
      },
      {
        title: "Generate Reports",
        description:
          "Create risk and compliance reports to share with your company and customers, to request review from compliance teams for approvals, and to export for audit needs.",
        link: "link",
        icon: "list_alt",
        color: "hotPink"
      } */
    ]
  },
  {
    value: "dataScientist",
    items: [
      {
        title: "Install Assessment Framework",
        description: "View setup docs to install credoai-lens for assessments",
        link: "https://credoai-lens.readthedocs.io/en/latest/setup.html",
        icon: "pageview",
        color: "purple"
      },
      {
        title: "Connect Lens to the Credo AI Platform",
        description:
          "Create an API token & config to pull and push to the platform",
        link:
          "https://credoai-lens.readthedocs.io/en/latest/notebooks/governance_integration.html",
        icon: "cable",
        color: "blue"
      },
      {
        title: "Register a Model and Dataset",
        description:
          "Using Lens, register your model and dataset to a use case",
        link:
          "https://credoai-lens.readthedocs.io/en/latest/notebooks/governance_integration.html?highlight=register#Registering-Models,-Data-and-Use-Cases",
        icon: "online_prediction",
        color: "teal"
      },
      {
        title: "Create an Assessment Plan",
        description:
          "Work with governance stakeholders to select metrics for assessments",
        link: "https://docs.credo.ai/docs/assessment-plans",
        icon: "straighten",
        color: "royalBlue"
      },
      {
        title: "Run a Risk Assessment",
        description:
          "Perform an assessment and push the results to Credo AI for review",
        link:
          "https://credoai-lens.readthedocs.io/en/latest/notebooks/quickstart.html#Run-Lens",
        icon: "assessment",
        color: "red"
      }
    ]
  },
  {
    value: "complianceTeam",
    items: [
      {
        title: "Establish Your Company Standards",
        description: "Select Policy Packs and Assessment Templates",
        link: "link",
        icon: "playlist_add_check_circle",
        color: "purple"
      },
      {
        title: "Align Stakeholders",
        description:
          "As the stakeholders progress in providing process and technical evidence, governance team members can be requested to review and provide feedback.",
        link: "link",
        icon: "people_outline",
        color: "teal"
      },
      {
        title: "Review Use Case Status",
        description:
          "As compliance policies and risk assessments flow into Credo AI, governance team members can easily check in on Risk and Compliance status.",
        link: "link",
        icon: "monitor_heart",
        color: "red"
      },
      {
        title: "Approve & Attest",
        description:
          "When ready, the stakeholders will generate reports and request review from governance team members for feedback or approvals.",
        link: "link",
        icon: "fact_check",
        color: "green"
      }
    ]
  }
];

// End Use Cases

// start toggles
const industries = [
  {
    id: "industries-1",
    name: "Banking",
    tooltip: "",
    icon: ""
  },
  {
    id: "industries-2",
    name: "Enterprise Software",
    tooltip: "",
    icon: ""
  },
  {
    id: "industries-3",
    name: "Finance",
    tooltip: "",
    icon: ""
  },
  {
    id: "industries-4",
    name: "Healthcare",
    tooltip: "",
    icon: ""
  },
  {
    id: "industries-5",
    name: "Human Resources",
    tooltip: "",
    icon: ""
  },
  {
    id: "industries-6",
    name: "Insurance",
    tooltip: "",
    icon: ""
  },
  {
    id: "industries-7",
    name: "Manufacturing",
    tooltip: "",
    icon: ""
  },
  {
    id: "industries-8",
    name: "Retail",
    tooltip: "",
    icon: ""
  },
  {
    id: "industries-9",
    name: "Transportation",
    tooltip: "",
    icon: ""
  },
  {
    id: "industries-10",
    name: "Other",
    tooltip: "",
    icon: ""
  }
];
const regions = [
  {
    id: "regions-1",
    name: "United States",
    tooltip: "",
    icon: ""
  },
  {
    id: "regions-2",
    name: "Canada",
    tooltip: "",
    icon: ""
  },
  {
    id: "regions-3",
    name: "EU",
    tooltip: "",
    icon: ""
  },
  {
    id: "regions-4",
    name: "APAC",
    tooltip: "",
    icon: ""
  },
  {
    id: "regions-5",
    name: "Latin America",
    tooltip: "",
    icon: ""
  },
  {
    id: "regions-6",
    name: "Singapore",
    tooltip: "",
    icon: ""
  },
  {
    id: "regions-7",
    name: "Other",
    tooltip: "",
    icon: ""
  }
];
const priorityRisks = [
  {
    id: "priorityRisks-1",
    name: "Fairness",
    tooltip: "",
    icon: "balance"
  },
  {
    id: "priorityRisks-2",
    name: "Performance",
    tooltip: "",
    icon: "speed"
  },
  {
    id: "priorityRisks-3",
    name: "Security",
    tooltip: "",
    icon: "shield"
  },
  {
    id: "priorityRisks-4",
    name: "Transparency",
    tooltip: "",
    icon: "gradient"
  },
  {
    id: "priorityRisks-5",
    name: "Environmental (ESG)",
    tooltip: "",
    icon: "forest"
  },
  {
    id: "priorityRisks-0",
    name: "Not sure",
    tooltip: "",
    icon: ""
  }
];

export default function Onboarding() {
  const location = useLocation();

  const [role, setRole] = React.useState("");
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const [title, setTitle] = React.useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const [displayName, setDisplayName] = React.useState("Fei Simmons");
  const handleDisplayNameChange = (event) => {
    setDisplayName(event.target.value);
  };

  const [organization, setOrganization] = React.useState("");
  const handleOrganizationChange = (event) => {
    setOrganization(event.target.value);
  };

  const [openCreateUseCase, setCreateUseCase] = React.useState(false);
  const handleOpenCreateUseCase = () => {
    setCreateUseCase(true);
  };
  const handleCloseCreateUseCase = () => {
    setCreateUseCase(false);
  };
  const handleNextCreateUseCase = () => {
    setCreateUseCase(false);
    setCreateUseCase2(true);
  };

  const [openCreateUseCase2, setCreateUseCase2] = React.useState(false);
  const handleOpenCreateUseCase2 = () => {
    setCreateUseCase2(true);
  };
  const handleCloseCreateUseCase2 = () => {
    setCreateUseCase2(false);
    setCreateUseCase(true);
  };
  const handleSkipCreateUseCase2 = () => {
    setCreateUseCase2(false);
  };
  const handleNextCreateUseCase2 = () => {
    setCreateUseCase2(false);
  };

  const [isSelected, setIsSelected] = React.useState({});
  const toggle = (option) => {
    setIsSelected({
      ...isSelected,
      [option]: !isSelected[option]
    });
  };

  return (
    <>
      <Box
        position="absolute"
        height={{ xs: 130, sm: 140, md: 165, lg: 180, xl: 220 }}
        width="100%"
        bgcolor="#7C02CA"
      ></Box>
      <Grid
        container
        spacing={2}
        sx={{
          height: "calc(100vh - 32px)",
          position: "relative",
          overflow: "auto",
          pt: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 6,
            xl: 10
          },
          px: {
            xs: 4,
            sm: 6,
            md: 10,
            lg: 12,
            xl: 14
          },
          pb: 15
        }}
      >
        <Grid item xs={12}>
          <Container maxWidth={role !== "" ? "lg" : "sm"}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography gutterBottom color="background.paper" variant="h6">
                Welcome to Credo AI!
              </Typography>
              <Button
                sx={{ color: "white" }}
                startIcon={<ArrowForward />}
                component={RouterLink}
                to="/home"
              >
                Skip this
              </Button>
            </Box>
            <Card variant="outlined" sx={{ borderRadius: 3 }}>
              <CardContent>
                <Stack direction="row">
                  <Box
                    display="flex"
                    flexDirection="column"
                    flexGrow={1}
                    px={2}
                    width={"35%"}
                  >
                    <Stack flexGrow={1} spacing={2}>
                      <Box textAlign="center">
                        <Typography variant="h6" gutterBottom>
                          Tell Us About Yourself
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          Provide a bit of info about yourself for your team
                          members and so we can point you in the right
                          direction.
                        </Typography>
                      </Box>
                      <TextField
                        size="small"
                        color="secondary"
                        fullWidth
                        id="displayName-input"
                        label="Name"
                        variant="outlined"
                        name="displayName"
                        value={displayName}
                        onChange={handleDisplayNameChange}
                        helperText="Edit your name how you'd like others to see it"
                      />

                      <TextField
                        size="small"
                        color="secondary"
                        fullWidth
                        id="title-input"
                        label="Title"
                        variant="outlined"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                        helperText='Your official title (like "Principal AI Engineer") '
                      />

                      <TextField
                        size="small"
                        color="secondary"
                        fullWidth
                        id="outlined-input"
                        label="Organization"
                        variant="outlined"
                        name="organization"
                        value={organization}
                        onChange={handleOrganizationChange}
                        helperText="Which team do you report into?"
                      />
                      <FormControl
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        size="small"
                      >
                        <InputLabel id="role-label">Job</InputLabel>
                        <Select
                          labelId="role-label"
                          id="role-select"
                          name="role"
                          label="Role"
                          value={role}
                          onChange={handleRoleChange}
                        >
                          <MenuItem value="">Select Job</MenuItem>
                          <MenuItem value={"useCaseOwner"}>
                            Product Manager
                          </MenuItem>
                          <MenuItem value={"dataScientist"}>
                            Data Scientist
                          </MenuItem>
                          <MenuItem value={"complianceTeam"}>
                            Governance Team Member
                          </MenuItem>
                        </Select>
                        <FormHelperText>
                          What is your job in Credo AI?
                        </FormHelperText>
                      </FormControl>
                    </Stack>
                  </Box>
                  {role !== "" ? (
                    <>
                      <Divider orientation="vertical" flexItem />
                      <Box
                        display="flex"
                        flexDirection="column"
                        flexGrow={1}
                        pl={2}
                        width={"45%"}
                      >
                        <Stack flexGrow={1} spacing={2}>
                          {role !== "" ? (
                            <>
                              <Box textAlign="center">
                                <Typography variant="h6">
                                  First steps{" "}
                                  {role === "useCaseOwner"
                                    ? "for Product Managers"
                                    : role === "dataScientist"
                                    ? "for Data Scientists"
                                    : role === "complianceTeam"
                                    ? "for Governance Team Members"
                                    : null}
                                </Typography>
                                <Typography
                                  variant="subtitle1"
                                  color="text.secondary"
                                >
                                  Start your Responsible AI journey in Credo AI
                                </Typography>
                              </Box>

                              <List disablePadding>
                                <Divider />
                                {docs
                                  .filter((doc) => doc.value.includes(role))
                                  .map((filteredDoc) =>
                                    filteredDoc.items.map((filteredItems) => (
                                      <>
                                        <ListItem>
                                          <ListItemIcon
                                            sx={{
                                              mr: -2,
                                              color: filteredItems.color
                                            }}
                                          >
                                            <Icon>{filteredItems.icon}</Icon>
                                          </ListItemIcon>
                                          <ListItemText
                                            primary={
                                              <Box
                                                fontWeight="bold"
                                                color="text.secondary"
                                              >
                                                {filteredItems.title}
                                              </Box>
                                            }
                                            secondary={
                                              <Box
                                                maxHeight={38}
                                                overflow="hidden"
                                              >
                                                {filteredItems.description}
                                              </Box>
                                            }
                                          />
                                          <ListItemSecondaryAction>
                                            {filteredItems.route ? (
                                              <>
                                                <IconButton
                                                  size="small"
                                                  onClick={
                                                    handleOpenCreateUseCase
                                                  }
                                                >
                                                  <AddCircleOutline fontSize="small" />
                                                </IconButton>
                                              </>
                                            ) : (
                                              <>
                                                <IconButton
                                                  size="small"
                                                  href={filteredItems.link}
                                                  target="_blank"
                                                >
                                                  <Launch fontSize="small" />
                                                </IconButton>
                                              </>
                                            )}
                                          </ListItemSecondaryAction>
                                        </ListItem>
                                        <Divider />
                                      </>
                                    ))
                                  )}
                                <Box textAlign="center" pt={1}>
                                  {role === "useCaseOwner" ? (
                                    <>
                                      <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleOpenCreateUseCase}
                                      >
                                        Create Your First Use Case
                                      </Button>
                                    </>
                                  ) : role === "dataScientist" ? (
                                    <>
                                      <Button
                                        variant="contained"
                                        color="secondary"
                                        href="https://credoai-lens.readthedocs.io/"
                                        target="_blank"
                                      >
                                        Install Credo AI Lens
                                      </Button>
                                    </>
                                  ) : role === "complianceTeam" ? (
                                    <>
                                      <Button
                                        variant="contained"
                                        color="secondary"
                                        href="https://app.credo.ai/policy-center/"
                                        target="_blank"
                                      >
                                        Review Policies &amp; Standards
                                      </Button>
                                    </>
                                  ) : null}
                                </Box>
                              </List>
                            </>
                          ) : (
                            <Box
                              flexGrow={1}
                              display="flex"
                              flexDirection="column"
                              justifyContent="center"
                              alignItems="center"
                              textAlign="center"
                            >
                              <Box sx={{ maxWidth: "60%" }}>
                                <Box>
                                  <ProductDocsIcon
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                    sx={{ width: 60, height: 60 }}
                                  />
                                </Box>
                                <Typography fontWeight="bold">
                                  Select a role!
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  By selecting a role we can give you some quick
                                  pointers on how to use Credo AI
                                </Typography>
                              </Box>
                            </Box>
                          )}
                        </Stack>
                      </Box>
                    </>
                  ) : null}
                </Stack>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </Grid>
      <Dialog maxWidth="sm" fullWidth open={openCreateUseCase} scroll="paper">
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <LightbulbTwoTone sx={{ mr: 1 }} />
            <Typography variant="h6">Create AI Use Case</Typography>
          </Box>
        </DialogTitle>
        <DialogContent dividers sx={{ backgroundColor: "action.hover" }}>
          <Stack spacing={2} px={1} pb={2}>
            <Alert
              icon={
                <Tooltip
                  title="Hi I'm CAI 9000! I'm here to assist your journey in Credo AI"
                  placement="left"
                  arrow
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: "common.white",
                        color: "common.black",
                        maxWidth: 150,
                        boxShadow: "-5px 3px 13px -2px rgba(0,0,0,0.38)",
                        "& .MuiTooltip-arrow": {
                          color: "common.white"
                        }
                      }
                    }
                  }}
                >
                  <Box height={60}>
                    <CaiIcon
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      sx={{
                        width: 60,
                        height: 60,
                        transition: "all 1s ease",
                        "&:hover": {
                          transform: "scale(1.25)"
                        }
                      }}
                    />
                  </Box>
                </Tooltip>
              }
              severity="info"
              color="secondary"
              variant="outlined"
            >
              An AI Use Case is one or multiple models which comprise an AI
              system that's a product, project, solution or tool which will
              provide context for governance.
            </Alert>
            <TextField
              helperText="What's the name of this brilliant solution? (required)"
              label="Use Case Name"
              variant="outlined"
            />
            <TextField
              helperText="Add a short, helpful description for this Use Case (required)"
              label="Use Case Description"
              multiline
              rows="4"
              variant="outlined"
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <Button
            sx={{ color: "text.secondary" }}
            onClick={handleCloseCreateUseCase}
          >
            Cancel
          </Button>
          <Button color="secondary" onClick={handleNextCreateUseCase}>
            Next
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog maxWidth="sm" fullWidth open={openCreateUseCase2} scroll="paper">
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <LightbulbTwoTone sx={{ mr: 1 }} />
            <Typography variant="h6">Set Use Case Context</Typography>
          </Box>
        </DialogTitle>
        <DialogContent dividers sx={{ backgroundColor: "action.hover" }}>
          <Stack spacing={1} px={1} pb={2}>
            <Alert
              sx={{ overflow: "visible" }}
              icon={
                <Tooltip
                  title="Did you know the majority of your brain is fat?"
                  placement="left"
                  arrow
                  componentsProps={{
                    tooltip: {
                      sx: {
                        bgcolor: "common.white",
                        color: "common.black",
                        maxWidth: 150,
                        boxShadow: "-5px 3px 13px -2px rgba(0,0,0,0.38)",
                        "& .MuiTooltip-arrow": {
                          color: "common.white"
                        }
                      }
                    }
                  }}
                >
                  <Box height={20}>
                    <CaiIcon
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      sx={{
                        width: 20,
                        height: 20,
                        transition: "all 1s ease",
                        "&:hover": {
                          transform: "scale(1.5)"
                        }
                      }}
                    />
                  </Box>
                </Tooltip>
              }
              severity="info"
              color="secondary"
              variant="outlined"
            >
              Providing a bit of context helps setup your use case for
              governance
            </Alert>
            <Stack spacing={1} px={1} pb={2} sx={{ textAlign: "center" }}>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Does this use case require gates?
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  You can add gates for review & approval at each step
                </Typography>
                <FormControlLabel
                  sx={{ mx: "auto" }}
                  control={<Switch />}
                  label="Require approval gates"
                />
              </Box>
              <Typography variant="subtitle1" fontWeight="bold">
                Use Case Industries
              </Typography>

              <Box
                direction="row"
                spacing={1}
                sx={{ flexWrap: "wrap", justifyContent: "center" }}
              >
                {industries.map((industry, index) => (
                  <>
                    <ToggleButton
                      value={industry.id}
                      selected={isSelected[industry.id]}
                      onChange={() => {
                        toggle(industry.id);
                      }}
                      color="secondary"
                      size="small"
                      sx={{
                        borderColor: isSelected[industry.id]
                          ? "secondary.main"
                          : null,
                        borderRadius: 20,
                        px: 2,
                        mb: 1,
                        mr: 1,
                        py: 0,
                        textTransform: "capitalize"
                      }}
                    >
                      {industry.name}
                    </ToggleButton>
                  </>
                ))}
              </Box>
              <Typography variant="subtitle1" fontWeight="bold">
                Use Case Region Usage / Deployment
              </Typography>
              <Box
                direction="row"
                spacing={1}
                sx={{ flexWrap: "wrap", justifyContent: "center" }}
              >
                {regions.map((region, index) => (
                  <>
                    <ToggleButton
                      value={region.id}
                      selected={isSelected[region.id]}
                      onChange={() => {
                        toggle(region.id);
                      }}
                      color="secondary"
                      size="small"
                      sx={{
                        borderColor: isSelected[region.id]
                          ? "secondary.main"
                          : null,
                        borderRadius: 20,
                        px: 2,
                        mb: 1,
                        mr: 1,
                        py: 0,
                        textTransform: "capitalize"
                      }}
                    >
                      {region.name}
                    </ToggleButton>
                  </>
                ))}
              </Box>
              <Typography variant="subtitle1" fontWeight="bold">
                Use Case AI Risks
              </Typography>

              <Box
                direction="row"
                spacing={1}
                sx={{ flexWrap: "wrap", justifyContent: "center" }}
              >
                {priorityRisks.map((priority, index) => (
                  <>
                    <ToggleButton
                      value={priority.id}
                      selected={isSelected[priority.id]}
                      onChange={() => {
                        toggle(priority.id);
                      }}
                      color="secondary"
                      size="small"
                      sx={{
                        borderColor: isSelected[priority.id]
                          ? "secondary.main"
                          : null,
                        borderRadius: 20,
                        px: 2,
                        mb: 1,
                        mr: 1,
                        py: 0,
                        textTransform: "capitalize"
                      }}
                    >
                      <Box display="flex" alignItems="end">
                        {priority.icon ? (
                          <Box mr={1} lineHeight="18px">
                            <Icon
                              sx={{
                                "&.material-icons": {
                                  fontSize: "14px"
                                }
                              }}
                            >
                              {priority.icon}
                            </Icon>
                          </Box>
                        ) : null}
                        <Box>{priority.name}</Box>
                        {priority.tooltip ? (
                          <Box ml={1} fontSize="15px" lineHeight="18px">
                            <Tooltip title={priority.tooltip}>
                              <InfoOutlined fontSize="inherit" />
                            </Tooltip>
                          </Box>
                        ) : null}
                      </Box>
                    </ToggleButton>
                  </>
                ))}
              </Box>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <Button
            sx={{ color: "text.secondary" }}
            onClick={handleCloseCreateUseCase2}
          >
            Back
          </Button>
          <Button
            color="secondary"
            onClick={handleNextCreateUseCase2}
            href="https://3imxg.csb.app/overview-empty"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
