import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";

// const StyledModal = Modal.styled`
//   width: 20rem;
//   height: 20rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
//   opacity: ${(props) => props.opacity};
//   transition : all 0.3s ease-in-out;`;

// function FancyModalButton() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [opacity, setOpacity] = useState(0);

//   function toggleModal(e) {
//     setOpacity(0);
//     setIsOpen(!isOpen);
//   }

function App() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  const FadingBackground = styled(BaseModalBackground)`
    opacity: ${(props) => props.opacity};
    transition: all 0.3s ease-in-out;
  `;

  return (
    <div className="App">
      <h1 className={classes.Heading}>Track Zone</h1>

      <h2>{clockState}</h2>
    </div>
  );
}

export default App;
