import { SpinnerIcon, Wrapper } from "./styled";

export const Loading = () => {

  return (
    <Wrapper>
      Please wait, projects are being loaded...
      <SpinnerIcon />
    </Wrapper>
  );
};