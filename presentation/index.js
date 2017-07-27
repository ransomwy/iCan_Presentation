// Import React
import React from "react";
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  s,
  TableBody, TableItem, TableRow, Table
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";
import Listing from "../assets/Listing"
import createTheme from "spectacle/lib/themes/default";
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  computer: require("../assets/computer.jpg"),
  javaScript: require("../assets/Javascript.png"),
  rubyrails: require("../assets/rubyrails.png"),
  redux: require("../assets/redux.png"),
  react: require("../assets/react.png"),
  ican_screenshot: require("../assets/ican_screenschot.png"),
  roadmap: require("../assets/roadmap.jpg"),
  game: require("../assets/gameify.svg"),
  friend: require("../assets/friends.svg"),
  review: require("../assets/review.svg"),
};

preloader(images);

const theme = createTheme({
  primary: "#CECECE",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#67D556 "
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="number">

        <Slide transition={["zoom"]} bgColor="white">
          <Heading size={1} fit lineHeight={3} textColor="tertiary">
            Who can help?
          </Heading>
        </Slide>

        <Slide transition={["spin", "zoom"]} bgColor="white">
          <Heading size={1} textColor="tertiary">iCan</Heading>
          <Heading size={4} textColor="quartenary">Full Stack Web Application</Heading>
          <Text size={1} textColor="secondary"> Ransom Valley, Jacob Wheeler </Text>
          <Text size={1} textColor="secondary"> Branden Bird, Zoe Larsen </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="white" textColor="tertiary">
          <Appear fid="1">
          <Heading size={6} textColor="secondary" fit>What is iCan?</Heading>
          </Appear>
          <Appear fid="2">
            <List >
              <ListItem size={2}>Good Samaritan App</ListItem>
              <br />
              <ListItem size={2}>Ask <b>for</b> help in your neighborhood</ListItem>
              <br />
              <ListItem size={2}>Look <b>to</b> help in your community</ListItem>
            </List>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.ican_screenshot}></Slide>

        <Slide transition={["zoom", "fade"]} bgColor="white">
        <CodePane
          center
           lang="jsx"
           source={require("raw-loader!../assets/geolocation.example")}
           margin="20px 20px 20px 20px"
         />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="white">
          <Listing />
        </Slide>

        <Slide transition={["fade"]} bgImage={images.roadmap} bgDarken={0.25}>
        <Appear fid="1">
          <Heading size={1} textColor="secondary" caps fit>
            Roadmap
          </Heading>
        </Appear>
        <Appear fid="2">
          <Text size={1} textColor="secondary" bold>
            The future of our App
          </Text>
        </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Appear fid="1">
          <Heading textSize="80px" lineHeight={2} textColor="tertiary" bold>What is next for iCan?</Heading>
          </Appear>
          <Appear fid="2">
            <Table>
              <TableBody>
                <TableRow>
                  <TableItem><Image width="250px" height="250px" src={images.game}/></TableItem>
                  <TableItem><Image width="250px" height="250px" src={images.review}/></TableItem>
                  <TableItem><Image width="250px" height="250px" src={images.friend}/></TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
        <Heading size={3} textColor="quartenary">
              Technologies Used:
        </Heading>
            <Table>
              <TableBody>
                <TableRow>
                  <TableItem><Image width="250px" height="250px" src={images.javaScript}/></TableItem>
                  <TableItem><Image width="250px" height="250px" src={images.rubyrails}/></TableItem>
                </TableRow>
                <TableRow>
                <TableItem><Image width="250px" height="250px" src={images.react}/></TableItem>
                <TableItem><Image width="250px" height="250px" src={images.redux}/></TableItem>
                </TableRow>
              </TableBody>
            </Table>
        </Slide>
      </Deck>
    );
  }
}
