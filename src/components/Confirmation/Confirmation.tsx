import Wrapper from "../../layout/Wrapper/Wrapper";

const Confirmation = () => {
  return (
    <Wrapper>
      <img
        src="../../assets/images/icon-thank-you.svg"
        style={{ height: "6em" }}
      />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have
        <br />
        fun using our platform. If you ever need support, please feel
        <br />
        free to email us at support@loremgaming.com.
      </p>
    </Wrapper>
  );
};

export default Confirmation;
