import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { Redirect } from "expo-router";
import { useEffect, useState, FC } from "react";
import { observer } from "mobx-react-lite"
import LoginButton from "@/components/LoginButton";
import Logo from "@/components/Logo";
import { AuthenticationStore } from "./store/AuthenticationStore";
import { useAuth0 } from "react-native-auth0";


export const LoginScreen: FC = observer(function LoginScreen(_props){
  const { authorize, user, getCredentials} = useAuth0();

  const [ idtoken, SetidToken ] = useState("")
  const [ accessToken, SetaccessToken ] = useState("")
  const [ refreshToken, SetrefreshToken ] = useState("")

  const onLogin = async () => {
    await authorize();
    const Credentials = await getCredentials();
    if(Credentials != null && Credentials.refreshToken != null){
      SetidToken(Credentials.idToken);
      SetaccessToken(Credentials.accessToken);
      SetrefreshToken(Credentials.refreshToken);
      AuthenticationStore.setToken(idtoken, accessToken, refreshToken)
    }
    console.log(Credentials?.accessToken);
  };

  const loggedIn = user !== undefined && user !== null;

  if (loggedIn) {
    return <Redirect href="/(screens)" />;
  } else {
    return (
      <>
        <Logo />

        <LoginButton onPress={onLogin} />
      </>
    );
  }
});

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
