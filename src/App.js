import React, { Component, Fragment } from "react";
//UI MATERIAL
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
//NOTES COMPONENTS
import NotesForm from "./NotesForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      notes: []
    };
  }

  updateField = field => e => {
    this.setState({ [field]: e.target.value });
  };

  saveNote = () => {
    if (this.state.title && this.state.description) {
      this.setState({
        notes: [
          ...this.state.notes,
          {
            id: Date.now(),
            title: this.state.title,
            description: this.state.description
          }
        ],
        title: "",
        description: ""
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <Typography align="center" variant="h2" gutterBottom>
          My Notes
        </Typography>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={4}>
            {/*NOTES LIST*/}
          </Grid>
          <Grid item xs={8}>
            <NotesForm
              title={this.state.title}
              description={this.state.description}
              updateField={this.updateField}
              saveNote={this.saveNote}
            />
          </Grid>
        </Grid>
        <Fab color="primary" className="addIcon">
          <AddIcon />
        </Fab>
      </Fragment>
    );
  }
}

export default App;
