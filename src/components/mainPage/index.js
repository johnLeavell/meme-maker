import { render } from "@testing-library/react";
import React from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  NavbarBrand,
} from "reactstrap";

const photos = [
  { src: "images/batman-robin.png" },
  { src: "images/dog.png" },
  { src: "images/dont-konw.png" },
  { src: "images/drake.png" },
  { src: "images/fake-smile.png" },
  { src: "images/flex-tape.png" },
  { src: "images/futurama.png" },
  { src: "images/haha-what.png" },
  { src: "images/kanye.png" },
  { src: "images/kheart.png" },
  { src: "images/knife-cat.png" },
  { src: "images/office.png" },
  { src: "images/rdj.png" },
  { src: "images/sweating.png" },
  { src: "images/what.png" },
  { src: "images/willy-wonka.png" },
  { src: "images/you-konw.png" },
];

const initialState = {
  toptext: "",
  bottomtext: "",
  isTopDragging: false,
  isBottomDragging: false,
  topY: "10%",
  topX: "50%",
  bottomX: "50%",
  bottomY: "90%",
};

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      modalIsOpen: false,
      currentImagebase64: null,
      ...initialState,
    };
  }

  render() {
    return;
  }
}

export default MainPage;
