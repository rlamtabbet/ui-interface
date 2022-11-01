import * as React from "react";
import PropTypes from "prop-types";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SvgIcon from "@mui/material/SvgIcon";
import Stack from "@mui/material/Stack";
import Item from "@mui/material/Stack";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

import {
  Apps,
  ArrowDropDown,
  ArrowRight,
  AssignmentLateTwoTone,
  BallotTwoTone,
  BusinessTwoTone,
  Cancel,
  ChatTwoTone,
  Close,
  ContactsTwoTone,
  FactCheckTwoTone,
  FindInPageTwoTone,
  GridOnTwoTone,
  InboxTwoTone,
  KitchenTwoTone,
  LanguageTwoTone,
  LightbulbTwoTone,
  ListAltTwoTone,
  LiveHelpTwoTone,
  LocalOfferTwoTone,
  PagesTwoTone,
  PlaylistAddCheckTwoTone,
  PolicyTwoTone,
  QuestionAnswerTwoTone,
  SecurityTwoTone,
  SettingsApplicationsTwoTone,
  SettingsTwoTone,
  StoreTwoTone,
  ViewListTwoTone,
  WidgetsTwoTone,
  WysiwygTwoTone
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Link,
  ListItemAvatar,
  ListItemButton,
  ListSubheader,
  Paper,
  Step,
  StepButton,
  StepContent,
  StepLabel,
  Stepper
} from "@mui/material";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

// Start steps
const steps = [
  {
    label: "Add use case info",
    description: `Provide some helpful information to describe this use case, where it will be used and how it will be used.`
  },
  {
    label: "Add vendor info",
    description:
      "Add vendor contact info to provide connectivity for notifications and requests."
  },
  {
    label: "Define requirements",
    description: `Align on process requirements like optional industry regulations and company policies, then work with your stakeholders to define a common definition of metrics with threshold bounds for your technical requirements to be assessed.`
  },
  {
    label: "Send vendor questionnaire",
    description: `Request necessary information from vendor to assess to risk of the product and to ensure they are meeting your organization's process and technical requirements.`
  },
  {
    label: "Request assessment",
    description: `Send the technical requirements to the data science team to request an assessment using the Credo AI Lens framework.`
  },
  {
    label: "Generate report",
    description: `Using the Credo AI Risk Translation Engine, process all available assessments and contextual evidence against the use case info requirements and custom AI risk profile to generate an AI risk report for analysis.`
  },
  {
    label: "Request audit",
    description: `Provide some helpful information to describe this use case, where it will be used and how it will be used.`
  }
];
// End steps

// Start tree
const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: 16,
  fontWeight: theme.typography.fontWeightMedium,
  [`& .MuiTreeItem-root`]: {
    fontSize: 12,
    fontWeight: theme.typography.fontWeightRegular
  },
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.action.hover
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)"
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      fontSize: "inherit",
      color: "inherit"
    }
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2)
    }
  }
}));

function CredoLogoIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M54.9001 86.1718C51.4167 87.2068 47.7559 87.4959 44.1544 87.0201C30.9026 85.4192 21.7776 75.6904 20.402 62.185C19.5985 54.2623 21.2056 46.8734 26.2448 40.579C32.142 33.1353 40.0277 30.3303 49.2889 31.0007C51.2221 31.1449 53.1323 31.5122 54.9818 32.0954L65.6187 16.5785C57.3653 13.0619 48.0904 12.1588 37.8894 13.7735C19.0401 16.7154 -0.0407929 34.0384 6.55018e-05 58.3673C6.55018e-05 66.0437 1.17134 73.419 4.91669 80.2606C14.0417 96.6806 28.0698 104.891 46.7557 105C48.4581 105 50.1469 105 51.8358 105C52.7191 104.943 53.5974 104.824 54.4643 104.644C58.4273 104.021 62.3006 102.918 66 101.36L54.9001 86.1718Z"
        fill="#7B04CA"
      />
      <path
        opacity="0.9"
        d="M72.5612 98L61.3367 83.0125C61.3367 83.0125 80.9796 59.9757 81.162 59.9757C81.2483 59.9032 81.3174 59.8136 81.3648 59.7131C81.4122 59.6126 81.4368 59.5034 81.4368 59.393C81.4368 59.2825 81.4122 59.1734 81.3648 59.0728C81.3174 58.9723 81.2483 58.8828 81.162 58.8103C79.9694 57.3603 61.2806 35.6921 61 35.3263L72.463 20C82.8737 33.1039 94.5332 46.2078 105 59.3252C94.6174 72.3885 72.5612 98 72.5612 98Z"
        fill="#7B04CA"
      />
      <path
        opacity="0.75"
        d="M103.291 98L92.3421 83.0125C92.3421 83.0125 111.502 59.9757 111.666 59.9757C111.75 59.9032 111.818 59.8136 111.864 59.7131C111.91 59.6126 111.934 59.5034 111.934 59.393C111.934 59.2825 111.91 59.1734 111.864 59.0728C111.818 58.9723 111.75 58.8828 111.666 58.8103C110.503 57.3603 92.2737 35.6921 92 35.3263L103.195 20C113.404 33.1716 124.804 46.2484 135 59.393C124.804 72.3885 103.291 98 103.291 98Z"
        fill="#4465F6"
      />
      <path
        opacity="0.5"
        d="M133.567 98L122.364 83.0255C122.364 83.0255 141.969 60.0087 142.137 60.0087C142.224 59.9362 142.293 59.8468 142.34 59.7463C142.387 59.6459 142.412 59.5368 142.412 59.4265C142.412 59.3161 142.387 59.2071 142.34 59.1066C142.293 59.0062 142.224 58.9167 142.137 58.8443C140.933 57.3956 122.28 35.7462 122 35.3807L133.455 20C143.916 33.1602 155.567 46.2257 166 59.3588C155.581 72.4107 133.567 98 133.567 98Z"
        fill="#4BD0F8"
      />
      <path
        d="M607.935 15.9999C606.886 16.0018 605.847 15.7989 604.878 15.4029C603.91 15.0069 603.031 14.4258 602.293 13.6933C601.555 12.9608 600.973 12.0916 600.58 11.1361C600.187 10.1806 599.992 9.15794 600.005 8.12753C599.968 7.06888 600.149 6.01382 600.538 5.02577C600.927 4.03771 601.515 3.13704 602.267 2.3779C603.019 1.61875 603.919 1.01679 604.914 0.608185C605.909 0.199583 606.978 -0.00722132 608.056 0.000192501C609.134 0.00760632 610.2 0.229087 611.189 0.651328C612.178 1.07357 613.07 1.68786 613.811 2.45727C614.552 3.22669 615.127 4.13535 615.502 5.12865C615.876 6.12196 616.043 7.1794 615.991 8.23745C615.961 10.3134 615.098 12.2938 613.589 13.7476C612.081 15.2015 610.048 16.011 607.935 15.9999Z"
        fill="#161616"
      />
      <path
        d="M556.611 46.8234L545.841 44.4289C546.053 43.4523 546.326 42.4898 546.66 41.5473C548.458 36.9247 551.901 33.1137 556.338 30.8327C559.991 28.9608 564.047 27.9952 568.159 28.0188C571.548 27.8985 574.932 28.3562 578.164 29.3716C585.262 31.8068 589.153 36.8529 590.313 44.0907C590.516 45.4339 590.612 46.791 590.599 48.1492C590.599 58.9721 590.599 69.7949 590.599 80.6177V81.9706H578.874V75.4633L578.642 75.3822C578.441 75.5767 578.254 75.7846 578.082 76.0045C576.603 78.0876 574.649 79.7964 572.38 80.9926C570.111 82.1889 567.589 82.839 565.019 82.8905C561.637 83.233 558.22 82.7692 555.055 81.5377C550.332 79.5625 546.783 76.4103 545.568 71.3236C544.353 66.2369 544.968 61.4072 548.571 57.2675C549.773 55.9007 551.24 54.7874 552.885 53.9936C557.064 51.927 561.647 50.7868 566.316 50.652C568.405 50.5709 570.507 50.652 572.595 50.652H573.796C578.656 50.7603 579.475 47.4052 578.601 44.1719C578.322 43.123 577.81 42.1495 577.101 41.323C576.392 40.4965 575.506 39.8381 574.506 39.3963C572.477 38.4093 570.233 37.9371 567.974 38.0222C565.716 38.1072 563.514 38.7467 561.566 39.8833C560.418 40.5272 559.414 41.3951 558.614 42.4345C557.814 43.4738 557.235 44.6632 556.911 45.9306C556.761 46.1876 556.761 46.4311 556.611 46.8234ZM578.765 59.1344C578.647 59.0809 578.523 59.0401 578.396 59.0127C574.22 59.0127 570.029 58.945 565.838 59.0127C563.464 59.1501 561.191 60.0099 559.327 61.4748C558.725 61.8997 558.216 62.4412 557.831 63.0668C557.447 63.6923 557.194 64.3888 557.089 65.114C556.737 66.8036 557.05 68.5627 557.963 70.0314C558.876 71.5 560.322 72.5672 562.003 73.0147C564.013 73.6085 566.137 73.7197 568.2 73.3394C570.485 73.111 572.651 72.2188 574.426 70.7747C576.201 69.3306 577.507 67.3989 578.178 65.2222C578.783 63.2524 578.983 61.1822 578.765 59.1344Z"
        fill="#161616"
      />
      <path
        d="M602.202 29.0605H613.709C614.023 30.0481 614.118 80.063 613.818 81.9435H602.27C602.011 81.0371 601.915 31.1709 602.202 29.0605Z"
        fill="#161616"
      />
      <path d="M511 18H510V99H511V18Z" fill="#161616" />
      <path
        d="M607.935 15.9999C606.886 16.0018 605.847 15.7989 604.878 15.4029C603.91 15.0069 603.031 14.4258 602.293 13.6933C601.555 12.9608 600.973 12.0916 600.58 11.1361C600.187 10.1806 599.992 9.15794 600.005 8.12753C599.968 7.06888 600.149 6.01382 600.538 5.02577C600.927 4.03771 601.515 3.13704 602.267 2.3779C603.019 1.61875 603.919 1.01679 604.914 0.608185C605.909 0.199583 606.978 -0.00722132 608.056 0.000192501C609.134 0.00760632 610.2 0.229087 611.189 0.651328C612.178 1.07357 613.07 1.68786 613.811 2.45727C614.552 3.22669 615.127 4.13535 615.502 5.12865C615.876 6.12196 616.043 7.1794 615.991 8.23745C615.961 10.3134 615.098 12.2938 613.589 13.7476C612.081 15.2015 610.048 16.011 607.935 15.9999Z"
        fill="#161616"
      />
      <path
        d="M222.33 83.9017C214.596 83.9017 208.108 81.3131 202.865 76.1359C197.622 70.8932 195 64.4053 195 56.6723C195 49.1359 197.654 42.7136 202.963 37.4053C208.272 32.0971 214.793 29.443 222.527 29.443C228.753 29.443 234.062 31.0813 238.453 34.358C242.844 37.6347 245.63 41.6323 246.809 46.3507L236.192 49.8896C235.471 47.3337 233.964 45.0728 231.67 43.1068C229.441 41.0752 226.361 40.0595 222.428 40.0595C218.037 40.0595 214.367 41.5995 211.418 44.6796C208.468 47.6942 206.994 51.6262 206.994 56.4757C206.994 61.3908 208.468 65.4211 211.418 68.5667C214.367 71.7124 218.07 73.2852 222.527 73.2852C229.146 73.2852 233.767 69.943 236.389 63.2585L247.104 66.699C245.728 71.2864 242.877 75.3167 238.551 78.79C234.291 82.1978 228.884 83.9017 222.33 83.9017Z"
        fill="#161616"
      />
      <path
        d="M287.153 42.3204C286.17 42.1238 285.056 42.0255 283.811 42.0255C279.354 42.0255 275.946 43.2706 273.587 45.7609C271.293 48.2512 270.146 51.7901 270.146 56.3774V83.017H258.447V30.5243H269.851V38.5849C271.424 35.8325 273.488 33.7354 276.044 32.2937C278.666 30.7864 281.419 30.0328 284.302 30.0328C285.285 30.0328 286.236 30.1311 287.153 30.3277V42.3204Z"
        fill="#161616"
      />
      <path
        d="M304.344 60.2112C304.409 64.1432 305.982 67.4199 309.063 70.0413C312.143 72.5971 315.682 73.875 319.68 73.875C327.021 73.875 331.674 70.926 333.64 65.0279L343.373 68.3701C341.931 73.1541 338.982 76.9551 334.525 79.7731C330.134 82.591 325.251 84 319.877 84C312.078 84 305.524 81.4114 300.215 76.2342C294.972 70.9915 292.35 64.4709 292.35 56.6723C292.35 49.1359 294.873 42.7136 299.92 37.4053C304.966 32.0971 311.258 29.443 318.795 29.443C326.791 29.443 333.05 31.9333 337.573 36.9138C342.095 41.8944 344.356 48.4478 344.356 56.574C344.356 58.1468 344.29 59.3592 344.159 60.2112H304.344ZM318.795 39.4697C315.191 39.4697 312.11 40.551 309.554 42.7136C306.998 44.8762 305.458 47.7597 304.934 51.3641H332.46C332.264 47.6942 330.855 44.8107 328.233 42.7136C325.677 40.551 322.531 39.4697 318.795 39.4697Z"
        fill="#161616"
      />
      <path
        d="M352.735 56.6723C352.735 49.5947 355.128 43.3034 359.912 37.7985C364.762 32.2937 371.087 29.5413 378.886 29.5413C381.704 29.5413 384.784 30.2621 388.127 31.7039C391.535 33.0801 394.124 35.1772 395.893 37.9951V3H407.592V83.017H396.188V74.858C394.353 77.8726 391.633 80.1335 388.029 81.6408C384.49 83.0825 381.344 83.8034 378.591 83.8034C371.185 83.8034 365.024 81.1165 360.109 75.7427C355.193 70.3034 352.735 63.9466 352.735 56.6723ZM391.666 68.4684C394.615 65.2573 396.09 61.3252 396.09 56.6723C396.09 52.0194 394.615 48.0874 391.666 44.8762C388.717 41.6651 384.948 40.0595 380.36 40.0595C375.707 40.0595 371.906 41.6651 368.957 44.8762C366.073 48.0874 364.631 52.0194 364.631 56.6723C364.631 61.3252 366.073 65.2573 368.957 68.4684C371.906 71.6141 375.707 73.1869 380.36 73.1869C385.014 73.1869 388.782 71.6141 391.666 68.4684Z"
        fill="#161616"
      />
      <path
        d="M427.713 76.0376C422.339 70.7949 419.651 64.3398 419.651 56.6723C419.651 49.0049 422.371 42.5498 427.811 37.307C433.251 32.0643 439.805 29.443 447.473 29.443C455.076 29.443 461.564 32.0316 466.939 37.2087C472.313 42.3859 475 48.8083 475 56.4757C475 64.2087 472.313 70.7294 466.939 76.0376C461.63 81.2803 455.109 83.9017 447.375 83.9017C439.707 83.9017 433.153 81.2803 427.713 76.0376ZM435.971 44.8762C433.087 48.0218 431.645 51.8883 431.645 56.4757C431.645 61.0631 433.12 65.0279 436.069 68.3701C439.019 71.6468 442.82 73.2852 447.473 73.2852C452.127 73.2852 455.895 71.6796 458.779 68.4684C461.663 65.2573 463.104 61.3252 463.104 56.6723C463.104 52.0194 461.63 48.0874 458.681 44.8762C455.797 41.6651 452.028 40.0595 447.375 40.0595C442.722 40.0595 438.92 41.6651 435.971 44.8762Z"
        fill="#161616"
      />
    </SvgIcon>
  );
}

