import styled from "@emotion/styled";

export const Container = styled.div`

  position: relative;

  width: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    background-color: #000;
    opacity: 0.6;
  }

`

export const Video = styled.video`

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 100%;

  object-fit: cover;
`