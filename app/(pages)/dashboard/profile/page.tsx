"use client";

import {
  Typography,
  Tooltip,
  IconButton,
  Divider,
  Box,
  ListItem,
  ListItemText,
  List,
  Avatar,
  useTheme,
} from "@mui/material";
import PhoneTwoToneIcon from "@mui/icons-material/PhoneTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import { ContainerStyled } from "./Index.styles";

function Profile() {
  const theme = useTheme();

  return (
    <ContainerStyled maxWidth="xl">
      <Avatar
        sx={{
          mx: "auto",
          mb: 1.5,
          width: theme.spacing(12),
          height: theme.spacing(12),
        }}
        variant="rounded"
        alt="Craig Donin"
        src="/jamir.jpeg"
      />
      <Typography align="center" variant="h4" gutterBottom>
        Jamir Patiño
      </Typography>
      <Typography align="center" variant="subtitle2" gutterBottom>
        Senior frontend Developer
      </Typography>

      <Box py={2} display="flex" alignItems="center" justifyContent="center">
        <Tooltip arrow placement="top" title="3004226213">
          <IconButton
            color="primary"
            sx={{
              mx: 0.5,
            }}
          >
            <PhoneTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top" title="jamir2308@gmail.com">
          <IconButton
            color="primary"
            sx={{
              mx: 0.5,
            }}
          >
            <EmailTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top" title="Escribeme">
          <IconButton
            color="primary"
            sx={{
              mx: 0.5,
            }}
          >
            <MessageTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <List
        sx={{
          px: 2,
        }}
      >
        <Divider component="li" />
        <ListItem
          sx={{
            py: 1.5,
          }}
        >
          <ListItemText
            primary="Experiencia"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
          <Typography variant="subtitle2" color="text.primary">
            +4 años
          </Typography>
        </ListItem>
        <Divider component="li" />
        <ListItem
          sx={{
            py: 1.5,
          }}
        >
          <ListItemText
            primary="Nacionalidad"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
          <Typography variant="subtitle2" color="text.primary">
            Colombiana
          </Typography>
        </ListItem>
        <Divider component="li" />
        <ListItem
          sx={{
            py: 1.5,
          }}
        >
          <ListItemText
            primary="Hobbies"
            primaryTypographyProps={{ variant: "subtitle2" }}
          />
          <Typography variant="subtitle2" color="text.primary">
            Futbol, Familia, Leer, 
          </Typography>
        </ListItem>
      </List>
    </ContainerStyled>
  );
}

export default Profile;