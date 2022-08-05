import styled from "styled-components";

export default function Text({
  children,
  color,
  size,
  position,
  pointer = false,
  fontStyle = "",
  decoration = "",
}) {
  return (
    <Wrapper
      color={color}
      size={size}
      position={position}
      decoration={decoration}
      fontStyle={fontStyle}
      pointer={pointer}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.span`
  font-size: 22px;
  margin: 5px 0px;

  ${(props) => {
    let config = "";
    if (props.size === "small") {
      config += `
        font-size: 14px;
      `;
    }

    if (props.size === "medium") {
      config += `
        font-size: 18px;
      `;
    }

    if (props.size === "large") {
      config += `
        font-size: 20px;
      `;
    }

    if (props.color === "blue") {
      config += `
        color: #52B6FF;
      `;
    }

    if (props.color === "gray") {
      config += `
        color: #666;
      `;
    }

    if (props.color === "white") {
      config += `
        color: #fff;
      `;
    }

    if (props.pointer === true) {
      config += `
        cursor: pointer;
      `;
    }

    if (props.position === "center") {
      config += `
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        `;
    }

    if (props.fontStyle !== "") {
      config += `
        font-style:${props.fontStyle};
        `;
    }

    if (props.decoration !== "") {
      config += `
        text-decoration:${props.decoration};
        `;
    }
    return config;
  }}
`;
