import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
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
  Close,
  GridOnTwoTone,
  InfoOutlined,
  InsertChartTwoTone,
  Launch,
  LightbulbTwoTone,
  WidgetsTwoTone
} from "@mui/icons-material";
import {
  Autocomplete,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  ListItemButton,
  ListItemSecondaryAction,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  ToggleButton
} from "@mui/material";
import { Link } from "react-router-dom";

// Start autocomplete

const useCaseFeatures = ["NLP", "Chat", "HR"];
// End autocomplete

export default function Define() {
  // Start checkboxes
  const [value, setValue] = React.useState({
    fairness: false,
    transparency: false,
    performance: false,
    security: false
  });
  // Start metric type
  const [metricType1, setMetricType1] = React.useState("");
  const handleMetricType1 = (event) => {
    setMetricType1(event.target.value);
  };
  const [metricDataset1, setMetricDataset1] = React.useState("");
  const handleMetricDataset1 = (event) => {
    setMetricDataset1(event.target.value);
  };
  const [metricType2, setMetricType2] = React.useState("");
  const handleMetricType2 = (event) => {
    setMetricType2(event.target.value);
  };
  const [metricDataset2, setMetricDataset2] = React.useState("");
  const handleMetricDataset2 = (event) => {
    setMetricDataset2(event.target.value);
  };
  const [metricType3, setMetricType3] = React.useState("");
  const handleMetricType3 = (event) => {
    setMetricType3(event.target.value);
  };
  const [metricDataset3, setMetricDataset3] = React.useState("");
  const handleMetricDataset3 = (event) => {
    setMetricDataset3(event.target.value);
  };
  const [metricType4, setMetricType4] = React.useState("");
  const handleMetricType4 = (event) => {
    setMetricType4(event.target.value);
  };
  const [metricDataset4, setMetricDataset4] = React.useState("");
  const handleMetricDataset4 = (event) => {
    setMetricDataset4(event.target.value);
  };
  // End metric type

  // Start add metric
  const [addMetric, setAddMetric] = React.useState(false);
  const toggleAddMetric = () => {
    setAddMetric(!addMetric);
  };
  const [addMetric2, setAddMetric2] = React.useState(false);
  const toggleAddMetric2 = () => {
    setAddMetric2(!addMetric2);
  };
  const metricTypes = [
    "false_positive_rate",
    "false_negative_rate",
    "false_discovery_rate",
    "false_omission_rate",
    "true_positive_rate",
    "precision_score",
    "accuracy_score",
    "balanced_accuracy_score",
    "matthews_correlation_coefficient",
    "fl_score",
    "average_precision_score",
    "roc_auc_score",
    "selection_rate",
    "overprediction",
    "underprediction",
    "demographic_parity_difference",
    "demographic_parity_ratio",
    "equalized_odds_difference",
    "equal_opportunith_difference",
    "dataset_sensitive_attribute_encoding"
  ];
  // End add metric

  return (
    <Card>
      <CardContent>
        <Box flexGrow={1} px={1} mb={1} display="flex" alignItems="center">
          <Box flexGrow={1}>
            <Typography fontWeight="bold">
              Requirements Input - Metrics
            </Typography>
            <Typography variant="body2">requested by: Fei Simmons</Typography>
          </Box>
          <Box>
            <Typography variant="body2">Sent: Jan 21 4:32 PM</Typography>
            <Typography variant="body2">Due: Jan 27</Typography>
          </Box>
        </Box>
        <Stack mx={0.5} spacing={1}>
          <Card variant="outlined">
            <List dense dis>
              <Box display="flex" flexWrap="wrap">
                <ListItem sx={{ width: 1 / 2 }}>
                  <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                    <LightbulbTwoTone />
                  </ListItemIcon>
                  <ListItemText primary="AI Recruiting Software" />
                </ListItem>
                <ListItem sx={{ width: 1 / 2 }}>
                  <ListItemIcon sx={{ mr: -2 }}>
                    <WidgetsTwoTone color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Models: Candidate Search Model, Resume Screener Model" />
                </ListItem>
              </Box>
            </List>
          </Card>
          <Item>
            <Card variant="outlined">
              <CardContent>
                Hey can you help me select the proper metrics for assessing
                Fairness of the AI Recruiting Software?
              </CardContent>
            </Card>
          </Item>
          <Item>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">
                How is fairness defined for this use case?
              </Typography>
            </Box>
          </Item>
          <Item>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                What worldview are you adopting with regards to the fairness of
                this system?
              </FormLabel>
              <RadioGroup row name="flourishing">
                <FormControlLabel
                  value="WYSIWYG"
                  control={<Radio />}
                  label="What You See Is What You Get (WYSIWYG)"
                />
                <FormControlLabel
                  value="WAE"
                  control={<Radio />}
                  label="We're All Equal (WAE)"
                />
              </RadioGroup>
              <FormHelperText sx={{ ml: 0 }}>
                Learn more on{" "}
                <Link
                  target="_blank"
                  href="https://towardsdatascience.com/what-does-it-mean-to-be-fair-measuring-and-understanding-fairness-4ab873245c4c"
                >
                  data science worldviews
                </Link>
              </FormHelperText>
            </FormControl>
          </Item>

          <Item>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                What are the groups across which you will be evaluating the
                fairness of your AI use case
              </FormLabel>
              <TextField multiline />
            </FormControl>
          </Item>
          <Item>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">
                How is fairness measured for this use case?
              </Typography>
            </Box>
          </Item>
          <Item>
            <Typography variant="subtitle1" color="text.secondary">
              For each ML model in the use case, what are the metrics you will
              use to assess fairness?
            </Typography>
            <Typography variant="caption" color="text.secondary" gutterBottom>
              (Models can be added/modified in{" "}
              <Link component={RouterLink} to="/configuration">
                configuration
              </Link>
              )
            </Typography>
            <Typography gutterBottom variant="subtitle1" color="text.secondary">
              Candidate Discovery Metrics:
            </Typography>
            <Stack direction="row" spacing={2} mb={2}>
              <FormControl size="small" sx={{ width: 150 }}>
                <InputLabel id="metric_type1">Metric Type</InputLabel>
                <Select
                  labelId="metric_type1"
                  id="id-metric_type1"
                  value={metricType1}
                  label="Metric Type"
                  onChange={handleMetricType1}
                >
                  {metricTypes.map((metricType) => (
                    <MenuItem value={metricType}>{metricType}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl size="small" sx={{ width: 130 }}>
                <InputLabel id="metricDataset1">Dataset</InputLabel>
                <Select
                  labelId="metricDataset1"
                  id="id-metricDataset1"
                  value={metricDataset1}
                  label="Dataset"
                  onChange={handleMetricDataset1}
                >
                  <MenuItem value={1}>NER</MenuItem>
                  <MenuItem value={2}>RVL-CDIP</MenuItem>
                  <MenuItem value={3}>Skill2vec</MenuItem>
                </Select>
              </FormControl>
              <TextField
                sx={{ width: 150 }}
                size="small"
                label="Upper Threshold"
                variant="outlined"
              />
              <TextField
                sx={{ width: 150 }}
                size="small"
                label="Lower Threshold"
                variant="outlined"
              />
            </Stack>
            {addMetric ? (
              <Stack direction="row" spacing={2} mb={2}>
                <FormControl size="small" sx={{ width: 150 }}>
                  <InputLabel id="metric_type3">Metric Type</InputLabel>
                  <Select
                    labelId="metric_type3"
                    id="id-metric_type3"
                    value={metricType3}
                    label="Metric Type"
                    onChange={handleMetricType3}
                  >
                    {metricTypes.map((metricType) => (
                      <MenuItem value={metricType}>{metricType}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl size="small" sx={{ width: 130 }}>
                  <InputLabel id="metricDataset2">Dataset</InputLabel>
                  <Select
                    labelId="metricDataset2"
                    id="id-metricDataset2"
                    value={metricDataset2}
                    label="Dataset"
                    onChange={handleMetricDataset2}
                  >
                    <MenuItem value={1}>NER</MenuItem>
                    <MenuItem value={2}>RVL-CDIP</MenuItem>
                    <MenuItem value={3}>Skill2vec</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  sx={{ width: 150 }}
                  size="small"
                  label="Upper Threshold"
                  variant="outlined"
                />
                <TextField
                  sx={{ width: 150 }}
                  size="small"
                  label="Lower Threshold"
                  variant="outlined"
                />
              </Stack>
            ) : null}
            <Button
              onClick={toggleAddMetric}
              size="small"
              sx={{ width: 100, mt: -2 }}
            >
              Add Metric
            </Button>
            <Typography gutterBottom variant="subtitle1" color="text.secondary">
              Resume Screener Metrics:
            </Typography>
            <Stack direction="row" spacing={2} mb={2}>
              <FormControl size="small" sx={{ width: 150 }}>
                <InputLabel id="metric_type2">Metric Type</InputLabel>
                <Select
                  labelId="metric_type2"
                  id="id-metric_type2"
                  value={metricType2}
                  label="Metric Type"
                  onChange={handleMetricType2}
                >
                  {metricTypes.map((metricType) => (
                    <MenuItem value={metricType}>{metricType}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl size="small" sx={{ width: 130 }}>
                <InputLabel id="metricDataset1">Dataset</InputLabel>
                <Select
                  labelId="metricDataset3"
                  id="id-metricDataset3"
                  value={metricDataset3}
                  label="Dataset"
                  onChange={handleMetricDataset3}
                >
                  <MenuItem value={1}>NER</MenuItem>
                  <MenuItem value={2}>RVL-CDIP</MenuItem>
                  <MenuItem value={3}>Skill2vec</MenuItem>
                </Select>
              </FormControl>
              <TextField
                sx={{ width: 150 }}
                size="small"
                label="Upper Threshold"
                variant="outlined"
              />
              <TextField
                sx={{ width: 150 }}
                size="small"
                label="Lower Threshold"
                variant="outlined"
              />
            </Stack>
            {addMetric2 ? (
              <Stack direction="row" spacing={2} mb={2}>
                <FormControl size="small" sx={{ width: 150 }}>
                  <InputLabel id="metric_type4">Metric Type</InputLabel>
                  <Select
                    labelId="metric_type4"
                    id="id-metric_type4"
                    value={metricType4}
                    label="Metric Type"
                    onChange={handleMetricType4}
                  >
                    {metricTypes.map((metricType) => (
                      <MenuItem value={metricType}>{metricType}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl size="small" sx={{ width: 130 }}>
                  <InputLabel id="metricDataset4">Dataset</InputLabel>
                  <Select
                    labelId="metricDataset4"
                    id="id-metricDataset4"
                    value={metricDataset4}
                    label="Dataset"
                    onChange={handleMetricDataset4}
                  >
                    <MenuItem value={1}>NER</MenuItem>
                    <MenuItem value={2}>RVL-CDIP</MenuItem>
                    <MenuItem value={3}>Skill2vec</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  sx={{ width: 150 }}
                  size="small"
                  label="Upper Threshold"
                  variant="outlined"
                />
                <TextField
                  sx={{ width: 150 }}
                  size="small"
                  label="Lower Threshold"
                  variant="outlined"
                />
              </Stack>
            ) : null}
            <Button
              onClick={toggleAddMetric2}
              size="small"
              sx={{ width: 100, mt: -2 }}
            >
              Add Metric
            </Button>
          </Item>
        </Stack>
      </CardContent>
    </Card>
  );
}
