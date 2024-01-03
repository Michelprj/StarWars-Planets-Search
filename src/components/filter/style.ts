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
  img {
    height: auto;
    width: 500px;
  }

  @media (max-width: 480px) {
    img {
      height: auto;
      width: 300px;
    }
  }
`;


export const LineWhite = styled.div`
  border: 1px solid white;
  position: absolute;
  border-radius: 5px;
  top: 435px;
  padding: 45% 46vw;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 50% 46vw;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 62% 46vw;
  }

  @media (max-width: 480px) {
    top: 260px;
    padding: 75% 46vw;
  }
`;

export const FilterInputs = styled.div`
  padding: 0 12em 0;
  position: absolute;
  top: 30em;
  display: flex;  
  flex-direction: column;
  align-items: center;

  #searchName {
    position: relative;
    margin-bottom: 3em;
    width: 90vw;
    input {
      width: 50vw;
      background: transparent;
      border: 1px solid white;
      border-radius: 5px;
      padding: 0.7em 2em;
      color: white;
    }
    img {
      position: absolute;
      right: 21vw;
      bottom: 7px;
    }
  }
  
  .filters {
    display: flex;
    flex-direction: row;
    align-items: center;

    .container-filter {
      display: flex;
      align-items: center;

      .searchNumber {
        background: transparent;
        border: 1px solid white;
        border-radius: 5px;
        padding: 0.7em 1em;
        color: white;
        width: 10vw;
        &:focus {
          border-color: #FCC419;
        }
      }
    }

    .container-order {
      display: flex;
      align-items: center;

      .container-selects {
        display: flex;
        flex-direction: column;
      }
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .container-filter .searchNumber {
      padding: 0.5em;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .filters {
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      .container-filter .searchNumber {
        padding: 0.4em;
      }
    }
  }

  @media (max-width: 480px) {
    top: 18em;

    #searchName {
      margin-bottom: 2em;
      input {
        width: 80vw;
        padding: 0.5em 2em;
      }
      img {
        position: absolute;
        right: 7vw;
        bottom: 4px;
      }
    }

    .filters {
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;
      justify-content: center;
      width: 100vw;

      .container-filter .searchNumber {
        padding: 0.2em;
        width: 13vw;
      }
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
  margin-right: 2vw;
  cursor: pointer;
  font-weight: 700;
  width: 10vw;
  font-size: 15px;
  &:focus {
    border: none;
    border-bottom: 1px solid #FCC419;
  }
  option {
    background-color: #25262B;
    width: 10vw;
    font-size: 15px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-weight: 600;
    font-size: 12px;
    option {
      font-size: 12px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-weight: 600;
    font-size: 11px;
    width: 15vw;
    option {
      font-size: 11px;
    }
  }

  @media (max-width: 480px) {
    font-weight: 500;
    font-size: 10px;
    width: 20vw;
    option {
      font-size: 11px;
    }
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
  padding: 2.2vw 1.5vw;
  border-radius: 5px;
  margin: 0 2vw;
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

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 18px;
    height: 18px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
  }
`;

export const LabelRadios = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.4em;
  font-weight: 700;
  cursor: pointer;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 14px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;