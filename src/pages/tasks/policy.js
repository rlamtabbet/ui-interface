import * as React from "react";
import { Link, Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Item from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import {
  Alert,
  AlertTitle,
  Avatar,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Tooltip
} from "@mui/material";
import {
  AssignmentLateTwoTone,
  DownloadTwoTone,
  HelpOutline,
  LightbulbTwoTone,
  PolicyTwoTone,
  Send,
  WidgetsTwoTone
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

export default function Policy() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [loading, setLoading] = React.useState(false);
  function handleClickSend() {
    setLoading(true);
  }
  return (
    <Stack spacing={2}>
      <Card>
        <CardContent>
          <Box flexGrow={1} px={1} mb={1} display="flex" alignItems="center">
            <Box flexGrow={1}>
              <Typography fontWeight="bold">
                Technical Evidence Requested
              </Typography>
              <Typography variant="body2">requested by: Fei Simmons</Typography>
            </Box>
            <Box>
              <Typography variant="body2">Sent: Jan 21 9:34 AM</Typography>
              <Typography variant="body2">Due: Jan 27</Typography>
            </Box>
          </Box>
          <Card variant="outlined">
            <List dense>
              <Box display="flex" flexWrap="wrap">
                <ListItem sx={{ width: 1 / 3 }}>
                  <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                    <LightbulbTwoTone />
                  </ListItemIcon>
                  <ListItemText primary="AI Recruiting Software" />
                </ListItem>
                <ListItem sx={{ width: 1 / 3 }}>
                  <ListItemIcon sx={{ mr: -2 }}>
                    <AssignmentLateTwoTone color="warning" />
                  </ListItemIcon>
                  <ListItemText primary="Risk: Fairness" />
                </ListItem>
                <ListItem sx={{ width: 1 / 3 }}>
                  <ListItemIcon sx={{ mr: -2 }}>
                    <WidgetsTwoTone color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Model: Candidate Search Model" />
                </ListItem>
              </Box>
            </List>
          </Card>
          <Grid spacing={2} container xs={12}>
            <Grid item xs={8}>
              <Stack spacing={2} m={1}>
                <Alert
                  variant="outlined"
                  icon={<PolicyTwoTone fontSize="inherit" />}
                >
                  <AlertTitle>Policy: FAIR.T2</AlertTitle>
                  Evaluate the fairness of the model
                </Alert>
                <Alert
                  severity="info"
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
                  Push metrics and charts with Credo AI Lens
                </Alert>
                <Item>
                  <Typography gutterBottom>Metrics</Typography>
                  <Typography variant="body2">
                    Push metrics using the Credo AI Lens Assessment Framework
                    using this Assessment Spec, or manually upload or add
                    existing metrics.
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
                    using this Assessment Spec, or manually upload or add
                    existing charts.
                  </Typography>
                </Item>
                <Item>
                  <Button size="small" color="secondary" variant="outlined">
                    Add Charts
                  </Button>
                </Item>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <List dense disablePadding>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Policy Info"
                    secondary={
                      <>
                        <Box>Pack: Fairness Pack</Box>
                        <Box>Policy: FAIR.T2</Box>
                        <Box>Risk: Fairness</Box>
                        <Box>Stage: Production</Box>
                      </>
                    }
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Metrics:"
                    secondary={
                      <>
                        <List dense disablePadding>
                          <ListItem disablePadding>
                            <ListItemText
                              primary="Dataset: Resume NER"
                              secondary={
                                <>
                                  <Box>
                                    Demographic Parity - Difference (0.8 - 1.0)
                                  </Box>
                                  <Box>
                                    Demographic Parity - Ratio (0.8 - 1.0)
                                  </Box>
                                </>
                              }
                            />
                          </ListItem>
                        </List>
                      </>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Divider />
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                checked={checked}
                onChange={handleChange}
              />
            }
            label={
              <>
                {checked ? (
                  <Box fontSize="body2.fontSize">
                    Marked as completed by Tyler Lee on January 26, 2022 at 3:38
                    PM
                  </Box>
                ) : (
                  <Box fontSize="body2.fontSize">Mark as complete</Box>
                )}
              </>
            }
          />
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
                        <Link>@Tyler.Lee</Link> can you please run an assessment
                        and push the metrics and chart results?
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
                        results in a bit
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
                        Thanks for jumping on this. Pls be sure to use
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
                  <LoadingButton
                    onClick={handleClickSend}
                    endIcon={<Send />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                  >
                    Send
                  </LoadingButton>
                </Item>
              </Stack>
            </Item>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
