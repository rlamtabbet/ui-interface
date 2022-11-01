import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { BusinessTwoTone, LightbulbTwoTone } from "@mui/icons-material";
import { Card, CircularProgress } from "@mui/material";

export default function UseCaseCard() {
  return (
    <Stack spacing={1} sx={{ width: "100%" }}>
      <Card variant="outlined">
        <List dense>
          <ListItem sx={{ width: "100%" }}>
            <ListItemIcon sx={{ mr: -2, color: "teal" }}>
              <LightbulbTwoTone />
            </ListItemIcon>
            <ListItemText
              primary={
                <Box display="flex" fontSize="subtitle1.fontSize">
                  <Box>Use case:&nbsp;</Box>
                  <Box fontWeight="bold">HR Chatbot</Box>
                </Box>
              }
            />
          </ListItem>
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
            Fairness Risk
          </Box>
          <Box fontSize="h5.fontSize" lineHeight="24px" color="error.light">
            Critical
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
            Performance Risk
          </Box>
          <Box fontSize="h5.fontSize" lineHeight="24px" color="warning.light">
            Moderate
          </Box>
        </Card>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Card
          variant="outlined"
          sx={{
            p: 1,
            textAlign: "center",
            width: "50%"
          }}
        >
          <Box fontSize="body2.fontSize" mb={0.25} color="text.secondary">
            Brand Outcome
          </Box>
          <Box fontSize="32px" lineHeight="22px">
            <BusinessTwoTone fontSize="inherit" color="warning" />
          </Box>
          <Box fontSize="h6.fontSize" color="warning.dark">
            Moderate
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            p: 1,
            textAlign: "center",
            width: "50%"
          }}
        >
          <Box fontSize="body2.fontSize" mb={0.25} color="text.secondary">
            Regulatory Outcome
          </Box>
          <Box fontSize="32px" lineHeight="22px">
            <BusinessTwoTone fontSize="inherit" color="error" />
          </Box>
          <Box fontSize="h6.fontSize" color="error.dark">
            High
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            p: 1,
            textAlign: "center",
            width: "50%"
          }}
        >
          <Box fontSize="body2.fontSize" mb={0.25} color="text.secondary">
            Financial Outcome
          </Box>
          <Box fontSize="32px" lineHeight="22px">
            <BusinessTwoTone fontSize="inherit" color="info" />
          </Box>
          <Box fontSize="h6.fontSize" color="info.main">
            Low
          </Box>
        </Card>
      </Stack>
      <Typography color="text.secondary">Policy Pack Compliance</Typography>
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
            Company Pack
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
    </Stack>
  );
}
