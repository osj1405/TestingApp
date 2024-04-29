import { Slot } from 'expo-router';
import { Auth0Provider } from 'react-native-auth0';

export default function Layout() {

  return (
    <Auth0Provider domain='dev-ffzm8767eykwhzpl.us.auth0.com' clientId='bbBcRIMODwcrQCbGS3Zx5nhIG6VASR8f'>
        <Slot />
    </Auth0Provider>
  
);
}
