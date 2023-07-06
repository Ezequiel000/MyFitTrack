import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import Provider from '../store/Provider'
import { useSegments, router } from 'expo-router'
import { useAppSelector } from './hooks';

export{
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)',
// };

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
    <Provider>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
      {/* <RootLayoutNav/> */}
    </Provider>
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  // This hook will protect the route access based on user authentication.
  function useProtectedRoute(user: boolean
    ) {
    const segments = useSegments();
    

    useEffect(() => {
      const inAuthGroup = segments[0] === "(auth)";

      if (
        // If the user is not signed in and the initial segment is not anything in the auth group.
        !user &&
        !inAuthGroup
      ) {
        // Redirect to the sign-in page.
        router.replace("(auth)");
      } else if (user && inAuthGroup) {
        // Redirect away from the sign-in page.
        router.replace("(tabs)");
      }
    }, [user, segments]);
  }

 
  useProtectedRoute(useAppSelector((state)=>(state.user.isLoggedIn)));

 return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false}} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
      </ThemeProvider>
    </>
  );
}
