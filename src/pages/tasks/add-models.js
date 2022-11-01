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
  Launch,
  LightbulbTwoTone,
  WidgetsTwoTone
} from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddModels() {
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
              <Typography fontWeight="bold">Add Models to Use Case</Typography>
              <Typography variant="body2">requested by: Fei Simmons</Typography>
            </Box>
            <Box>
              <Typography variant="body2">Sent: Mar 02 09:34 AM</Typography>
              <Typography variant="body2">
                Due: Mar 11{" "}
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
                  <ListItem disablePadding>
                    <ListItemButton onClick={handleClickOpen}>
                      <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                        <LightbulbTwoTone />
                      </ListItemIcon>
                      <ListItemText primary="AI Recruiting Software: njkoaJTNbJFAey5P3vYdk7" />
                    </ListItemButton>
                  </ListItem>
                </Box>
              </List>
            </Card>

            <Stack spacing={1}>
              <Item>
                <Box display="flex" alignItems="center">
                  <Box flexGrow={1}>Adding a Model to a Use Case</Box>
                </Box>
              </Item>
              <Item>
                <Typography>
                  Refer to the following docs on how to add a model to a use
                  case.{" "}
                </Typography>
              </Item>

              <Item>
                <Stack spacing={1} direction="row">
                  <Button
                    size="small"
                    endIcon={<Launch />}
                    variant="outlined"
                    color="primary"
                  >
                    Register a Model
                  </Button>
                  <Button
                    size="small"
                    endIcon={<Launch />}
                    variant="outlined"
                    color="secondary"
                  >
                    Add Model to Use Case
                  </Button>
                </Stack>
              </Item>
              <Item>
                <Typography>
                  or if the model has already been registered to Credo AI, you
                  can add directly in the Use Case Configuration:
                </Typography>
              </Item>
              <Item>
                <Box>
                  <Button size="small" variant="text" color="secondary">
                    View Configuration
                  </Button>
                </Box>
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
