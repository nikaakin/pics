import React from "react";
import InputBar from "./InputBar";
import unsplash from "../api/unsplash";
import DisplayImages from "./DisplayImages";

class App extends React.Component {
  state = { images: [] };

  //
  // Without context, just handy tool
  // mrMorale[2]() <--------------- to call the function
  //
  // mrMorale = {
  //   2: () => console.log(2),
  //   3: () => console.log(3),
  //   4: () => console.log(4),
  // };
  //
  // Without context, just handy tool
  // mrMorale[2].something <------------ to call the function
  //
  // mrMorale = {
  //   2: { somehting: 'something'},
  //   3: {anotherSomething: "something2", something2: 23},
  // };

  InputBarSubmit = async (term) => {
    const res = await unsplash.get("search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <InputBar onSubmit={this.InputBarSubmit} />
        Found {this.state.images.length} images
        <DisplayImages images={this.state.images} />
      </div>
    );
  }
}

export default App;
