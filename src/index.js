import React, { Fragment } from "react";
import { render } from "react-dom";
import { Player } from "video-react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import "./styles.scss";
import "./scss/video-react.scss";
import Image1 from "./Fish.svg";

var divStyle = {
  position: "relative",
  padding: "100px",
  margin: "-10px"
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Image1 className="Fish-story-logo" />
        <h1 className="App-title">フィッシュストーリー</h1>
        <p className="romaji">Fisshū Sutōrī</p>
      </header>
      <Jumbotron tag="section" className="jumbotron-header text-center mb-3">
        <Container>
          <Row>
            <Col sm={{ size: 80, offset: 2 }}>
              <div style={divStyle}>
                <Player
                  playsInline
                  src="http://ns379011.ip-5-196-69.eu/loveandpeace/LoveandPeace.mkv"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

render(<App />, document.getElementById("app"));
