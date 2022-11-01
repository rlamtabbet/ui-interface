import * as React from "react";
import Box from "@mui/material/Box";
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
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Stack
} from "@mui/material";
import {
  ArchiveTwoTone,
  ArticleTwoTone,
  BalanceTwoTone,
  DeleteForeverTwoTone,
  Edit,
  ExpandMore,
  FeaturedPlayListTwoTone,
  FileCopy,
  LabelTwoTone,
  LocalOfferTwoTone,
  NetworkCheckTwoTone,
  StoreTwoTone,
  TagTwoTone,
  TodayTwoTone,
  TransferWithinAStation
} from "@mui/icons-material";
import { Masonry } from "@mui/lab";

export default function Configuration() {
  // Start accordion
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // End accordion

  return (
    <>
      <Box p={1} display="flex" alignItems="center" bgcolor="background.paper">
        <Box flexGrow={1}>Configuration</Box>
        <Box mr={1}>
          <Button size="small" variant="outlined" color="inherit">
            Cancel
          </Button>
        </Box>
        <Box mr={1}>
          <Button size="small" variant="contained" color="secondary">
            Save
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
            overflow: "auto",
            paddingBottom: 25
          }}
        >
          <Item p={1}>
            <Container maxWidth="md" sx={{ py: 3 }}>
              <Stack spacing={2}>
                <Card>
                  <CardContent>
                    <Typography color="text.secondary">
                      Use Case Info
                    </Typography>
                  </CardContent>
                  <Divider />
                  <List dense disablePadding>
                    <ListItem>
                      <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                        <FeaturedPlayListTwoTone />
                      </ListItemIcon>
                      <ListItemText
                        primary="Use Case Name"
                        secondary={
                          <>
                            <Box>AI Recruiting Software</Box>
                          </>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                        <ArticleTwoTone />
                      </ListItemIcon>
                      <ListItemText
                        primary="Description"
                        secondary={
                          <>
                            <Box fontSize="caption.fontSize">
                              NGC HR will use the chatbot to automate simple
                              requests, which frees up our HR staff to focus on
                              more critical human tasks.
                            </Box>
                          </>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon sx={{ mr: -2, color: "indigo" }}>
                        <LocalOfferTwoTone />
                      </ListItemIcon>
                      <ListItemText
                        primary="Tags"
                        secondary={
                          <>
                            <Stack sx={{ mt: 0.5 }} direction="row" spacing={1}>
                              <Chip
                                size="small"
                                icon={<LabelTwoTone />}
                                label="HR"
                                variant="outlined"
                              />
                              <Chip
                                size="small"
                                icon={<LabelTwoTone />}
                                label="Chat"
                                variant="outlined"
                              />
                              <Chip
                                size="small"
                                icon={<LabelTwoTone />}
                                label="New York"
                                variant="outlined"
                              />
                            </Stack>
                          </>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemIcon sx={{ mr: -2, color: "darkOrange" }}>
                        <StoreTwoTone />
                      </ListItemIcon>
                      <ListItemText
                        primary="Use Case Type"
                        secondary={
                          <>
                            <Box>Vendor use case</Box>
                            <Box fontSize="caption.fontSize">
                              Risk that your AI systems disproportionately
                              advantage certain groups above others.
                            </Box>
                          </>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </Card>
                <Card>
                  <CardContent>
                    <Typography color="text.secondary">
                      Use Case Stakeholders
                    </Typography>
                  </CardContent>
                  <Divider />
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
                      <ListItemSecondaryAction>
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      </ListItemSecondaryAction>
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
                      <ListItemSecondaryAction>
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      </ListItemSecondaryAction>
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
                      <ListItemSecondaryAction>
                        <IconButton size="small">
                          <Edit fontSize="small" />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <Box p={1}>
                      <Button fullWidth color="secondary" variant="outlined">
                        Add Stakeholder
                      </Button>
                    </Box>
                  </List>
                </Card>
                <Card>
                  <CardContent>
                    <Typography color="text.secondary">
                      Use Case Metadata
                    </Typography>
                  </CardContent>
                  <Divider />
                  <List dense disablePadding>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2 }}>
                          <TagTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Use Case ID (for Credo AI Lens & troubleshooting)"
                          secondary={
                            <>
                              <Box fontFamily="courier">
                                emTbTczFrkLTKtehfpZjsg
                              </Box>
                            </>
                          }
                        />
                        <ListItemSecondaryAction>
                          <IconButton size="small">
                            <FileCopy fontSize="small" />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2 }}>
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
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Card>
                <Card>
                  <CardContent>
                    <Typography color="text.secondary">
                      Models Governed
                    </Typography>
                  </CardContent>
                  <Divider />
                  <Box
                    height={200}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                  >
                    <Stack spacing={1}>
                      <Typography color="text.secondary">
                        Models must be registered to Credo AI and associated
                        with Use Cases.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        Browse existing registered models, or alternatively use
                        Credo AI Lens to register &amp; associate models.
                      </Typography>
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                        direction="row"
                        spacing={1}
                      >
                        <Button color="secondary" variant="outlined">
                          Browse Models
                        </Button>
                        <Button color="secondary" variant="contained">
                          View Lens Docs
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                </Card>
                <Card>
                  <CardContent>
                    <Typography color="text.secondary">
                      Critical Settings
                    </Typography>
                  </CardContent>
                  <Divider />
                  <List dense disablePadding>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2 }}>
                          <TransferWithinAStation />
                        </ListItemIcon>
                        <ListItemText
                          primary="Transfer Ownership"
                          secondary="Transfer to team member"
                        />
                        <ListItemSecondaryAction>
                          <Button
                            size="small"
                            variant="outlined"
                            color="secondary"
                          >
                            Transfer
                          </Button>
                        </ListItemSecondaryAction>
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2 }}>
                          <ArchiveTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Archive Use Case"
                          secondary="Remove from usage but do not delete"
                        />
                        <ListItemSecondaryAction>
                          <Button
                            size="small"
                            variant="outlined"
                            color="warning"
                          >
                            Archive
                          </Button>
                        </ListItemSecondaryAction>
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon sx={{ mr: -2 }}>
                          <DeleteForeverTwoTone />
                        </ListItemIcon>
                        <ListItemText
                          primary="Delete Use Case"
                          secondary="Permanently delete this Use Case and all its history"
                        />
                        <ListItemSecondaryAction>
                          <Button size="small" variant="outlined" color="error">
                            Delete
                          </Button>
                        </ListItemSecondaryAction>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Card>
              </Stack>
            </Container>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
