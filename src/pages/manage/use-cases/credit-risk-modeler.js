import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Item from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import {
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Avatar,
  Link,
  Grid,
  ListItemAvatar,
  ListSubheader,
  IconButton,
  MenuItem,
  Menu
} from "@mui/material";
import {
  BalanceTwoTone,
  AssignmentLateTwoTone,
  BentoTwoTone,
  BusinessTwoTone,
  CheckCircleTwoTone,
  DoNotDisturb,
  Inventory2TwoTone,
  Launch,
  LightbulbTwoTone,
  ListAltTwoTone,
  Send,
  Speed,
  WarningTwoTone,
  ViewWeekTwoTone,
  WorkTwoTone,
  AdminPanelSettingsTwoTone,
  LanguageTwoTone,
  CorporateFareTwoTone,
  TodayTwoTone,
  FileCopy,
  TagTwoTone,
  WidgetsTwoTone,
  MoreVert,
  PersonPinTwoTone,
  CreditScoreTwoTone
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

export default function CreditRiskModeler() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // start model menu
  const [anchorElModel, setAnchorElModel] = React.useState(null);
  const openModel = Boolean(anchorElModel);
  const handleClickModel = (event) => {
    setAnchorElModel(event.currentTarget);
  };
  const handleCloseModel = () => {
    setAnchorElModel(null);
  };
  // end model menu
  const models = [
    {
      name: "Candidate Discovery"
    },
    {
      name: "Resume Screener"
    },
    {
      name: "CV Filtering"
    },
    {
      name: "Recruiter Chatbot"
    },
    {
      name: "NLP Engine"
    },
    {
      name: "Automated Interview"
    },
    {
      name: "Talent Acquisition"
    },
    {
      name: "Geo Filter"
    },
    {
      name: "Stale Pruning"
    },
    {
      name: "Job Site Scanner"
    }
  ];
  return (
    <>
      <Stack spacing={2}>
        <Card>
          <CardContent>
            <Stack mx={0.5} spacing={1}>
              <Box
                flexGrow={1}
                px={1}
                mb={1}
                display="flex"
                alignItems="center"
              >
                <Box fontSize="50px" mr={2}>
                  <CreditScoreTwoTone fontSize="inherit" color="warning" />
                </Box>
                <Box flexGrow={1}>
                  <Typography fontWeight="bold">Credit Risk Modeler</Typography>
                  <Typography variant="body2" gutterBottom>
                    This AI use case predicts credit card default in the
                    following month using previous payment history, along with
                    other factors. While this is useful to us in and of
                    itself...
                  </Typography>
                  <Button
                    endIcon={<Launch />}
                    size="small"
                    variant="outlined"
                    color="primary"
                    href="https://app.credo.ai/use-cases/vAC2G8UNG2Rgf54RBTDnDN/"
                    target="_blank"
                  >
                    View Use Case
                  </Button>
                </Box>
              </Box>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList onChange={handleChange}>
                    <Tab label="AI System Card" value="1" />
                    <Tab label="Models & Datasets" value="2" />
                    <Tab label="Owners & Contributors" value="3" />
                    <Tab label="Config & Metadata" value="4" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Card
                    sx={{
                      p: 2
                    }}
                    raised
                  >
                    <Stack spacing={1}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Credit Risk Modeler
                      </Typography>
                      <Item>
                        This AI use case predicts credit card default in the
                        following month using previous payment history, along
                        with other factors. While this is useful to us in and of
                        itself, the main model is also input to mitigation
                        strategies, as one of the inputs to other financial
                        models.
                      </Item>
                      <Divider />
                      <Item>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          fontWeight="bold"
                        >
                          Compliance Status
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          <Card
                            variant="outlined"
                            sx={{
                              p: 1,
                              textAlign: "center",
                              flexGrow: 1
                            }}
                          >
                            <Box display="flex" justifyContent="center">
                              <Box display="flex" mx="auto">
                                <Box display="flex" justifyContent="center">
                                  <Box
                                    height="40px"
                                    sx={{
                                      position: "relative",
                                      display: "inline-flex"
                                    }}
                                    mr={1}
                                    color="success.light"
                                  >
                                    <CircularProgress
                                      variant="determinate"
                                      value="92"
                                      color="inherit"
                                      thickness={6}
                                      size={40}
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
                                        size={40}
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
                                        92%
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box textAlign="left">
                                  <Box
                                    fontSize="13px"
                                    fontWeight="bold"
                                    color="text.secondary"
                                  >
                                    Credo AI Fairness Pack
                                  </Box>
                                  <Box
                                    fontSize="caption.fontSize"
                                    color="text.secondary"
                                  >
                                    12/13 Policies Complete
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Card>
                          <Card
                            variant="outlined"
                            sx={{
                              p: 1,
                              textAlign: "center",
                              flexGrow: 1
                            }}
                          >
                            <Box display="flex" justifyContent="center">
                              <Box display="flex" mx="auto">
                                <Box display="flex" justifyContent="center">
                                  <Box
                                    height="40px"
                                    sx={{
                                      position: "relative",
                                      display: "inline-flex"
                                    }}
                                    mr={1}
                                    color="warning.light"
                                  >
                                    <CircularProgress
                                      variant="determinate"
                                      value="60"
                                      color="inherit"
                                      thickness={6}
                                      size={40}
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
                                        size={40}
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
                                        60%
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box textAlign="left">
                                  <Box
                                    fontSize="13px"
                                    fontWeight="bold"
                                    color="text.secondary"
                                  >
                                    FED AI Financial Standard
                                  </Box>
                                  <Box
                                    fontSize="caption.fontSize"
                                    color="text.secondary"
                                  >
                                    14/23 Policies Complete
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Card>
                        </Stack>
                      </Item>
                      <Item>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          fontWeight="bold"
                        >
                          AI Risk Status
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          <Card
                            variant="outlined"
                            sx={{
                              p: 1,
                              textAlign: "center",
                              flexGrow: 1
                            }}
                          >
                            <Box display="flex" justifyContent="center">
                              <Box display="flex" mx="auto">
                                <Box display="flex" justifyContent="center">
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      borderRadius: 2,
                                      p: 0.5,
                                      mr: 1
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        display: "flex",
                                        textAlign: "center",
                                        color: "white",
                                        backgroundColor: "success.light",
                                        borderRadius: 2,
                                        px: 1.5,
                                        py: 0.5
                                      }}
                                    >
                                      <BalanceTwoTone
                                        sx={{ mr: 0.5 }}
                                        fontSize="small"
                                      />
                                      <Typography variant="body2">
                                        LOW
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box textAlign="left">
                                  <Box
                                    fontSize="body2.fontSize"
                                    fontWeight="bold"
                                    color="text.secondary"
                                  >
                                    Fairness Risk
                                  </Box>
                                  <Box
                                    fontSize="caption.fontSize"
                                    color="text.secondary"
                                  >
                                    0 Risk Issues
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Card>
                          <Card
                            variant="outlined"
                            sx={{
                              p: 1,
                              textAlign: "center",
                              flexGrow: 1
                            }}
                          >
                            <Box display="flex" justifyContent="center">
                              <Box display="flex" mx="auto">
                                <Box display="flex" justifyContent="center">
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      borderRadius: 2,
                                      p: 0.5,
                                      mr: 1
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        display: "flex",
                                        textAlign: "center",
                                        color: "white",
                                        backgroundColor: "warning.light",
                                        borderRadius: 2,
                                        px: 1.5,
                                        py: 0.5
                                      }}
                                    >
                                      <Speed
                                        sx={{ mr: 0.5 }}
                                        fontSize="small"
                                      />
                                      <Typography variant="body2">
                                        MODERATE
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box textAlign="left">
                                  <Box
                                    fontSize="body2.fontSize"
                                    fontWeight="bold"
                                    color="text.secondary"
                                  >
                                    Performance Risk
                                  </Box>
                                  <Box
                                    fontSize="caption.fontSize"
                                    color="text.secondary"
                                  >
                                    2 Risk Issues
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Card>
                        </Stack>
                      </Item>
                    </Stack>
                  </Card>
                </TabPanel>
                <TabPanel value="2">
                  <Card variant="outlined">
                    <List disablePadding>
                      {models.map((model, index) => (
                        <>
                          <ListItem disablePadding>
                            <ListItemButton onClick={handleClickModel}>
                              <ListItemIcon sx={{ mr: -2 }}>
                                <WidgetsTwoTone color="secondary" />
                              </ListItemIcon>
                              <ListItemText
                                primary={model.name}
                                secondary="Training Dataset: Employee_CV_resumes v2.1"
                              />
                              <ListItemSecondaryAction>
                                <MoreVert />
                              </ListItemSecondaryAction>
                            </ListItemButton>
                          </ListItem>
                          <Divider />
                        </>
                      ))}
                    </List>
                  </Card>
                </TabPanel>
                <TabPanel value="3">
                  <Card variant="outlined">
                    <List dense disablePadding>
                      <ListSubheader
                        sx={{ bgcolor: "action.hover", lineHeight: 2 }}
                      >
                        Owners
                      </ListSubheader>
                      <Divider />
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar
                            src="https://mui.com/static/images/avatar/4.jpg"
                            sx={{ width: 32, height: 32 }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Fei Simmons"
                          secondary="Product Manager"
                        />
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar
                            src="https://mui.com/static/images/avatar/1.jpg"
                            sx={{ width: 32, height: 32 }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Tyler Lee"
                          secondary="Data Science Lead"
                        />
                      </ListItem>
                      <Divider />
                      <ListSubheader
                        sx={{ bgcolor: "action.hover", lineHeight: 2 }}
                      >
                        Contributors
                      </ListSubheader>
                      <Divider />
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar
                            src="https://mui.com/static/images/avatar/2.jpg"
                            sx={{ width: 32, height: 32 }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Sam Mavis"
                          secondary="Compliance Team Member"
                        />
                      </ListItem>
                    </List>
                  </Card>
                </TabPanel>
                <TabPanel value="4">
                  <Card variant="outlined">
                    <List dense disablePadding>
                      <ListItem>
                        <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                          <TagTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Use Case ID (for Credo AI Lens & troubleshooting)"
                          secondary={
                            <>
                              <Box fontFamily="courier">
                                qtmMy6oZcFbPFduT8ThcMh
                              </Box>
                            </>
                          }
                        />
                        <ListItemSecondaryAction>
                          <IconButton size="small">
                            <FileCopy fontSize="small" />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                          <TodayTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Creation Date & Time"
                          secondary={
                            <>
                              <Box>Friday January 4, 2022 at 3:23 PM</Box>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                          <CorporateFareTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Industries"
                          secondary={
                            <>
                              <Stack
                                sx={{ mt: 0.5 }}
                                direction="row"
                                spacing={1}
                              >
                                <Chip
                                  size="small"
                                  icon={<CorporateFareTwoTone />}
                                  label="Enterprise Software"
                                  variant="outlined"
                                />
                              </Stack>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                          <LanguageTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Deployment Regions"
                          secondary={
                            <>
                              <Stack
                                sx={{ mt: 0.5 }}
                                direction="row"
                                spacing={1}
                              >
                                <Chip
                                  size="small"
                                  icon={<LanguageTwoTone />}
                                  label="North America"
                                  variant="outlined"
                                />
                                <Chip
                                  size="small"
                                  icon={<LanguageTwoTone />}
                                  label="EU"
                                  variant="outlined"
                                />
                              </Stack>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                          <AssignmentLateTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Primary Risks"
                          secondary={
                            <>
                              <Stack
                                sx={{ mt: 0.5 }}
                                direction="row"
                                spacing={1}
                              >
                                <Chip
                                  size="small"
                                  icon={<BalanceTwoTone />}
                                  label="Fairness"
                                  variant="outlined"
                                />
                                <Chip
                                  size="small"
                                  icon={<Speed />}
                                  label="Performance"
                                  variant="outlined"
                                />
                              </Stack>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                          <WarningTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="High Risk Areas"
                          secondary={
                            <>
                              <Stack
                                sx={{ mt: 0.5 }}
                                direction="row"
                                spacing={1}
                              >
                                <Chip
                                  size="small"
                                  icon={<WorkTwoTone />}
                                  label="Employment, management & access to self-employment"
                                  variant="outlined"
                                />
                              </Stack>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                          <AdminPanelSettingsTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Personal Data Used (PII)"
                          secondary={<>Yes</>}
                        />
                      </ListItem>

                      <Divider />
                      <ListItem>
                        <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                          <AdminPanelSettingsTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Human in the Loop"
                          secondary={<>Mix of both</>}
                        />
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                          <WarningTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="High Risk Areas"
                          secondary={
                            <>
                              <Stack
                                sx={{ mt: 0.5 }}
                                direction="row"
                                spacing={1}
                              >
                                <Chip
                                  size="small"
                                  icon={<WorkTwoTone />}
                                  label="Employment, management & access to self-employment"
                                  variant="outlined"
                                />
                              </Stack>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider />
                      <ListItem>
                        <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                          <ViewWeekTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Require Approval Gates"
                          secondary="Require review and approval for requirements"
                        />
                      </ListItem>
                    </List>
                  </Card>
                </TabPanel>
              </TabContext>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
      <Menu
        anchorEl={anchorElModel}
        open={openModel}
        onClose={handleCloseModel}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <MenuItem
          onClick={handleCloseModel}
          component={RouterLink}
          to="/align/assessment-plans/model"
        >
          Edit Assessment Plan
        </MenuItem>
        <MenuItem
          onClick={handleCloseModel}
          component={RouterLink}
          to="/assess/resume-screener/latest"
        >
          View Latest Assessment
        </MenuItem>
        <MenuItem
          onClick={handleCloseModel}
          href="https://app.credo.ai/models/rDxQrXwivaehSwJ3CGuky5/"
          target="_blank"
        >
          Manage Model Registration
        </MenuItem>
      </Menu>
    </>
  );
}