function StyledTreeItem(props) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Box sx={{ fontWeight: "inherit", flexGrow: 1 }}>{labelText}</Box>
          <Box fontSize="caption.fontSize" color="inherit">
            {labelInfo}
          </Box>
        </Box>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  labelSecondary: PropTypes.elementType.isRequired
};
// End tree

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // Start menu
  const [anchorEl, setAnchorEl] = React.useState(false);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // End menu

  // Start steps
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  // End steps

  return (
    <Box>
      <AppBar position="fixed" color="inherit" elevation={1}>
        <Toolbar variant="dense">
          <Stack flexGrow={1} direction="row" alignItems="center">
            <Item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                edge="start"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Item>
            <Item>
              <CredoLogoIcon
                id="icon-logo"
                width="616"
                height="105"
                viewBox="0 0 616 105"
                sx={{ width: 120, height: 30 }}
              />
            </Item>
            <Item flexGrow={1}></Item>
            <Item>
              <IconButton onClick={handleClick}>
                <Apps />
              </IconButton>
              <Menu anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
                <Grid container spacing={1} width={400} p={1}>
                  <Grid item xs={4}>
                    <Item>
                      <Button color="info">
                        <Box>
                          <LightbulbTwoTone />
                          <Box
                            sx={{ textTransform: "capitalize", lineHeight: 1 }}
                          >
                            Use Cases
                          </Box>
                        </Box>
                      </Button>
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>
                      <Button color="secondary">
                        <Box>
                          <WidgetsTwoTone />
                          <Box
                            sx={{ textTransform: "capitalize", lineHeight: 1 }}
                          >
                            Model Projects
                          </Box>
                        </Box>
                      </Button>
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>
                      <Button color="warning">
                        <Box>
                          <SecurityTwoTone />
                          <Box
                            sx={{ textTransform: "capitalize", lineHeight: 1 }}
                          >
                            Policy Center
                          </Box>
                        </Box>
                      </Button>
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>
                      <Button color="error">
                        <Box>
                          <GridOnTwoTone />
                          <Box
                            sx={{ textTransform: "capitalize", lineHeight: 1 }}
                          >
                            Datasets
                          </Box>
                        </Box>
                      </Button>
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>
                      <Button>
                        <Box>
                          <InboxTwoTone />
                          <Box
                            sx={{ textTransform: "capitalize", lineHeight: 1 }}
                          >
                            Task Inbox
                          </Box>
                        </Box>
                      </Button>
                    </Item>
                  </Grid>

                  <Grid item xs={4}>
                    <Item>
                      <Button color="inherit">
                        <Box>
                          <SettingsApplicationsTwoTone />
                          <Box
                            sx={{ textTransform: "capitalize", lineHeight: 1 }}
                          >
                            Admin
                          </Box>
                        </Box>
                      </Button>
                    </Item>
                  </Grid>
                </Grid>
              </Menu>
            </Item>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              top: 50,
              padding: 1,
              boxSizing: "border-box"
            }
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<ArrowDropDown />}
              fullWidth
            >
              <Box sx={{ textTransform: "capitalize" }}>
                AI Recruiting Software
              </Box>
            </Button>
          </DrawerHeader>
          <Box my={1}>
            <Divider />
          </Box>
          <TreeView
            defaultCollapseIcon={<ArrowDropDown />}
            defaultExpandIcon={<ArrowRight />}
            defaultExpanded={["1", "2", "3"]}
            sx={{ marginLeft: "-10px" }}
          >
            <StyledTreeItem
              nodeId="0"
              labelText={
                <Box display="flex" alignItems="center">
                  <Box flexGrow={1}>Overview</Box>
                  <IconButton size="small">
                    <SettingsTwoTone fontSize="small" />
                  </IconButton>
                </Box>
              }
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
            <StyledTreeItem nodeId="1" labelText="Align">
              <StyledTreeItem
                nodeId="4"
                labelText="Define Requirements"
                labelIcon={BallotTwoTone}
                color="#1a73e8"
                bgColor="#e8f0fe"
              />
              <StyledTreeItem
                nodeId="5"
                labelText="View Responses"
                labelIcon={QuestionAnswerTwoTone}
                labelInfo="2"
                color="#e3742f"
                bgColor="#fcefe3"
              />
              <StyledTreeItem
                nodeId="6"
                labelText="Finalize Alignment"
                labelIcon={FactCheckTwoTone}
                color="#a250f5"
                bgColor="#f3e8fd"
              />
            </StyledTreeItem>
            <StyledTreeItem nodeId="2" labelText="Assess">
              <StyledTreeItem
                nodeId="7"
                labelText="Request Assessment"
                labelIcon={LiveHelpTwoTone}
                color="#1a73e8"
                bgColor="#e8f0fe"
              />
              <StyledTreeItem
                nodeId="8"
                labelText="Required Policies"
                labelIcon={ListAltTwoTone}
                labelInfo="6"
                color="#e3742f"
                bgColor="#fcefe3"
              />
              <StyledTreeItem
                nodeId="9"
                labelText="View Results"
                labelIcon={FindInPageTwoTone}
                labelInfo="2"
                color="#a250f5"
                bgColor="#f3e8fd"
              />
            </StyledTreeItem>
            <StyledTreeItem nodeId="3" labelText="Analyze">
              <StyledTreeItem
                nodeId="10"
                labelText="Generate Report"
                labelIcon={PagesTwoTone}
                color="#1a73e8"
                bgColor="#e8f0fe"
              />
              <StyledTreeItem
                nodeId="10"
                labelText="View Reports"
                labelIcon={WysiwygTwoTone}
                labelInfo="1"
                color="#1a73e8"
                bgColor="#e8f0fe"
              />
              <StyledTreeItem
                nodeId="11"
                labelText="Request Audit"
                labelIcon={PolicyTwoTone}
                color="#e3742f"
                bgColor="#fcefe3"
              />
            </StyledTreeItem>
          </TreeView>
        </Drawer>
        <Main
          open={open}
          sx={{
            top: 50,
            height: "calc(100vh - 50px)",
            position: "relative",
            bgcolor: "action.hover",
            overflow: "hidden"
          }}
        >
          <Grid
            container
            sx={{
              height: "calc(100vh - 50px)",
              position: "relative"
            }}
          >
            <Grid
              item
              xs={8}
              sm={8}
              md={9}
              sx={{
                height: "calc(100vh - 50px)",
                overflow: "auto"
              }}
            >
              <Item>
                <Grid container p={1} spacing={1}>
                  <Grid item xs={8} sm={8} md={7}>
                    <Item p={1}>
                      <Card>
                        <CardContent>
                          <Typography color="text.secondary" gutterBottom>
                            Action Items
                          </Typography>
                          <Box sx={{ width: "100%" }}>
                            <Stepper
                              nonLinear
                              orientation="vertical"
                              activeStep={activeStep}
                            >
                              {steps.map((step, index) => (
                                <Step
                                  sx={{ mb: -2 }}
                                  key={step.label}
                                  completed={completed[index]}
                                >
                                  <StepButton
                                    color="inherit"
                                    onClick={handleStep(index)}
                                  >
                                    {step.label}
                                  </StepButton>
                                  <StepContent>
                                    <Box fontSize="caption.fontSize" mb={1}>
                                      {step.description}
                                    </Box>
                                    <Box display="flex" sx={{ mb: 2 }}>
                                      <Box mr={2}>
                                        {activeStep !== steps.length &&
                                          (completed[activeStep] ? (
                                            <Button
                                              size="small"
                                              variant="outlined"
                                              onClick={handleComplete}
                                            >
                                              Edit
                                            </Button>
                                          ) : (
                                            <Button
                                              size="small"
                                              variant="contained"
                                              onClick={handleComplete}
                                            >
                                              Complete Step
                                            </Button>
                                          ))}
                                      </Box>
                                      <Box mr={1}>
                                        <Button size="small">Learn more</Button>
                                      </Box>
                                    </Box>
                                  </StepContent>
                                </Step>
                              ))}
                            </Stepper>
                            <Box mb={-2} mt={2}>
                              {allStepsCompleted() ? (
                                <React.Fragment>
                                  <Button onClick={handleReset}>Reset</Button>
                                </React.Fragment>
                              ) : null}
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Item>
                  </Grid>
                  <Grid item xs={4} sm={4} md={5}>
                    <Item p={1}>
                      <Card>
                        <CardContent>
                          <Typography color="text.secondary" gutterBottom>
                            Recent Activity
                          </Typography>
                        </CardContent>
                        <List dense disablePadding sx={{ mt: -2 }}>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "blue" }}>
                                <WysiwygTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Peter Barrett (Moveworks) uploaded a report"
                                secondary="AI Recruiting Software - Vendor Report"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "red" }}>
                                <ChatTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Chad Holdings (AI Recruiting Co.) left a comment"
                                secondary="Which metric are we needing for FAIR.T3 again?"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "teal" }}>
                                <LiveHelpTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Fei Simmons sent a vendor report request"
                                secondary="AI Recruiting Software - Vendor Survey"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "green" }}>
                                <FactCheckTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Fei Simmons submitted final alignment"
                                secondary="AI Recruiting Software - Alignment (Final)"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "magenta" }}>
                                <ViewListTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Sam Mavis generated a policy compliance report"
                                secondary="AI Recruiting Software - Policy Compliance"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "orange" }}>
                                <QuestionAnswerTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Tyler Lee submitted an alignment response"
                                secondary="AI Recruiting Software - Alignment"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                <ContactsTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Sam Mavis added vendor info"
                                secondary="AI Recruiting Co"
                              />
                            </ListItemButton>
                          </ListItem>
                        </List>
                        <CardActions>
                          <Button size="small">View More</Button>
                        </CardActions>
                      </Card>
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item p={1}>
                      <Card>
                        <CardContent>
                          <Typography color="text.secondary" gutterBottom>
                            Align
                          </Typography>
                        </CardContent>
                        <List dense disablePadding sx={{ mt: -2 }}>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "blue" }}>
                                <FactCheckTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Finalized Requirements"
                                secondary="Use case requirements"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "blue" }}>
                                <BallotTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Technical Requirements"
                                secondary="Assessment metrics and thresholds"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "blue" }}>
                                <ListAltTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Process Requirements"
                                secondary="Policies and standards"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "blue" }}>
                                <QuestionAnswerTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Requirements Responses (3)"
                                secondary="Requirements alignment"
                              />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </Card>
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item p={1}>
                      <Card>
                        <CardContent>
                          <Typography color="text.secondary" gutterBottom>
                            Assess
                          </Typography>
                        </CardContent>
                        <List dense disablePadding sx={{ mt: -2 }}>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                <WysiwygTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Fairness Assessments (2)"
                                secondary="Results from 2 Model Projects"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                <WysiwygTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Performance Assessment (3)"
                                secondary="Results from 2 Model Projects"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                <LiveHelpTwoTone />
                              </ListItemIcon>
                              <ListItemText primary="Assessment Requests (4)" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                <KitchenTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Text Parsing Assessments (2)"
                                secondary="Model Project Asset Store"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "purple" }}>
                                <KitchenTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Intent Classification Assessments (3)"
                                secondary="Model Project Asset Store"
                              />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </Card>
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item p={1}>
                      <Card>
                        <CardContent>
                          <Typography color="text.secondary" gutterBottom>
                            Analyze
                          </Typography>
                        </CardContent>
                        <List dense disablePadding sx={{ mt: -2 }}>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "magenta" }}>
                                <AssignmentLateTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Use Case AI Risk Report"
                                secondary="Fri Jan 7 11:13 PM"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "magenta" }}>
                                <StoreTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="AI Vendor Report"
                                secondary="Thu Jan 6 9:11 AM"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "magenta" }}>
                                <BusinessTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Internal Audit"
                                secondary="Wed Jan 5 8:42 PM"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "magenta" }}>
                                <PlaylistAddCheckTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Policy Compliance Report"
                                secondary="Tue Jan 4 8:22 AM"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "magenta" }}>
                                <AssignmentLateTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Fairness Risk Report"
                                secondary="Tue Jan 4 8:22 AM"
                              />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon sx={{ mr: -2, color: "magenta" }}>
                                <AssignmentLateTwoTone />
                              </ListItemIcon>
                              <ListItemText
                                primary="Performance Risk Report"
                                secondary="Tue Jan 4 8:19 AM"
                              />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </Card>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              md={3}
              sx={{
                bgcolor: "background.paper",
                borderLeft: "1px solid rgba(0,0,0,0.1)",
                height: "calc(100vh - 50px)",
                overflow: "auto"
              }}
            >
              <Item>
                <Stack spacing={1} divider={<Divider />}>
                  <Item
                    sx={{
                      px: 2,
                      pt: 3,
                      position: "sticky",
                      top: 0,
                      bgcolor: "background.paper",
                      zIndex: 3
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <Box flexGrow={1}>Use Case Details</Box>
                      <Box>
                        <IconButton size="small">
                          <Close fontSize="inherit" />
                        </IconButton>
                      </Box>
                    </Box>
                  </Item>
                  <Item sx={{ px: 2 }}>
                    <Box>
                      NGC HR will use the chatbot to automate simple requests,
                      which frees up our HR staff to focus on...{" "}
                      <Link href="#" variant="body2">
                        [more]
                      </Link>
                    </Box>
                  </Item>
                  <Item>
                    <Typography sx={{ px: 2 }}>Stakeholders</Typography>
                    <List dense disablePadding>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt="Fei Simmons"
                            src="https://mui.com/static/images/avatar/4.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Fei Simmons"
                          secondary={
                            <React.Fragment>
                              <Typography variant="body2">
                                Product Manager
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt="Tyler Lee"
                            src="https://mui.com/static/images/avatar/1.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Tyler Lee"
                          secondary={
                            <React.Fragment>
                              <Typography variant="body2">
                                Data Science Lead
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            alt="Sam Mavis"
                            src="https://mui.com/static/images/avatar/2.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Sam Mavis"
                          secondary={
                            <React.Fragment>
                              <Typography variant="body2">
                                Compliance
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </List>
                  </Item>
                  <Item>
                    <Typography sx={{ px: 2 }}>Info</Typography>
                    <List dense disablePadding>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <LanguageTwoTone />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <React.Fragment>
                              <Typography variant="body2" color="text.seconary">
                                Regions
                              </Typography>
                            </React.Fragment>
                          }
                          secondary="US, EU, Canada"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <LocalOfferTwoTone />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <React.Fragment>
                              <Typography variant="body2" color="text.seconary">
                                Tags
                              </Typography>
                            </React.Fragment>
                          }
                          secondary={
                            <React.Fragment>
                              <Link href="#" variant="caption">
                                HR
                              </Link>
                              ,{" "}
                              <Link href="#" variant="caption">
                                Bias
                              </Link>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <LightbulbTwoTone />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <React.Fragment>
                              <Typography variant="body2" color="text.seconary">
                                Use Case Type
                              </Typography>
                            </React.Fragment>
                          }
                          secondary="Vendor Product"
                        />
                      </ListItem>
                    </List>
                  </Item>
                  <Item>
                    <Typography sx={{ px: 2 }}>Vendor</Typography>
                    <List dense disablePadding>
                      <ListItem>
                        <ListItemText
                          primary={
                            <React.Fragment>
                              <Typography variant="body2" color="text.seconary">
                                Name
                              </Typography>
                            </React.Fragment>
                          }
                          secondary="AI Recruiting Co."
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={
                            <React.Fragment>
                              <Typography variant="body2" color="text.seconary">
                                Address
                              </Typography>
                            </React.Fragment>
                          }
                          secondary={
                            <React.Fragment>
                              <Link href="#" underline="none" variant="caption">
                                1277 Terra Bella Avenue Mountain View, CA 94043
                              </Link>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={
                            <React.Fragment>
                              <Typography variant="body2" color="text.seconary">
                                Phone
                              </Typography>
                            </React.Fragment>
                          }
                          secondary="(408) 435-5100"
                        />
                      </ListItem>
                      <ListSubheader>Contacts</ListSubheader>
                      <ListItem>
                        <ListItemText
                          primary={
                            <React.Fragment>
                              <Typography variant="body2" color="text.seconary">
                                Pete Barry
                              </Typography>
                            </React.Fragment>
                          }
                          secondary={
                            <React.Fragment>
                              <Link href="#" underline="none" variant="caption">
                                pb@AI-Recruiting.ai
                              </Link>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={
                            <React.Fragment>
                              <Typography variant="body2" color="text.seconary">
                                Chad Holdings
                              </Typography>
                            </React.Fragment>
                          }
                          secondary={
                            <React.Fragment>
                              <Link href="#" underline="none" variant="caption">
                                ch@AI-Recruiting.ai
                              </Link>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </List>
                  </Item>
                </Stack>
              </Item>
            </Grid>
          </Grid>
        </Main>
      </Box>
    </Box>
  );
}
