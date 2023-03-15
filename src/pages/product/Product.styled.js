import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Backdrop = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  background: grey;
`;

export const Modal = styled.div`
  width: 600px;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  margin: 0 auto;
  background: white;
`;
export const ModalContentWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const ProductImg = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
`;
