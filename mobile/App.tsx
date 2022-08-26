import { Camera, PermissionStatus } from 'expo-camera'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

export default function App() {
	const [canShow, setCanShow] = useState(false)

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync()
      console.log(status)
      setCanShow(status === PermissionStatus.GRANTED)
    })()
  }, [])

	return (
		<View style={styles.container}>
			<View style={styles.flex1}>
				{canShow && (
					<WebView
						javaScriptEnabled={true}
						originWhitelist={['*']}
						bounces={true}
						scalesPageToFit={true}
						onMessage={(message) => console.log('teste', message)}
						injectedJavaScriptBeforeContentLoaded='window.ReactNativeWebView.postMessage(document.body.scrollHeight)'
						source={{
							uri: 'https://jhonpedro.github.io/teste-qr-code-rn/webview/qrcode',
						}}
						allowsInlineMediaPlayback={true}
						mediaPlaybackRequiresUserAction={false}
						style={{ width: '100%', height: '100%' }}
					/>
				)}
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
		height: '100%',
		width: '100%',
		backgroundColor: 'red',
	},
})
