import styled from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  list-style: none;
  line-height:  1.4;
  font-weight: 400;
  font-size: 18px;
`;

export const ListItem = styled.li`
  position: relative;
  padding-left: 25px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%); 
    width: 9px;
    height: 9px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }
`;