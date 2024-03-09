import "@vkontakte/vkui/dist/vkui.css";

import {
  AppRoot,
  Panel,
  PanelHeader,
  SplitCol,
  SplitLayout,
  usePlatform,
  View,
} from "@vkontakte/vkui";

type AppProps = {
  children: React.ReactNode;
};
const App = (props: AppProps) => {
  const { children } = props;
  const platform = usePlatform();

  return (
    <AppRoot>
      <SplitLayout header={platform !== "vkcom" && <PanelHeader delimiter="none" />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>Randomizer</PanelHeader>
              {children}
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
