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

import { Close } from "@mui/icons-material";
import {
  Autocomplete,
  Avatar,
  Card,
  Chip,
  FormControl,
  FormLabel,
  TextField
} from "@mui/material";

export default function RequestAlignment() {
  // Start datepicker
  const [date, setDate] = React.useState(null);
  const handleDateChange = (event, newValue) => {
    setDate(newValue);
  };
  // End datepicker

  // Start autocomplete
  const alignmentType = ["Risk", "Policy", "Technical"];
  const [selectedAlignmentType, setAlignmentType] = React.useState([]);
  const [inputAlignmentType, setInputAlignmentType] = React.useState("");
  // End autocomplete

  const riskType = [
    "Fairness",
    "Performance",
    "Transparency",
    "Security",
    "Privacy"
  ];
  const [selectedRiskType, setRiskType] = React.useState([]);
  const [inputRiskType, setInputRiskType] = React.useState("");

  const includedEmails = [
    {
      name: "Alex Ivanov",
      email: "Alex.Ivanov@ai-auditors.com",
      avatar:
        "https://images.generated.photos/RlIDkNQWGOM7L3-BCJTma118uBx7oiUHIDGOKqW7SDY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjU1MjUzLmpwZw.jpg"
    },
    {
      name: "Tyler Lee",
      email: "Tyler.Lee@CompanyCo.com",
      avatar: "https://mui.com/static/images/avatar/1.jpg"
    },
    {
      name: "Aditi Devi",
      email: "Aditi.Devi@CompanyCo.com",
      avatar:
        "https://images.generated.photos/P4I1VdkY8QLaaySeBO7HkbnCixwCMktMnP9mclN6gog/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODExNjM3LmpwZw.jpg"
    },
    {
      name: "Fei Simmons",
      email: "Fei.Simmons@CompanyCo.com",
      avatar: "https://mui.com/static/images/avatar/4.jpg"
    },
    {
      name: "Pete Barry",
      email: "pb@AI-Recruiting.com",
      avatar: "https://mui.com/static/images/avatar/5.jpg"
    },
    {
      name: "Chad Holdings",
      email: "ch@AI-Recruiting.com",
      avatar: "https://mui.com/static/images/avatar/2.jpg"
    }
  ];

  return (
    <>
      <Box p={1} display="flex" alignItems="center" bgcolor="background.paper">
        <Box flexGrow={1}>Request Alignment</Box>
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
              <Stack spacing={2}>
                <Item>
                  <FormLabel component="legend">Request recipients</FormLabel>
                  <Autocomplete
                    multiple
                    size="small"
                    id="includedEmails"
                    options={includedEmails}
                    getOptionLabel={(option) => option.email}
                    defaultValue={[includedEmails[2]]}
                    filterSelectedOptions
                    renderTags={(tagValue, getTagProps) => {
                      return tagValue.map((option, index) => (
                        <Chip
                          {...getTagProps({ index })}
                          label={option.email}
                          variant="outlined"
                          size="small"
                          avatar={<Avatar src={option.avatar} />}
                        />
                      ));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Item>
                <Item>
                  <FormLabel component="legend">
                    Which type of alignment?
                  </FormLabel>

                  <Autocomplete
                    size="small"
                    multiple
                    value={selectedAlignmentType}
                    onChange={(event, newAlignmentType) => {
                      setAlignmentType(newAlignmentType);
                    }}
                    inputValue={inputAlignmentType}
                    onInputChange={(event, newInputAlignmentType) => {
                      setInputAlignmentType(newInputAlignmentType);
                    }}
                    id="alignmentType"
                    options={alignmentType}
                    renderInput={(params) => (
                      <TextField
                        placeholder="select alignment type"
                        helperText="Selecting specific models to be assessed."
                        {...params}
                        variant="outlined"
                      />
                    )}
                  />
                </Item>

                {selectedAlignmentType.includes("Risk") ? (
                  <Item>
                    <FormLabel component="legend">Which risk(s)?</FormLabel>
                    <Autocomplete
                      size="small"
                      multiple
                      value={selectedRiskType}
                      onChange={(event, newRiskType) => {
                        setRiskType(newRiskType);
                      }}
                      inputValue={inputRiskType}
                      onInputChange={(event, newInputRiskType) => {
                        setInputRiskType(newInputRiskType);
                      }}
                      id="riskType"
                      options={riskType}
                      renderInput={(params) => (
                        <TextField
                          placeholder="select risk(s) type"
                          helperText="Select the proper risk for these recipients."
                          {...params}
                          variant="outlined"
                        />
                      )}
                    />
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
                  <Box flexGrow={1}>Tips</Box>
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
                    Before you finalize your alignment and move on to
                    assessments, you will need to ensure you've selected the
                    right:
                  </Box>
                  <Box>
                    <ul>
                      <li>Relevant risks</li>
                      <li>Risk calculations</li>
                      <li>Policies for compliance</li>
                      <li>Technical requirements for assessments</li>
                    </ul>
                  </Box>
                </Box>
              </Item>
              <Item sx={{ px: 2 }}>
                <Typography gutterBottom>
                  What exactly will be requested?
                </Typography>
                <Typography variant="body2" gutterBottom>
                  A brief questionnaire will be sent to the recipients walking
                  through questions pertaining to the type of alignment you
                  request.
                </Typography>
                <Typography variant="body2">
                  Once all the responses are in you will review and select the
                  final alignment answers with your stakeholders.
                </Typography>
                <Box mt={1}>
                  <Button
                    component={RouterLink}
                    to="/align/alignment"
                    size="small"
                    variant="outlined"
                    color="secondary"
                  >
                    Preview Alignment
                  </Button>
                </Box>
              </Item>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
