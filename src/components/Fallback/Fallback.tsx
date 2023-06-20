import { Headline, Wrapper } from "../../layout";

const Fallback = () => {
  return (
    <Wrapper>
      <Headline
        title="Something went wrong!"
        description="Brace yourself till we get the error fixed!"
      />
    </Wrapper>
  );
};

export default Fallback;
