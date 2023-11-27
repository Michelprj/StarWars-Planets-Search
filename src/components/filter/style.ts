import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const ContainerLogo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 26%;
  left: 50%;
  right: 50%;
  #nameStar {
    display: flex;
    height: 5em;
  }
  #nameWars {
    display: flex;
    height: 5em;
    margin-top: 2%;
  }
`;

export const ContainerImgs = styled.div`
  display: flex;
  flex-direction: column;
  #circleOutside {
    bottom: 40em;
    height: 33em;
    position: sticky;
  }
  #circleInside{
    bottom: 50em;
    height: 28em;
    position: sticky;    
  }
  #lineWhite {
    position: absolute;
    top: 71%;
    bottom: 2%;
    left: 50%;
    width: 1px;
    margin-left: -0.9px;
    background-color: white;
  }
`;

export const LineWhite = styled.div`
  border: 1px solid white;
  border-bottom: none;
  position: absolute;
  border-radius: 5px;
  right: 0.9em;
  top: 38.7em;
  width: 60em;
  padding: 20em 41.28em;
`;

export const FilterInputs = styled.div`
  padding: 4em 12em 0;
  position: absolute;
  top: 38.7em;
  display: flex;  
  flex-direction: column;
  #searchName {
    input {
      width: 50em;
      margin-bottom: 3em;
      background: transparent;
      border: 1px solid white;
      border-radius: 5px;
      padding: 0.7em 2em;
      color: white;
    }
    img {
      position: absolute;
      left: 73%;
      top: 33%;
    }
  }
  
  #filters {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  #searchNumber {
    background: transparent;
    border: 1px solid white;
    border-radius: 5px;
    padding: 0.7em 1em;
    color: white;
    width: 7em;
    &:focus {
      border-color: #FCC419;
    }
  }
`;

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  &:focus-within {
    label {
      color: #FCC419;
    }
  }
`;

export const Select = styled.select`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  padding-bottom: 0.5em;
  margin-right: 2em;
  cursor: pointer;
  font-weight: 700;
  &:focus {
    border: none;
    border-bottom: 1px solid #FCC419;
  }
  option {
    background-color: #25262B;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 10px;
  color: #AEAEAE; 
`;

export const Button = styled.button`
  background-color: transparent;
  color: #FAE60A;
  border: 1px solid #FAE60A;
  padding: 2em 1.5em;
  border-radius: 5px;
  margin: 0 2em;
  font-size: 14px;
  font-family: Epilogue;
  font-weight: 700;
  cursor: pointer;
  &:active {
    background-color: #FAE60A;
    animation: ${fadeIn} 0.1s, alternate;
    color: black;
    border: 2px solid white;
  }
`;

export const RadioBtn = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #AEAEAE;
  border-radius: 50%;
  outline: none;
  margin-right: 5px;
  cursor: pointer;
  &:checked {
    border-color: #FAE60A;
    background-image: url('Ellipse 3.svg');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
  }
`;

export const LabelRadios = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.4em;
  font-weight: 700;
  cursor: pointer;
`;