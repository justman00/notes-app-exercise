import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NoteInfo from "./NoteInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    backgroundColor: "#c5e8b3",
    margin: '10px'
  },
  expand: {
    transform: "rotate(270deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

const NoteCard = ({ note }) => {
  const classes = useStyles();

  return (
    <div style = {{paddingLeft: '12px'}}>
      <Card className={classes.root}>
        <CardHeader title={note.data.title} />
        <CardContent>
          <Typography variant="body2" color="initial" component="p" noWrap>
            {note.data.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Link to = {`/notes/${note.ref.value.id}`}>
            <IconButton className={clsx(classes.expand)} aria-label="show more">
              <ExpandMoreIcon />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
      <Switch>
        <Route path="/notes/:id" component={NoteInfo} />
      </Switch>
    </div>
  );
};

export default NoteCard;
