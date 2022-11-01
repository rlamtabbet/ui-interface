import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Item from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import {
  AttachmentTwoTone,
  ContentCopyTwoTone,
  HelpOutline,
  PreviewTwoTone,
  WebAssetTwoTone
} from "@mui/icons-material";
import {
  Alert,
  Autocomplete,
  Avatar,
  Card,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  TextField
} from "@mui/material";

// Start autocomplete

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

const includedReports = [
  {
    name: "Risk Report - 01/03/2022",
    type: "Risk Report",
    date: "01/03/2022"
  },
  {
    name: "Compliance Report - 01/02/2022",
    type: "Compliance Report",
    date: "01/02/2022"
  }
];

const includedAssessments = [
  {
    name: "Fairness Assessment - 01/11/2022",
    type: "Fairness",
    date: "01/11/2022"
  },
  {
    name: "Fairness Assessment - 01/09/2022",
    type: "Fairness",
    date: "01/09/2022"
  },
  {
    name: "Performance Assessment - 01/06/2022",
    type: "Performance",
    date: "01/06/2022"
  },
  {
    name: "Performance Assessment - 01/03/2022",
    type: "Performance",
    date: "01/03/2022"
  }
];
// End autocomplete

export default function Review() {
  // Start checkboxes
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false
  });

  const handleCheckboxChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };
  // End checkboxes

  // Start datepicker
  const [date, setDate] = React.useState(null);
  // End datepicker

  return (
    <Stack spacing={2}>
      <Item>
        <FormLabel component="legend">Review recipients</FormLabel>
        <Autocomplete
          multiple
          size="small"
          id="includedEmails"
          options={includedEmails}
          getOptionLabel={(option) => option.email}
          defaultValue={[includedEmails[0]]}
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
        <FormLabel component="legend">Attach reports</FormLabel>
        <Autocomplete
          multiple
          size="small"
          id="includedReports"
          options={includedReports}
          getOptionLabel={(option) => option.name}
          defaultValue={[includedReports[0]]}
          filterSelectedOptions
          renderTags={(tagValue, getTagProps) => {
            return tagValue.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                label={option.name}
                variant="outlined"
                size="small"
                icon={<AttachmentTwoTone />}
              />
            ));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Item>
      <Item>
        <FormLabel component="legend">Attach assessments</FormLabel>
        <Autocomplete
          multiple
          size="small"
          id="includedAssessments"
          options={includedAssessments}
          getOptionLabel={(option) => option.name}
          defaultValue={[includedAssessments[0]]}
          filterSelectedOptions
          renderTags={(tagValue, getTagProps) => {
            return tagValue.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                label={option.name}
                variant="outlined"
                size="small"
                icon={<AttachmentTwoTone />}
              />
            ));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Item>
      <Item>
        <FormControl component="fieldset">
          <FormLabel component="legend">Requested return date</FormLabel>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField size="small" {...params} />}
            />
          </LocalizationProvider>
        </FormControl>
      </Item>
      <Item>
        <FormControl component="fieldset">
          <FormLabel component="legend">Review formats</FormLabel>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Send as PDF"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Send as interactive webpage"
          />
        </FormControl>
      </Item>
      <Item>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <WebAssetTwoTone />
              </InputAdornment>
            ),
            endAdornment: (
              <Box display="flex">
                <Box mr={1}>
                  <InputAdornment position="end">
                    <ContentCopyTwoTone />
                  </InputAdornment>
                </Box>
                <Box>
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      component={RouterLink}
                      to="/analyze/preview"
                    >
                      <PreviewTwoTone />
                    </IconButton>
                  </InputAdornment>
                </Box>
              </Box>
            )
          }}
          variant="outlined"
          size="small"
          value="https://review.credo.ai/BWRm3jeYjVH86DV3wFDBgH"
        />
      </Item>
    </Stack>
  );
}
