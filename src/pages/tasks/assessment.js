import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Item from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import {
  Alert,
  AlertTitle,
  AppBar,
  Card,
  CardContent,
  Container,
  Dialog,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Link,
  Toolbar,
  Tooltip
} from "@mui/material";
import {
  AssignmentLateTwoTone,
  Close,
  ContentCopyOutlined,
  DownloadTwoTone,
  GridOnTwoTone,
  HelpOutline,
  InsertChartTwoTone,
  LightbulbTwoTone,
  WidgetsTwoTone
} from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Assessment() {
  // Start toggle
  const [apiKey, setApiKey] = React.useState("");
  const handleApiKey = () => {
    setApiKey(
      "MqGysgb6nD1XscekfLnNuprRJbHMHMu3Hsah7anA2VzZR9X9OiabiFfqTkHCUl_w"
    );
  };
  // End toggle

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack spacing={2}>
      <Card>
        <CardContent>
          <Box flexGrow={1} px={1} mb={1} display="flex" alignItems="center">
            <Box flexGrow={1}>
              <Typography fontWeight="bold">Technical Assessment</Typography>
              <Typography variant="body2">requested by: Sam Mavis</Typography>
            </Box>
            <Box>
              <Typography variant="body2">Sent: Jan 20 11:15 AM</Typography>
              <Typography variant="body2">
                Due: Jan 25{" "}
                <Typography
                  variant="body2"
                  component="span"
                  color="warning.main"
                >
                  (Tomorrow)
                </Typography>
              </Typography>
            </Box>
          </Box>

          <Stack mx={0.5} spacing={1}>
            <Card variant="outlined">
              <List dense dis>
                <Box display="flex" flexWrap="wrap">
                  <ListItem sx={{ width: 1 / 2 }} disablePadding>
                    <ListItemButton onClick={handleClickOpen}>
                      <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                        <LightbulbTwoTone />
                      </ListItemIcon>
                      <ListItemText primary="AI Recruiting Software" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem sx={{ width: 1 / 2 }}>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <AssignmentLateTwoTone color="info" />
                    </ListItemIcon>
                    <ListItemText primary="Assessment Type: Fairness" />
                  </ListItem>
                  <ListItem sx={{ width: 1 / 2 }}>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <WidgetsTwoTone color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Models: Candidate Search Model, Resume Screener Model" />
                  </ListItem>
                  <ListItem sx={{ width: 1 / 2 }}>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <GridOnTwoTone color="warning" />
                    </ListItemIcon>
                    <ListItemText primary="Datasets: Resume NER, RVL-CDIP, Skill2vec" />
                  </ListItem>
                </Box>
              </List>
            </Card>

            <Stack spacing={1} divider={<Divider />}>
              <Item>
                <Box display="flex" alignItems="center">
                  <Box flexGrow={1}>Assessment Spec</Box>
                </Box>
              </Item>
              <Item sx={{ px: 2 }}>
                <Box fontSize="body2.fontSize">
                  <Box>
                    Use the following details and{" "}
                    <Link
                      sx={{ flexShrink: 0, ml: 0.2, mr: 0.5 }}
                      href="https://credoai-lens.readthedocs.io/en/latest/notebooks/quickstart.html?highlight=spec#Alignment-Spec"
                      target="_blank"
                      variant="body2"
                    >
                      Assessment Spec
                    </Link>{" "}
                    with{" "}
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
                    Quickstart Doc
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
                    sx={{
                      mb: 1,
                      py: 0,
                      pr: 3,
                      pl: 1,
                      alignItems: "center"
                    }}
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
                    model_id: str = 9ncTvNzkniTRoEphKaWr6c # Candidate Search Model
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
                    model_id: str = bs3FR8sEd2uNJ4VFosnWT4 # Resume Screener Model
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
              <Item>
                <Alert
                  severity="info"
                  sx={{ my: 2 }}
                  action={
                    <>
                      <IconButton
                        href="https://credoai-lens.readthedocs.io/en/latest/notebooks/quickstart.html?highlight=spec#Alignment-Spec"
                        target="_blank"
                        sx={{ flexShrink: 0, mr: 1 }}
                        color="inherit"
                        size="small"
                      >
                        <HelpOutline />
                      </IconButton>
                      <Tooltip title="Download Assessment Spec">
                        <IconButton
                          href="https://credoai-lens.readthedocs.io/en/latest/notebooks/quickstart.html?highlight=spec#Alignment-Spec"
                          target="_blank"
                          sx={{ flexShrink: 0, mr: 1 }}
                          color="inherit"
                          size="small"
                        >
                          <DownloadTwoTone />
                        </IconButton>
                      </Tooltip>
                    </>
                  }
                >
                  Push required metrics and charts with Credo AI Lens
                </Alert>
                <Item>
                  <Typography gutterBottom>Requirements:</Typography>
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

                <Stack spacing={2} m={1}>
                  <Item>
                    <Typography gutterBottom>Assessment Results</Typography>
                    <Typography variant="body2">
                      Push results using the Credo AI Lens Assessment Framework
                      using this Assessment Spec, or manually upload here.
                    </Typography>
                  </Item>
                  <Item>
                    <Button size="small" color="secondary" variant="outlined">
                      Upload
                    </Button>
                  </Item>
                  <Item>
                    <Typography gutterBottom>Metrics</Typography>
                    <Typography variant="body2">
                      Push metrics using the Credo AI Lens Assessment Framework
                      using this Assessment Spec, or manually upload here.
                    </Typography>
                  </Item>
                  <Item>
                    <Button size="small" color="secondary" variant="outlined">
                      Add Metrics
                    </Button>
                  </Item>
                  <Item>
                    <Divider />
                  </Item>
                  <Item>
                    <Typography gutterBottom>Charts</Typography>
                    <Typography variant="body2">
                      Push charts using the Credo AI Lens Assessment Framework
                      using this Assessment Spec, or manually upload here.
                    </Typography>
                  </Item>
                  <Item>
                    <Button size="small" color="secondary" variant="outlined">
                      Add Charts
                    </Button>
                  </Item>
                </Stack>
              </Item>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }} color="inherit">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              AI Recruiting Software - Use Case Card
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              dismiss
            </Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md">
          <Box>
            <img src="/use-case-card-full-2.png" width="100%" alt="" />
          </Box>
        </Container>
      </Dialog>
    </Stack>
  );
}
