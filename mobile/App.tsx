import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.flex1}>
				<WebView
					javaScriptEnabled={true}
					scalesPageToFit={true}
					onMessage={(message) => console.log('teste', message)}
					injectedJavaScriptBeforeContentLoaded='window.ReactNativeWebView.postMessage(document.body.scrollHeight)'
					source={{
						uri: 'http://192.168.1.163:3000/qrcode',
					}}
          scrollEnabled={false}
          style={{width: 980}}
				/>
			</View>
			<Text>teste</Text>
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#acacac',
		alignItems: 'center',
		justifyContent: 'center',
	},
	flex1: {
		marginTop: 100,
		height: 256,
		width: 256,
		backgroundColor: 'red',
	},
})
