export default function Welcome({navigation}) {
    return (
      <View style={styles.container}>
        {/*<Text>Hi!</Text>*/}
        <StatusBar style="auto" />
        <Header />
        <Separator />
        <SubHeader />
        <Buttons />
        {/*<Cat />*/}
      </View>
    );
  }