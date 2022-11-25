import {
  Button, CheckboxContainer, Container, H1, ImageContainer, Input,
  LoginFormContainer, RegisterContainer
} from "./Components";

function App() {
  return (
    <Container>
      <ImageContainer src={"/images/image.svg"} alt={"image_"} />
      <LoginFormContainer>
        <H1>Login</H1>
        <Input label={"Login ID"} type={"text"} name={"loginid"} placeholder={"Enter Login ID"} />
        <Input label={"Password"} type={"password"} name={"password"} placeholder={"Enter Password"} />
        <CheckboxContainer
          name={"check1"}
          text={"Remember Me"}
          sideHref={"/"}
          sideHrefText={"Change Password"}
        />
        <CheckboxContainer
          name={"check2"}
          text={"Agree To "}
          innerHref={"/"}
          innerHrefText={"Terms & Conditions"}
        />
        <Button type="submit" text={"Login"} />
        <RegisterContainer
          text={"Don’t have an account? "}
          href={"/"}
          hrefText={"Register Here"}
        />
      </LoginFormContainer>
    </Container>
  );
}

export default App;
