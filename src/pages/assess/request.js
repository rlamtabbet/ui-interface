import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Item from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import {
  Close,
  ContentCopyOutlined,
  InsertChartTwoTone
} from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Autocomplete,
  Avatar,
  Card,
  Chip,
  FormControl,
  FormLabel,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField
} from "@mui/material";

export default function Request() {
  // Start chips
  const [chipVisible, setChipVisible] = React.useState(0);

  const handleDelete = (event, newValue) => {
    setChipVisible(newValue);
  };
  // End chips

  // Start datepicker
  const [date, setDate] = React.useState(null);
  const handleDateChange = (event, newValue) => {
    setDate(newValue);
  };
  // End datepicker

  // Start autocomplete
  const assessedModels = [
    "Intent Classification (Prod)",
    "Intent Classification (v2)",
    "Response Generation (Prod)",
    "Response Generation (v2)"
  ];
  const [selectedAssessedModels, setAssessedModels] = React.useState([]);
  const [inputAssessedModels, setInputAssessedModels] = React.useState("");
  // End autocomplete

  const assessmentType = [
    "Fairness",
    "Performance",
    "Transparency",
    "Security",
    "Privacy"
  ];
  const [selectedAssessmentType, setAssessmentType] = React.useState([]);
  const [inputAssessmentType, setInputAssessmentType] = React.useState("");

  const policies = [
    "FAIR.T1",
    "FAIR.T2",
    "FAIR.T3",
    "FAIR.T4",
    "FAIR.P1",
    "FAIR.P2",
    "FAIR.P3",
    "FAIR.P4",
    "FAIR.P5",
    "FAIR.P6",
    "FAIR.P7",
    "FAIR.P8",
    "FAIR.P9"
  ];
  const [selectedPolicies, setPolicies] = React.useState([]);
  const [inputPolicies, setInputPolicies] = React.useState("");

  // Start toggle
  const [apiKey, setApiKey] = React.useState("");
  const handleApiKey = () => {
    setApiKey(
      "MqGysgb6nD1XscekfLnNuprRJbHMHMu3Hsah7anA2VzZR9X9OiabiFfqTkHCUl_w"
    );
  };
  // End toggle

  return (
    <>
      <Box p={1} display="flex" alignItems="center" bgcolor="background.paper">
        <Box flexGrow={1}>Request Assessment</Box>
        <Box mr={1}>
          <Button size="small" variant="outlined" color="inherit">
            Previous Requests
          </Button>
        </Box>
        <Box mr={1}>
          <Button size="small" variant="contained" color="secondary">
            Send Request
          </Button>
        </Box>
      </Box>
      <Divider />
      <Grid
        container
        sx={{
          height: "calc(100vh - 50px)",
          paddingBottom: "150px",
          position: "relative"
        }}
      >
        <Grid
          item
          xs={8}
          sx={{
            height: "calc(100vh - 50px)",
            paddingBottom: 10,
            overflow: "auto"
          }}
        >
          <Item p={2}>
            <Card sx={{ p: 3 }}>
              <Box mb={2}>
                <Typography gutterBottom sx={{ mt: -1 }}>
                  Request recipients
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip
                    onDelete={handleDelete}
                    icon={
                      <Avatar
                        src="https://mui.com/static/images/avatar/1.jpg"
                        sx={{ width: 24, height: 24 }}
                      />
                    }
                    label="Tyler Lee"
                    variant="outlined"
                  />
                  <Chip
                    onDelete={handleDelete}
                    icon={
                      <Avatar
                        src="https://mui.com/static/images/avatar/5.jpg"
                        sx={{ width: 24, height: 24 }}
                      />
                    }
                    label="Sam Mavis"
                    variant="outlined"
                  />
                  <Chip
                    onDelete={handleDelete}
                    icon={
                      <Avatar
                        alt="Data Science"
                        sx={{ width: 24, height: 24 }}
                      />
                    }
                    label="Data Science Team"
                    variant="outlined"
                  />
                </Stack>
              </Box>
              <Stack spacing={2}>
                <Item>
                  <FormLabel component="legend">
                    Which models will be assessed?
                  </FormLabel>

                  <Autocomplete
                    size="small"
                    multiple
                    value={selectedAssessedModels}
                    onChange={(event, newAssessedModels) => {
                      setAssessedModels(newAssessedModels);
                    }}
                    inputValue={inputAssessedModels}
                    onInputChange={(event, newInputAssessedModels) => {
                      setInputAssessedModels(newInputAssessedModels);
                    }}
                    id="assessmentType"
                    options={assessedModels}
                    renderInput={(params) => (
                      <TextField
                        placeholder="select models"
                        helperText="Selecting specific models to be assessed."
                        {...params}
                        variant="outlined"
                      />
                    )}
                  />
                </Item>
                <Item>
                  <FormLabel component="legend">
                    Which assessment types are required?
                  </FormLabel>
                  <Autocomplete
                    size="small"
                    multiple
                    value={selectedAssessmentType}
                    onChange={(event, newAssessmentType) => {
                      setAssessmentType(newAssessmentType);
                    }}
                    inputValue={inputAssessmentType}
                    onInputChange={(event, newInputAssessmentType) => {
                      setInputAssessmentType(newInputAssessmentType);
                    }}
                    id="assessmentType"
                    options={assessmentType}
                    renderInput={(params) => (
                      <TextField
                        placeholder="select assessment type"
                        helperText="Selecting assessment type will add technical requirements to the spec."
                        {...params}
                        variant="outlined"
                      />
                    )}
                  />
                </Item>
                <Item>
                  <FormLabel component="legend">
                    Are there any specific related policies?
                  </FormLabel>
                  <Autocomplete
                    size="small"
                    multiple
                    value={selectedPolicies}
                    onChange={(event, newPolicies) => {
                      setPolicies(newPolicies);
                    }}
                    inputValue={inputPolicies}
                    onInputChange={(event, newInputPolicies) => {
                      setInputPolicies(newInputPolicies);
                    }}
                    id="policies"
                    options={policies}
                    renderInput={(params) => (
                      <TextField
                        placeholder="select policies"
                        helperText="Connect this request to an outstanding tech policy."
                        {...params}
                        variant="outlined"
                      />
                    )}
                  />
                </Item>
                {selectedAssessmentType.includes("Fairness") ? (
                  <Item>
                    <FormLabel>Fairness Assessment will include:</FormLabel>
                    <List dense disablePadding>
                      <ListItem>
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
                      </ListItem>
                      <Divider />
                      <ListItem>
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
                                  FAIR.T2 &amp; FAIR.T3
                                </span>
                                )
                              </Box>
                              <Box>
                                Dataset: AmbigQA, Stages: Development &amp;
                                Validation
                              </Box>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider />
                      <ListItem>
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
                      </ListItem>
                      <Divider />
                      <ListItem>
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
                      </ListItem>
                    </List>
                  </Item>
                ) : null}
                <Item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      When is this task due?
                    </FormLabel>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        value={date}
                        onChange={(newValue) => {
                          setDate(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField size="small" {...params} />
                        )}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </Item>
              </Stack>
            </Card>
          </Item>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            bgcolor: "background.paper",
            borderLeft: "1px solid rgba(0,0,0,0.1)",
            height: "calc(100vh - 50px)",
            paddingBottom: "50px",
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
                  <Box flexGrow={1}>Assessment Spec</Box>
                  <Box>
                    <IconButton size="small">
                      <Close fontSize="inherit" />
                    </IconButton>
                  </Box>
                </Box>
              </Item>
              <Item sx={{ px: 2 }}>
                <Box fontSize="body2.fontSize">
                  <Box>
                    The users will receive an email and task with all technical
                    requirements in an{" "}
                    <Link
                      sx={{ flexShrink: 0, ml: 0.2, mr: 0.5 }}
                      href="https://credoai-lens.readthedocs.io/en/latest/notebooks/quickstart.html?highlight=spec#Alignment-Spec"
                      target="_blank"
                      variant="body2"
                    >
                      Assessment Spec
                    </Link>{" "}
                    for{" "}
                    <Link
                      sx={{ flexShrink: 0, ml: 0.2, mr: 0.5 }}
                      href="https://github.com/credo-ai/credoai_lens"
                      target="_blank"
                      variant="body2"
                    >
                      Credo AI Lens
                    </Link>
                  </Box>
                </Box>
              </Item>
              <Item sx={{ px: 2 }}>
                <Typography>Helper Files</Typography>
                <Stack spacing={1} direction="row">
                  <Button size="small" variant="outlined" color="secondary">
                    Assessment Spec
                  </Button>
                  <Button size="small" variant="outlined" color="secondary">
                    Quickstart
                  </Button>
                </Stack>
              </Item>
              <Item sx={{ px: 2 }}>
                <Typography>Credo AI Lens Connection Info</Typography>
              </Item>
              <Item sx={{ px: 2 }}>
                <Box display="flex">
                  <Box
                    flexGrow={1}
                    overflow="auto"
                    sx={{
                      backgroundColor: "action.disabledBackground",
                      fontSize: "caption.fontSize",
                      p: 1
                    }}
                  >
                    <code>
                      {`
                  TENANT=companyco
                  `}
                    </code>
                  </Box>
                  <Box>
                    <IconButton size="small">
                      <ContentCopyOutlined />
                    </IconButton>
                  </Box>
                </Box>
              </Item>
              <Item sx={{ px: 2 }}>
                <Box display="flex">
                  <Box
                    flexGrow={1}
                    overflow="auto"
                    sx={{
                      backgroundColor: "action.disabledBackground",
                      fontSize: "caption.fontSize",
                      p: 1
                    }}
                  >
                    <code>
                      {`
                  CREDO_URL=https://api.credo.ai
                  `}
                    </code>
                  </Box>
                  <Box>
                    <IconButton size="small">
                      <ContentCopyOutlined />
                    </IconButton>
                  </Box>
                </Box>
              </Item>
              <Item sx={{ px: 2 }}>
                {!apiKey ? (
                  <Alert
                    sx={{ mb: 1, py: 0, pr: 3, pl: 1, alignItems: "center" }}
                    icon={false}
                    severity="info"
                    action={
                      <Button
                        color="inherit"
                        size="small"
                        onClick={handleApiKey}
                      >
                        Generate
                      </Button>
                    }
                  >
                    <AlertTitle sx={{ fontSize: "14px", mb: -0.5 }}>
                      No current API key
                    </AlertTitle>
                    Generate one now?
                  </Alert>
                ) : null}
                <Box display="flex">
                  <Box
                    flexGrow={1}
                    overflow="auto"
                    sx={{
                      backgroundColor: "action.disabledBackground",
                      fontSize: "caption.fontSize",
                      p: 1
                    }}
                  >
                    <code>
                      {`
                  API_KEY=${apiKey ? apiKey : "<your API Key>"}
                  `}
                    </code>
                  </Box>
                  <Box>
                    <IconButton size="small">
                      <ContentCopyOutlined />
                    </IconButton>
                  </Box>
                </Box>
              </Item>
              <Item sx={{ px: 2 }}>
                <Typography>Assessment Info</Typography>
              </Item>
              <Item sx={{ px: 2 }}>
                <Box display="flex">
                  <Box
                    flexGrow={1}
                    overflow="auto"
                    sx={{
                      backgroundColor: "action.disabledBackground",
                      fontSize: "caption.fontSize",
                      p: 1
                    }}
                  >
                    <code>
                      {`
                  ai_solution_id: str = njkoaJTNbJFAey5P3vYdk7
                  `}
                    </code>
                  </Box>
                  <Box>
                    <IconButton size="small">
                      <ContentCopyOutlined />
                    </IconButton>
                  </Box>
                </Box>
              </Item>

              {selectedAssessedModels.includes(
                "Intent Classification (Prod)"
              ) ? (
                <Item sx={{ px: 2 }}>
                  <Box display="flex">
                    <Box
                      flexGrow={1}
                      overflow="auto"
                      sx={{
                        backgroundColor: "action.disabledBackground",
                        fontSize: "caption.fontSize",
                        p: 1
                      }}
                    >
                      <code>
                        {`
                    model_id: str = 9ncTvNzkniTRoEphKaWr6c # Intent Classification (Prod)
                    `}
                      </code>
                    </Box>
                    <Box>
                      <IconButton size="small">
                        <ContentCopyOutlined />
                      </IconButton>
                    </Box>
                  </Box>
                </Item>
              ) : null}
              {selectedAssessedModels.includes("Intent Classification (v2)") ? (
                <Item sx={{ px: 2 }}>
                  <Box display="flex">
                    <Box
                      flexGrow={1}
                      overflow="auto"
                      sx={{
                        backgroundColor: "action.disabledBackground",
                        fontSize: "caption.fontSize",
                        p: 1
                      }}
                    >
                      <code>
                        {`
                    model_id: str = hs4SQRiMbMtsJB8dZ2DyK4 # Intent Classification (v2)
                    `}
                      </code>
                    </Box>
                    <Box>
                      <IconButton size="small">
                        <ContentCopyOutlined />
                      </IconButton>
                    </Box>
                  </Box>
                </Item>
              ) : null}
              {selectedAssessedModels.includes("Response Generation (Prod)") ? (
                <Item sx={{ px: 2 }}>
                  <Box display="flex">
                    <Box
                      flexGrow={1}
                      overflow="auto"
                      sx={{
                        backgroundColor: "action.disabledBackground",
                        fontSize: "caption.fontSize",
                        p: 1
                      }}
                    >
                      <code>
                        {`
                    model_id: str = bs3FR8sEd2uNJ4VFosnWT4 # Response Generation (Prod)
                    `}
                      </code>
                    </Box>
                    <Box>
                      <IconButton size="small">
                        <ContentCopyOutlined />
                      </IconButton>
                    </Box>
                  </Box>
                </Item>
              ) : null}
              {selectedAssessedModels.includes("Response Generation (v2)") ? (
                <Item sx={{ px: 2 }}>
                  <Box display="flex">
                    <Box
                      flexGrow={1}
                      overflow="auto"
                      sx={{
                        backgroundColor: "action.disabledBackground",
                        fontSize: "caption.fontSize",
                        p: 1
                      }}
                    >
                      <code>
                        {`
                    model_id: str = yxJox6ddCztbMuHbzQcab4 # Response Generation (v2)
                    `}
                      </code>
                    </Box>
                    <Box>
                      <IconButton size="small">
                        <ContentCopyOutlined />
                      </IconButton>
                    </Box>
                  </Box>
                </Item>
              ) : null}
              <Box px={2}>
                <Button
                  component={RouterLink}
                  to="/assess/preview"
                  size="small"
                  variant="outlined"
                  color="secondary"
                >
                  Preview Request
                </Button>
              </Box>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
