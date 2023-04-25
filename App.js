import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.flexrow, { justifyContent: 'center' }]}>
      <View style={styles.flexcolumn}>
        <View style={[styles.flexitem, { backgroundColor: '#8876e0', flex: 1 }]}></View>
        <View style={[styles.flexitem, { backgroundColor: '#00bcfa', flex: 1 }]}></View>
        <View style={[styles.flexitem, { backgroundColor: '#007ef8', flex: 2 }]}></View>
      </View>
      <View style={[styles.flexcolumn]}>
        <View style={[styles.flexitem, { backgroundColor: '#79ccfb', flex: 1 }]}></View>
        <View style={[styles.flexitem, { backgroundColor: '#00bcfa', flex: 2 }]}>
          <Text style={[styles.flextext]}>FLEXBOX</Text>
        </View>
        <View style={[styles.flexitem, { backgroundColor: '#573fc0', flex: 1 }]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexrow: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#463e3f',
    borderWidth: 8,

  },
  flexcolumn: {
    flex: 1,
    flexDirection: 'column',
  },
  flexitem: {
    borderColor: '#463e3f',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flextext: {
    fontSize: 32,
    letterSpacing: 5,
    fontWeight: 700,
    transform: [{ rotate: '270deg'}],
  },
  //#8200c5
  //#459dff
  //#aa00e5
  //#8200c5
  //#459dff
  //#98b6ff
});
