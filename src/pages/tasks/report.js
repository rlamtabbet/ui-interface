import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Item from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
  Link
} from "@mui/material";
import {
  AddCommentTwoTone,
  AssignmentLateTwoTone,
  BentoTwoTone,
  BusinessTwoTone,
  CheckCircleTwoTone,
  DoNotDisturb,
  Inventory2TwoTone,
  LightbulbTwoTone,
  ListAltTwoTone,
  Send,
  WarningTwoTone
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

export default function Report() {
  return (
    <Stack spacing={2}>
      <Card>
        <Box
          p={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            startIcon={<AddCommentTwoTone />}
            size="small"
            variant="outlined"
            color="primary"
          >
            Comment
          </Button>
          <Box flexGrow={1}></Box>
          <Button
            sx={{ mr: 1 }}
            startIcon={<DoNotDisturb />}
            size="small"
            variant="outlined"
            color="error"
          >
            Request Changes
          </Button>
          <Button
            startIcon={<CheckCircleTwoTone />}
            size="small"
            variant="outlined"
            color="success"
          >
            Verify
          </Button>
        </Box>
        <Divider />
        <CardContent>
          <Box flexGrow={1} px={1} mb={1} display="flex" alignItems="center">
            <Box flexGrow={1}>
              <Typography fontWeight="bold">Review Report</Typography>
              <Typography variant="body2">requested by: Sam Mavis</Typography>
            </Box>
            <Box>
              <Typography variant="body2">Sent: Jan 21 12:03 PM</Typography>
              <Typography variant="body2">Due: Jan 27</Typography>
            </Box>
          </Box>
          <Stack mx={0.5} spacing={1}>
            <Card variant="outlined">
              <List dense>
                <Box display="flex" flexWrap="wrap">
                  <ListItem sx={{ width: "100%" }}>
                    <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                      <LightbulbTwoTone />
                    </ListItemIcon>
                    <ListItemText primary="Use case: AI Recruiting Software" />
                  </ListItem>
                  <ListItem sx={{ width: "33%" }}>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <WarningTwoTone color="error" />
                    </ListItemIcon>
                    <ListItemText primary="Product Risk: HIGH" />
                  </ListItem>
                  <ListItem sx={{ width: "33%" }}>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <AssignmentLateTwoTone color="error" />
                    </ListItemIcon>
                    <ListItemText primary="Fairness Risk: HIGH" />
                  </ListItem>
                  <ListItem sx={{ width: "33%" }}>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <AssignmentLateTwoTone color="warning" />
                    </ListItemIcon>
                    <ListItemText primary="Performance Risk: MODERATE" />
                  </ListItem>

                  <ListItem sx={{ width: "33%" }}>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <BusinessTwoTone color="warning" />
                    </ListItemIcon>
                    <ListItemText primary="Brand: MODERATE" />
                  </ListItem>
                  <ListItem sx={{ width: "33%" }}>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <BusinessTwoTone color="error" />
                    </ListItemIcon>
                    <ListItemText primary="Regulatory: HIGH" />
                  </ListItem>
                  <ListItem sx={{ width: "33%" }}>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <BusinessTwoTone color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Financial: LOW" />
                  </ListItem>
                  <ListItem sx={{ width: "33%" }}>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <Inventory2TwoTone color="info" />
                    </ListItemIcon>
                    <ListItemText primary="Packs: 3" />
                  </ListItem>

                  <ListItem sx={{ width: "33%" }}>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <ListAltTwoTone color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Policies: 12" />
                  </ListItem>
                  <ListItem sx={{ width: "33%" }}>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <BentoTwoTone color="warning" />
                    </ListItemIcon>
                    <ListItemText primary="Controls: 45" />
                  </ListItem>
                </Box>
              </List>
            </Card>
            <Stack direction="row" spacing={1}>
              <Card
                variant="outlined"
                sx={{
                  p: 2,
                  textAlign: "center",
                  width: "50%",
                  backgroundColor: "error.dark"
                }}
              >
                <Box
                  fontSize="body2.fontSize"
                  fontWeight="bold"
                  mb={0.25}
                  color="white"
                >
                  Disparate Impact
                </Box>
                <Box
                  fontSize="h5.fontSize"
                  lineHeight="24px"
                  color="rgba(255, 255, 255, 0.55)"
                >
                  67%{" "}
                  <Box fontSize="caption.fontSize" component="span">
                    (10 issues)
                  </Box>
                </Box>
              </Card>
              <Card
                variant="outlined"
                sx={{
                  p: 2,
                  textAlign: "center",
                  width: "50%",
                  backgroundColor: "warning.dark"
                }}
              >
                <Box
                  fontSize="body2.fontSize"
                  fontWeight="bold"
                  mb={0.25}
                  color="white"
                >
                  Performance
                </Box>
                <Box
                  fontSize="h5.fontSize"
                  lineHeight="24px"
                  color="rgba(255, 255, 255, 0.55)"
                >
                  71%{" "}
                  <Box fontSize="caption.fontSize" component="span">
                    (correctness)
                  </Box>
                </Box>
              </Card>
              <Card
                variant="outlined"
                sx={{
                  p: 2,
                  textAlign: "center",
                  width: "50%",
                  backgroundColor: "warning.main"
                }}
              >
                <Box
                  fontSize="body2.fontSize"
                  fontWeight="bold"
                  mb={0.25}
                  color="white"
                >
                  Compliance
                </Box>
                <Box
                  fontSize="h5.fontSize"
                  lineHeight="24px"
                  color="rgba(255, 255, 255, 0.55)"
                >
                  58%{" "}
                  <Box fontSize="caption.fontSize" component="span">
                    (7/12)
                  </Box>
                </Box>
              </Card>
            </Stack>
            <Typography color="text.secondary">Model Risk</Typography>
            <Stack direction="row" spacing={1}>
              <Card
                variant="outlined"
                sx={{
                  p: 2,
                  textAlign: "center",
                  width: "50%"
                }}
              >
                <Box fontSize="body2.fontSize" mb={0.25} color="text.secondary">
                  Intent Classification (Prod)
                </Box>
                <Box fontSize="caption.fontSize" color="text.secondary">
                  CRITICAL
                </Box>
                <Box fontSize="h5.fontSize" color="error.dark">
                  6 Issues
                </Box>
              </Card>
              <Card
                variant="outlined"
                sx={{
                  p: 2,
                  textAlign: "center",
                  width: "50%"
                }}
              >
                <Box fontSize="body2.fontSize" mb={0.25} color="text.secondary">
                  Response Generation (Prod)
                </Box>
                <Box fontSize="caption.fontSize" color="text.secondary">
                  MODERATE
                </Box>
                <Box fontSize="h5.fontSize" color="warning.main">
                  4 Issues
                </Box>
              </Card>
            </Stack>
            <Typography color="text.secondary">Fairness Risks</Typography>
            <Card variant="outlined">
              <Box
                sx={{ mx: 2, mt: 1 }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  If using proxy variables to evaluate fairness, evaluate
                  accuracy of proxy variables.
                </Typography>
                <Chip variant="outlined" label="FAIR.T1" size="small" />
              </Box>
              <List dense disablePadding>
                <ListItemButton
                  sx={{ py: 0 }}
                  component={RouterLink}
                  to="/assess/policies/policy"
                >
                  <ListItemText
                    primary="Intent Classification (PROD)"
                    secondary="Dataset (AmbigQA) is not accurate (F1 0.4)"
                  />
                  <ListItemSecondaryAction>
                    <Chip
                      variant="outlined"
                      label="HIGH"
                      size="small"
                      color="error"
                    />
                  </ListItemSecondaryAction>
                </ListItemButton>
                <ListItemButton
                  sx={{ py: 0 }}
                  component={RouterLink}
                  to="/assess/policies/policy"
                >
                  <ListItemText
                    primary="Response Generation (PROD)"
                    secondary="Dataset (AmbigQA) is not accurate (F1 0.4)"
                  />
                  <ListItemSecondaryAction>
                    <Chip
                      variant="outlined"
                      label="HIGH"
                      size="small"
                      color="error"
                    />
                  </ListItemSecondaryAction>
                </ListItemButton>
              </List>
            </Card>
            <Card variant="outlined">
              <Box
                sx={{ mx: 2, mt: 1 }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  Evaluate fairness of the model.
                </Typography>
                <Chip variant="outlined" label="FAIR.T2" size="small" />
              </Box>
              <List dense disablePadding>
                <ListItemButton
                  sx={{ py: 0 }}
                  component={RouterLink}
                  to="/assess/policies/policy"
                >
                  <ListItemText
                    primary="Intent Classification (PROD)"
                    secondary="Model is not fair in development (Disparate Impact 0.52)"
                  />
                  <ListItemSecondaryAction>
                    <Chip
                      variant="outlined"
                      label="HIGH"
                      size="small"
                      color="error"
                    />
                  </ListItemSecondaryAction>
                </ListItemButton>
                <ListItemButton
                  sx={{ py: 0 }}
                  component={RouterLink}
                  to="/assess/policies/policy"
                >
                  <ListItemText
                    primary="Response Generation (PROD)"
                    secondary="Model is moderately fair in development (Disparate Impact 0.68)"
                  />
                  <ListItemSecondaryAction>
                    <Chip
                      variant="outlined"
                      label="MODERATE"
                      size="small"
                      color="warning"
                    />
                  </ListItemSecondaryAction>
                </ListItemButton>
              </List>
            </Card>
            <Card variant="outlined">
              <Box
                sx={{ mx: 2, mt: 1 }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  Validate fairness of the model.
                </Typography>
                <Chip variant="outlined" label="FAIR.T3" size="small" />
              </Box>
              <List dense disablePadding>
                <ListItemButton
                  sx={{ py: 0 }}
                  component={RouterLink}
                  to="/assess/policies/policy"
                >
                  <ListItemText
                    primary="Intent Classification (PROD)"
                    secondary="Model is not fair in validation (Disparate Impact 0.66)"
                  />
                  <ListItemSecondaryAction>
                    <Chip
                      variant="outlined"
                      label="HIGH"
                      size="small"
                      color="error"
                    />
                  </ListItemSecondaryAction>
                </ListItemButton>
                <ListItemButton
                  sx={{ py: 0 }}
                  component={RouterLink}
                  to="/assess/policies/policy"
                >
                  <ListItemText
                    primary="Response Generation (PROD)"
                    secondary="Model is fair in validation (Disparate Impact 0.75)"
                  />
                  <ListItemSecondaryAction>
                    <Chip
                      variant="outlined"
                      label="LOW"
                      size="small"
                      color="info"
                    />
                  </ListItemSecondaryAction>
                </ListItemButton>
              </List>
            </Card>
            <Card variant="outlined">
              <Box
                sx={{ mx: 2, mt: 1 }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  Monitor fairness of the model in production.
                </Typography>
                <Chip variant="outlined" label="FAIR.T4" size="small" />
              </Box>
              <List dense disablePadding>
                <ListItemButton
                  sx={{ py: 0 }}
                  component={RouterLink}
                  to="/assess/policies/policy"
                >
                  <ListItemText
                    primary="Intent Classification (PROD)"
                    secondary="Monitoring not configured (or error in setup)"
                  />
                  <ListItemSecondaryAction>
                    <Chip
                      variant="outlined"
                      label="HIGH"
                      size="small"
                      color="error"
                    />
                  </ListItemSecondaryAction>
                </ListItemButton>
                <ListItemButton
                  sx={{ py: 0 }}
                  component={RouterLink}
                  to="/assess/policies/policy"
                >
                  <ListItemText
                    primary="Response Generation (PROD)"
                    secondary="Monitoring not configured (or error in setup)"
                  />
                  <ListItemSecondaryAction>
                    <Chip
                      variant="outlined"
                      label="HIGH"
                      size="small"
                      color="error"
                    />
                  </ListItemSecondaryAction>
                </ListItemButton>
              </List>
            </Card>
            <Typography color="text.secondary">Model Performance</Typography>
            <Card variant="outlined" sx={{ px: 2, pt: 1, pb: 2 }}>
              <Stack spacing={1}>
                <Typography variant="subtitle1" color="text.secondary">
                  Intent Detection Model
                </Typography>
                <Card variant="outlined">
                  <List dense disablePadding>
                    <ListItem>
                      <ListItemText primary="Primary Performance Metric: Accuracy" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Secondary Performance Metric(s): Confusion matrix" />
                    </ListItem>
                  </List>
                </Card>
                <Card variant="outlined" sx={{ px: 2, pt: 1, pb: 1 }}>
                  <Stack spacing={1}>
                    <Box>
                      This model correctly identifies the intent of a user input
                      statement for 81 out of every 100 inputs.
                    </Box>
                    <Box textAlign="center">
                      <img src="/model-1-perf-1.png" width="50%" alt="" />
                    </Box>
                    <Box>
                      79 out of 100 user requests with the intention of
                      “benefits” are identified correctly. This ratio is 88% for
                      requests with “tax” intention.
                    </Box>
                  </Stack>
                </Card>
              </Stack>
            </Card>
            <Card variant="outlined" sx={{ px: 2, pt: 1, pb: 2 }}>
              <Stack spacing={1}>
                <Typography variant="subtitle1" color="text.secondary">
                  Response Generation Model
                </Typography>
                <Card variant="outlined">
                  <List dense disablePadding>
                    <ListItem>
                      <ListItemText primary="Primary Performance Metric: Correct Chatbot Response Rate" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Secondary Performance Metric(s): Response Rate, User return rate" />
                    </ListItem>
                  </List>
                </Card>
                <Card variant="outlined" sx={{ px: 2, pt: 1, pb: 1 }}>
                  <Stack spacing={1}>
                    <Box>
                      This AI system responds to 72 out of 100 user requests.
                      Out of the 72 responses, 62 are correct responses. This AI
                      system does not respond or responds incorrectly to 38 out
                      of every 100 user requests.
                    </Box>
                    <Box textAlign="center">
                      <img src="/model-1-perf-2.png" width="50%" alt="" />
                    </Box>
                  </Stack>
                </Card>
              </Stack>
            </Card>
            <Typography color="text.secondary">
              Policy Pack Compliance
            </Typography>
            <Stack direction="row" spacing={1}>
              <Card
                variant="outlined"
                sx={{
                  p: 2,
                  textAlign: "center",
                  flexGrow: 1
                }}
              >
                <Box fontSize="body2.fontSize" mb={0.25} color="text.secondary">
                  NYC 1894-A Pack
                </Box>
                <Box fontSize="caption.fontSize" color="text.secondary">
                  3/4 Policies
                </Box>
                <Box mt={1} ml={2} display="flex" justifyContent="center">
                  <Box
                    height="50px"
                    sx={{
                      position: "relative",
                      display: "inline-flex"
                    }}
                    mr={2}
                    color="warning.main"
                  >
                    <CircularProgress
                      variant="determinate"
                      value="75"
                      color="inherit"
                      thickness={6}
                      size={50}
                    />
                    <Box color="action.focus" position="absolute" left={0}>
                      <CircularProgress
                        variant="determinate"
                        color="inherit"
                        thickness={6}
                        size={50}
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
                      <Typography variant="caption">75%</Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
              <Card
                variant="outlined"
                sx={{
                  p: 2,
                  textAlign: "center",
                  flexGrow: 1
                }}
              >
                <Box fontSize="body2.fontSize" mb={0.25} color="text.secondary">
                  IEEE EAD Pack
                </Box>
                <Box fontSize="caption.fontSize" color="text.secondary">
                  1/4 Policies
                </Box>
                <Box mt={1} ml={2} display="flex" justifyContent="center">
                  <Box
                    height="50px"
                    sx={{
                      position: "relative",
                      display: "inline-flex"
                    }}
                    mr={2}
                    color="error.main"
                  >
                    <CircularProgress
                      variant="determinate"
                      value="25"
                      color="inherit"
                      thickness={6}
                      size={50}
                    />
                    <Box color="action.focus" position="absolute" left={0}>
                      <CircularProgress
                        variant="determinate"
                        color="inherit"
                        thickness={6}
                        size={50}
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
                      <Typography variant="caption">25%</Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
              <Card
                variant="outlined"
                sx={{
                  p: 2,
                  textAlign: "center",
                  flexGrow: 1
                }}
              >
                <Box fontSize="body2.fontSize" mb={0.25} color="text.secondary">
                  CorpCo Company Pack
                </Box>
                <Box fontSize="caption.fontSize" color="text.secondary">
                  4/4 Policies
                </Box>
                <Box mt={1} ml={2} display="flex" justifyContent="center">
                  <Box
                    height="50px"
                    sx={{
                      position: "relative",
                      display: "inline-flex"
                    }}
                    mr={2}
                    color="success.main"
                  >
                    <CircularProgress
                      variant="determinate"
                      value="100"
                      color="inherit"
                      thickness={6}
                      size={50}
                    />
                    <Box color="action.focus" position="absolute" left={0}>
                      <CircularProgress
                        variant="determinate"
                        color="inherit"
                        thickness={6}
                        size={50}
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
                      <Typography variant="caption">100%</Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Stack>

            <Typography color="text.secondary">
              Policies that need attention
            </Typography>
            <Card variant="outlined">
              <Box
                sx={{ mx: 2, my: 1 }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  If using proxy variables to evaluate fairness, evaluate
                  accuracy of proxy variables.
                </Typography>
                <Chip variant="outlined" label="FAIR.T1" size="small" />
              </Box>
            </Card>
            <Card variant="outlined">
              <Box
                sx={{ mx: 2, my: 1 }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  Evaluate fairness of the model.
                </Typography>
                <Chip variant="outlined" label="FAIR.T2" size="small" />
              </Box>
            </Card>
            <Card variant="outlined">
              <Box
                sx={{ mx: 2, my: 1 }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  Validate fairness of the model.
                </Typography>
                <Chip variant="outlined" label="FAIR.T3" size="small" />
              </Box>
            </Card>
            <Card variant="outlined">
              <Box
                sx={{ mx: 2, my: 1 }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  Monitor fairness of the model in production.
                </Typography>
                <Chip variant="outlined" label="FAIR.T4" size="small" />
              </Box>
            </Card>
          </Stack>
        </CardContent>
      </Card>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom fontWeight="bold">
            Comments
          </Typography>
          <Stack spacing={2}>
            <Item>
              <Stack direction="row" spacing={2}>
                <Item>
                  <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
                </Item>
                <Item>
                  <Card>
                    <CardContent>
                      <Typography component="div">
                        <Link>@Tyler.Lee</Link> we'll need to revisit the
                        assessments and policies as these results are not
                        acceptable
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        component="div"
                      >
                        Jan 02, 2:31 PM
                      </Typography>
                    </CardContent>
                  </Card>
                </Item>
              </Stack>
            </Item>
            <Item>
              <Stack direction="row" spacing={2}>
                <Item>
                  <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
                </Item>
                <Item>
                  <Card>
                    <CardContent>
                      <Typography component="div">
                        sure thing <Link>@Sam.Mavis</Link> our team will push
                        the latest results in a bit
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        component="div"
                      >
                        Jan 02, 3:22 PM
                      </Typography>
                    </CardContent>
                  </Card>
                </Item>
              </Stack>
            </Item>
            <Item>
              <Stack direction="row" spacing={2}>
                <Item>
                  <Avatar src="https://mui.com/static/images/avatar/4.jpg" />
                </Item>
                <Item>
                  <Card
                    sx={{
                      backgroundColor: "info.main",
                      color: "white"
                    }}
                  >
                    <CardContent>
                      <Typography component="div">
                        Thanks for jumping on this. Pls be sure to try and meet
                        Demographic Parity - Difference (0.8 - 1.0) and
                        Demographic Parity - Ratio (0.8 - 1.0)
                      </Typography>
                      <Typography
                        variant="body2"
                        color="inherit"
                        component="div"
                      >
                        Jan 03, 10:12 AM
                      </Typography>
                    </CardContent>
                  </Card>
                </Item>
              </Stack>
            </Item>
            <Item>
              <Stack direction="row" spacing={2}>
                <Item>
                  <Avatar src="https://mui.com/static/images/avatar/4.jpg" />
                </Item>
                <Item flexGrow={1}>
                  <TextField id="comment-reply" multiline rows={4} />
                </Item>
                <Item>
                  <Button
                    endIcon={<Send />}
                    loadingPosition="end"
                    variant="contained"
                  >
                    Send
                  </Button>
                </Item>
              </Stack>
            </Item>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
