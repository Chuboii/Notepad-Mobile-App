import { DataProvider } from './context/DataContext';
import RenderScreens from './utils/render screens/RenderScreens';
import Tabs from './utils/tabs/Tabs';
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <>
      <DataProvider>
        <RenderScreens />
        </DataProvider>
      </>
  );
}
