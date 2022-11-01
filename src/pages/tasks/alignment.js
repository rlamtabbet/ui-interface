import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Item from "@mui/material/Stack";
import Slide from "@mui/material/Slide";

import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Dialog,
  IconButton,
  List,
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Chip,
  Checkbox
} from "@mui/material";
import {
  AssignmentLateTwoTone,
  Close,
  FactCheckTwoTone,
  InfoOutlined,
  LightbulbTwoTone
} from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Alignment() {
  // Start policies
  const [checked, setChecked] = React.useState(["Fairness Pack"]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const packs = [
    {
      name: "Fairness Pack",
      recommened: true,
      policies: "9 process, 4 technical",
      description:
        "Measure the risk that your use case and models will produce unfair results or perpetuate harmful societal biases."
    },
    {
      name: "Security Pack",
      recommened: false,
      policies: "14 process, 1 technical",
      description:
        "Measure the risk that your use case and models will be vulnerable to adversarial attacks, data breaches, or other security concerns."
    },
    {
      name: "Transparency Pack",
      recommened: false,
      policies: "TBD",
      description: "Coming Soon!"
    },
    {
      name: "Performance Pack",
      recommened: false,
      policies: "21 process, 4 technical",
      description:
        "Measure the risk that your use case and models will not meet performance objectives."
    },
    {
      name: "NYC Hiring Pack",
      recommened: false,
      policies: "3 process, 3 technical",
      description:
        "Measure bias in your automated hiring tools in preparation for the new law."
    },
    {
      name: "EU AI Pack",
      policies: "8 process, 4 technical",
      recommened: false,
      description:
        "Readiness for the upcoming EU AI Act regulations and policies."
    }
  ];
  // End policies

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
              <Typography fontWeight="bold">
                Requirements Input - Policies
              </Typography>
              <Typography variant="body2">requested by: Fei Simmons</Typography>
            </Box>
            <Box>
              <Typography variant="body2">Sent: Jan 18 9:34 AM</Typography>
              <Typography variant="body2">
                Due: Jan 20{" "}
                <Typography variant="body2" component="span" color="error">
                  (Overdue)
                </Typography>
              </Typography>
            </Box>
          </Box>

          <Stack mx={0.5} spacing={1}>
            <Card variant="outlined">
              <List dense>
                <Box display="flex" flexWrap="wrap">
                  <ListItem sx={{ width: "33%" }} disablePadding>
                    <ListItemButton onClick={handleClickOpen}>
                      <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                        <LightbulbTwoTone />
                      </ListItemIcon>
                      <ListItemText primary="AI Recruiting Software" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem sx={{ width: "33%" }}>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <FactCheckTwoTone color="info" />
                    </ListItemIcon>
                    <ListItemText primary="Alignment Type: Risk" />
                  </ListItem>
                  <ListItem sx={{ width: "33%" }}>
                    <ListItemIcon sx={{ mr: -2 }}>
                      <AssignmentLateTwoTone color="warning" />
                    </ListItemIcon>
                    <ListItemText primary="Risk: Fairness" />
                  </ListItem>
                </Box>
              </List>
            </Card>
            <Item>
              <Card variant="outlined">
                <CardContent>
                  Please let me know which policy pack applies for Fairness of
                  an AI Recruiting Software use case, thanks!
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
                  Which technical &amp; process requirements are needed?
                </Typography>
              </Box>

              <Typography variant="subtitle1" color="text.secondary">
                Select the Policy Packs to ensure the proper steps are followed
                and evidence is collected.
              </Typography>
              <Typography variant="caption" color="text.secondary" gutterBottom>
                (Policy Packs can be managed in the{" "}
                <Link
                  href="https://app.credo.ai/policy-center/"
                  target="_blank"
                >
                  Policy Center
                </Link>
                )
              </Typography>
            </Item>
            <Item>
              <List dense disablePadding>
                {packs.map((pack, index) => {
                  const labelId = `pack-${pack.name}`;

                  return (
                    <ListItem
                      key={pack.name}
                      secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                          <InfoOutlined />
                        </IconButton>
                      }
                      disablePadding
                    >
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(pack.name)}
                        dense
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(pack.name) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{
                              "aria-labelledby": labelId
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={labelId}
                          primary={
                            <Box display="flex" alignItems="center">
                              <Box>{pack.name}</Box>
                              {pack.recommened ? (
                                <Box ml={1}>
                                  <Chip
                                    size="small"
                                    color="secondary"
                                    variant="outlined"
                                    label="Recommended"
                                  />
                                </Box>
                              ) : null}
                            </Box>
                          }
                          secondary={
                            <>
                              <Box>Policies: {pack.policies}</Box>
                              <Box>{pack.description}</Box>
                            </>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Item>

            <CardActions>
              <Button variant="contained">Submit</Button>
            </CardActions>
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
