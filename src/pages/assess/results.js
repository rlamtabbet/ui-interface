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
  CardContent,
  Chip,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "@mui/material";
import {
  ExpandMore,
  FolderTwoTone,
  GridOnTwoTone,
  InsertChartTwoTone,
  Launch,
  LightbulbTwoTone,
  Tag,
  WidgetsTwoTone
} from "@mui/icons-material";

const chartData = [
  {
    img: "https://blog.roboflow.com/content/images/2020/05/image-5.png",
    title: "Precision",
    author: "@bkristastucchio"
  },
  {
    img: "https://miro.medium.com/max/1000/1*OmOoRjn79rU81haVLL4XZg.png",
    title: "Disparate Impact",
    author: "@rollelflex_graphy726"
  },
  {
    img:
      "https://i1.wp.com/neptune.ai/wp-content/uploads/prec_rec_curve.png?fit=1024%2C768&ssl=1",
    title: "Precision Recall",
    author: "@helloimnik"
  }
];

export default function Results() {
  // Start accordion
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // End accordion

  return (
    <>
      <Box p={1} display="flex" alignItems="center" bgcolor="background.paper">
        <Box flexGrow={1}>Assessment Results</Box>
        <Box mr={1}>
          <Button size="small" variant="outlined" color="secondary">
            Download Assessment Spec
          </Button>
        </Box>
        <Box mr={1}>
          <Button
            component={RouterLink}
            to="/assess/request"
            size="small"
            variant="contained"
            color="secondary"
          >
            Request Assessment
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
            <Grid container p={1} spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
                <Box p={1}>
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Box>
                        <Typography gutterBottom>
                          Fairness Assessment - Jan 11 2022
                        </Typography>
                        <Stack
                          direction="row"
                          sx={{ flexWrap: "wrap" }}
                          spacing={1}
                        >
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
                            icon={<WidgetsTwoTone />}
                            label="Intent Classification (Prod)"
                            variant="outlined"
                            color="secondary"
                          />
                          <Chip
                            size="small"
                            icon={<GridOnTwoTone />}
                            label="AmbigQA"
                            variant="outlined"
                            color="warning"
                          />
                          <Chip
                            size="small"
                            icon={<InsertChartTwoTone />}
                            label="Charts (3)"
                            variant="outlined"
                            color="success"
                          />
                          <Chip
                            size="small"
                            icon={<Tag />}
                            label="Precision Score (0.92)"
                            variant="outlined"
                            color="info"
                          />
                          <Chip
                            size="small"
                            icon={<Tag />}
                            label="Disparate Impact (0.77)"
                            variant="outlined"
                            color="info"
                          />
                        </Stack>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack mx={0.5} spacing={2}>
                        <Card variant="outlined">
                          <List dense disablePadding>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                                  <LightbulbTwoTone />
                                </ListItemIcon>
                                <ListItemText primary="Use case: AI Recruiting Software" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                  <FolderTwoTone />
                                </ListItemIcon>
                                <ListItemText primary="Model Project: Intent Classification" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
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
                                <ListItemText primary="Model: Intent Classification (Prod)" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon
                                  sx={{ mr: -2, color: "darkOrange" }}
                                >
                                  <GridOnTwoTone />
                                </ListItemIcon>
                                <ListItemText primary="Dataset: AmbigQA" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Metrics
                            </Typography>
                            <Stack direction="row" spacing={1}>
                              <Card
                                variant="outlined"
                                sx={{ p: 2, textAlign: "center" }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  mb={0.25}
                                  color="text.secondary"
                                >
                                  Precision Score
                                </Box>
                                <Box
                                  fontSize="caption.fontSize"
                                  color="text.secondary"
                                >
                                  Precision_Chat_Accuracy
                                </Box>
                                <Box fontSize="h4.fontSize" color="info.main">
                                  0.92
                                </Box>
                              </Card>
                              <Card
                                variant="outlined"
                                sx={{ p: 2, textAlign: "center" }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  mb={0.25}
                                  color="text.secondary"
                                >
                                  Disparate Impact
                                </Box>
                                <Box
                                  fontSize="caption.fontSize"
                                  color="text.secondary"
                                >
                                  disparate_impact_all
                                </Box>
                                <Box fontSize="h4.fontSize" color="info.main">
                                  0.77
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Charts
                            </Typography>
                            <ImageList
                              gap={10}
                              sx={{ width: 700, height: 450 }}
                              cols={3}
                              rowHeight={210}
                            >
                              {chartData.map((item) => (
                                <ImageListItem key={item.img}>
                                  <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                  />
                                  <ImageListItemBar
                                    title={item.title}
                                    subtitle={<span>by: {item.author}</span>}
                                    position="below"
                                  />
                                </ImageListItem>
                              ))}
                            </ImageList>
                          </CardContent>
                        </Card>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Box>
                        <Typography gutterBottom>
                          Fairness Assessment - Jan 09 2022
                        </Typography>
                        <Stack
                          direction="row"
                          sx={{ flexWrap: "wrap" }}
                          spacing={1}
                        >
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
                            icon={<WidgetsTwoTone />}
                            label="Response Generation (Prod)"
                            variant="outlined"
                            color="secondary"
                          />
                          <Chip
                            size="small"
                            icon={<GridOnTwoTone />}
                            label="AmbigQA"
                            variant="outlined"
                            color="warning"
                          />

                          <Chip
                            size="small"
                            icon={<Tag />}
                            label="Disparate Impact (0.75)"
                            variant="outlined"
                            color="info"
                          />
                          <Chip
                            size="small"
                            icon={<Tag />}
                            label="Toxicity (0.69)"
                            variant="outlined"
                            color="info"
                          />
                          <Chip
                            size="small"
                            icon={<Tag />}
                            label="Profanity (0.81)"
                            variant="outlined"
                            color="info"
                          />
                        </Stack>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack mx={0.5} spacing={2}>
                        <Card variant="outlined">
                          <List dense disablePadding>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                                  <LightbulbTwoTone />
                                </ListItemIcon>
                                <ListItemText primary="Use case: AI Recruiting Software" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                  <FolderTwoTone />
                                </ListItemIcon>
                                <ListItemText primary="Model Project: Response Generation" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
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
                                <ListItemText primary="Model: Response Generation (Prod)" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon
                                  sx={{ mr: -2, color: "darkOrange" }}
                                >
                                  <GridOnTwoTone />
                                </ListItemIcon>
                                <ListItemText primary="Dataset: AmbigQA" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Metrics
                            </Typography>
                            <Stack direction="row" spacing={1}>
                              <Card
                                variant="outlined"
                                sx={{ p: 2, textAlign: "center" }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  mb={0.25}
                                  color="text.secondary"
                                >
                                  Disparate Impact
                                </Box>
                                <Box
                                  fontSize="caption.fontSize"
                                  color="text.secondary"
                                >
                                  disparate_impact_all
                                </Box>
                                <Box fontSize="h4.fontSize" color="info.main">
                                  0.75
                                </Box>
                              </Card>
                              <Card
                                variant="outlined"
                                sx={{ p: 2, textAlign: "center" }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  mb={0.25}
                                  color="text.secondary"
                                >
                                  Toxicity
                                </Box>
                                <Box
                                  fontSize="caption.fontSize"
                                  color="text.secondary"
                                >
                                  toxicity_all
                                </Box>
                                <Box fontSize="h4.fontSize" color="info.main">
                                  0.69
                                </Box>
                              </Card>
                              <Card
                                variant="outlined"
                                sx={{ p: 2, textAlign: "center" }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  mb={0.25}
                                  color="text.secondary"
                                >
                                  Profanity
                                </Box>
                                <Box
                                  fontSize="caption.fontSize"
                                  color="text.secondary"
                                >
                                  all-profanity
                                </Box>
                                <Box fontSize="h4.fontSize" color="info.main">
                                  0.81
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Charts
                            </Typography>
                            <ImageList
                              gap={10}
                              sx={{ width: 700, height: 450 }}
                              cols={3}
                              rowHeight={210}
                            >
                              {chartData.map((item) => (
                                <ImageListItem key={item.img}>
                                  <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                  />
                                  <ImageListItemBar
                                    title={item.title}
                                    subtitle={<span>by: {item.author}</span>}
                                    position="below"
                                  />
                                </ImageListItem>
                              ))}
                            </ImageList>
                          </CardContent>
                        </Card>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Box>
                        <Typography gutterBottom>
                          Performance Assessment - Jan 06 2022
                        </Typography>
                        <Stack
                          direction="row"
                          sx={{ flexWrap: "wrap" }}
                          spacing={1}
                        >
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
                            icon={<WidgetsTwoTone />}
                            label="Intent Classification (Test)"
                            variant="outlined"
                            color="secondary"
                          />
                          <Chip
                            size="small"
                            icon={<GridOnTwoTone />}
                            label="AmbigQA-test"
                            variant="outlined"
                            color="warning"
                          />
                          <Chip
                            size="small"
                            icon={<Tag />}
                            label="False Discovery (0.64)"
                            variant="outlined"
                            color="info"
                          />
                          <Chip
                            size="small"
                            icon={<Tag />}
                            label="True Positive (0.59)"
                            variant="outlined"
                            color="info"
                          />
                          <Chip
                            size="small"
                            icon={<Tag />}
                            label="False Omission Rate (0.71)"
                            variant="outlined"
                            color="info"
                          />
                        </Stack>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack mx={0.5} spacing={2}>
                        <Card variant="outlined">
                          <List dense disablePadding>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                                  <LightbulbTwoTone />
                                </ListItemIcon>
                                <ListItemText primary="Use case: AI Recruiting Software" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                  <FolderTwoTone />
                                </ListItemIcon>
                                <ListItemText primary="Model Project: Intent Classification" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
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
                                <ListItemText primary="Model: Intent Classification (Prod)" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon
                                  sx={{ mr: -2, color: "darkOrange" }}
                                >
                                  <GridOnTwoTone />
                                </ListItemIcon>
                                <ListItemText primary="Dataset: AmbigQA" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Metrics
                            </Typography>
                            <Stack direction="row" spacing={1}>
                              <Card
                                variant="outlined"
                                sx={{ p: 2, textAlign: "center" }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  mb={0.25}
                                  color="text.secondary"
                                >
                                  Precision Score
                                </Box>
                                <Box
                                  fontSize="caption.fontSize"
                                  color="text.secondary"
                                >
                                  Precision_Chat_Accuracy
                                </Box>
                                <Box fontSize="h4.fontSize" color="info.main">
                                  0.92
                                </Box>
                              </Card>
                              <Card
                                variant="outlined"
                                sx={{ p: 2, textAlign: "center" }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  mb={0.25}
                                  color="text.secondary"
                                >
                                  Disparate Impact
                                </Box>
                                <Box
                                  fontSize="caption.fontSize"
                                  color="text.secondary"
                                >
                                  disparate_impact_all
                                </Box>
                                <Box fontSize="h4.fontSize" color="info.main">
                                  0.77
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Charts
                            </Typography>
                            <ImageList
                              gap={10}
                              sx={{ width: 700, height: 450 }}
                              cols={3}
                              rowHeight={210}
                            >
                              {chartData.map((item) => (
                                <ImageListItem key={item.img}>
                                  <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                  />
                                  <ImageListItemBar
                                    title={item.title}
                                    subtitle={<span>by: {item.author}</span>}
                                    position="below"
                                  />
                                </ImageListItem>
                              ))}
                            </ImageList>
                          </CardContent>
                        </Card>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Box>
                        <Typography gutterBottom>
                          Performance Assessment - Jan 03 2022
                        </Typography>
                        <Stack
                          direction="row"
                          sx={{ flexWrap: "wrap" }}
                          spacing={1}
                        >
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
                            icon={<WidgetsTwoTone />}
                            label="Response Generation (Test)"
                            variant="outlined"
                            color="secondary"
                          />
                          <Chip
                            size="small"
                            icon={<GridOnTwoTone />}
                            label="AmbigQA-test"
                            variant="outlined"
                            color="warning"
                          />
                          <Chip
                            size="small"
                            icon={<InsertChartTwoTone />}
                            label="Charts (2)"
                            variant="outlined"
                            color="success"
                          />
                          <Chip
                            size="small"
                            icon={<Tag />}
                            label="Recall (0.68)"
                            variant="outlined"
                            color="info"
                          />
                          <Chip
                            size="small"
                            icon={<Tag />}
                            label="False Positive (0.77)"
                            variant="outlined"
                            color="info"
                          />
                          <Chip
                            size="small"
                            icon={<Tag />}
                            label="False Negative (0.64)"
                            variant="outlined"
                            color="info"
                          />
                        </Stack>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack mx={0.5} spacing={2}>
                        <Card variant="outlined">
                          <List dense disablePadding>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                                  <LightbulbTwoTone />
                                </ListItemIcon>
                                <ListItemText primary="Use case: AI Recruiting Software" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                  <FolderTwoTone />
                                </ListItemIcon>
                                <ListItemText primary="Model Project: Response Generation" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
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
                                <ListItemText primary="Model: Response Generation (Prod)" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon
                                  sx={{ mr: -2, color: "darkOrange" }}
                                >
                                  <GridOnTwoTone />
                                </ListItemIcon>
                                <ListItemText primary="Dataset: AmbigQA" />
                                <ListItemSecondaryAction>
                                  <IconButton size="small">
                                    <Launch fontSize="small" />
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Metrics
                            </Typography>
                            <Stack direction="row" spacing={1}>
                              <Card
                                variant="outlined"
                                sx={{ p: 2, textAlign: "center" }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  mb={0.25}
                                  color="text.secondary"
                                >
                                  Disparate Impact
                                </Box>
                                <Box
                                  fontSize="caption.fontSize"
                                  color="text.secondary"
                                >
                                  disparate_impact_all
                                </Box>
                                <Box fontSize="h4.fontSize" color="info.main">
                                  0.75
                                </Box>
                              </Card>
                              <Card
                                variant="outlined"
                                sx={{ p: 2, textAlign: "center" }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  mb={0.25}
                                  color="text.secondary"
                                >
                                  Toxicity
                                </Box>
                                <Box
                                  fontSize="caption.fontSize"
                                  color="text.secondary"
                                >
                                  toxicity_all
                                </Box>
                                <Box fontSize="h4.fontSize" color="info.main">
                                  0.69
                                </Box>
                              </Card>
                              <Card
                                variant="outlined"
                                sx={{ p: 2, textAlign: "center" }}
                              >
                                <Box
                                  fontSize="body2.fontSize"
                                  mb={0.25}
                                  color="text.secondary"
                                >
                                  Profanity
                                </Box>
                                <Box
                                  fontSize="caption.fontSize"
                                  color="text.secondary"
                                >
                                  all-profanity
                                </Box>
                                <Box fontSize="h4.fontSize" color="info.main">
                                  0.81
                                </Box>
                              </Card>
                            </Stack>
                          </CardContent>
                        </Card>
                        <Card variant="outlined">
                          <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                              Charts
                            </Typography>
                            <ImageList
                              gap={10}
                              sx={{ width: 700, height: 450 }}
                              cols={3}
                              rowHeight={210}
                            >
                              {chartData.map((item) => (
                                <ImageListItem key={item.img}>
                                  <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                  />
                                  <ImageListItemBar
                                    title={item.title}
                                    subtitle={<span>by: {item.author}</span>}
                                    position="below"
                                  />
                                </ImageListItem>
                              ))}
                            </ImageList>
                          </CardContent>
                        </Card>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
