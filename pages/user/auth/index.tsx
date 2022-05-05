import { Center, Divider, Paper, Title } from "@mantine/core";
import type { NextPage } from "next";
import CustomSignInForm from "./components/CustomSignInForm";
import SignInWithGoogleButton from "./components/SignInWithGoogleButton";

interface Props {}

const UserAuthPage: NextPage<Props> = () => {
  return (
    <Center
      style={{
        height: "calc(100vh - 80px)",
        minHeight: "700px",
        transform: "translateY(-50px)",
      }}
    >
      <Paper
        shadow="sm"
        p={20}
        style={{ width: "25%", minWidth: "320px", maxWidth: "450px" }}
      >
        <Title align="center" style={{ marginBottom: "2rem" }}>
          {" "}
          Welcome
        </Title>
        <CustomSignInForm />
        <Divider my="xl" label="or" labelPosition="center" />
        <SignInWithGoogleButton />
      </Paper>
    </Center>
  );
};

export default UserAuthPage;

// function SignInButton() {
//   const signInWithGoogle = async () => {
//     try {
//       const res = await signInWithPopup(cAuth, googleAuthProvider);

//       createUserRecord(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Button color="brandAccent" variant="outline" onClick={signInWithGoogle}>
//       Sign In
//     </Button>
//   );
// }

// function SignOutButton() {
//   const signOut = () => {
//     cAuth.signOut();
//   };

//   return <Button onClick={signOut}>Sign Out</Button>;
// }
