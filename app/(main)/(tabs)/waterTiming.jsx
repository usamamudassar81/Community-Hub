import React from "react";
import { View, ScrollView, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from "react-native-safe-area-context";
import HeaderTopAppBar from "../../components/header";
import waterScheduleData from "../../../assets/data/waterSchedule.json";

const WaterTimingScreen = (props) => {
	const todayIndex = new Date().getDay();
	const sortedSchedule = [...waterScheduleData].sort((a, b) => (a.id === 0 ? 7 : a.id) - (b.id === 0 ? 7 : b.id));

	return (

		<SafeAreaProvider style={styles.container}>
			<HeaderTopAppBar
				logo={require("../../../assets/images/Hublogo.png")}
				profileImage={require("../../../assets/images/profile.png")}
				onProfilePress={() => console.log("Profile pressed")}
			/>
			<ScrollView style={styles.scrollView}>
				<ImageBackground
					source={require("../../../assets/images/waterPlant.png")}
					resizeMode="cover"
					style={styles.imageContainer}
				>
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 0, y: 1 }}
						colors={["#2C343699", "#2C343600"]}
						style={styles.view}>
						<Text style={styles.text}>
							{"Main Filtration\nPlant"}
						</Text>
					</LinearGradient>
				</ImageBackground>
				<View style={styles.column}>
					<View style={styles.row}>
						<Image
							source={require("../../../assets/images/communityIcon.png")}
							resizeMode={"stretch"}
							style={styles.image}
						/>
						<View style={styles.column2}>
							<Text style={styles.text2}>
								{"Open today 8:00 AM – 11:00 AM & 4:00 PM - 8:00 PM"}
							</Text>
							<Text style={styles.text3}>
								{"Standard community distribution\nhours"}
							</Text>
						</View>
					</View>
					<View style={styles.row2}>
						<View style={styles.box}>
						</View>
						<View style={styles.view2}>
							<Text style={styles.text4}>
								{"Currently Active"}
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.row3}>
					<Image
						source={require("../../../assets/images/weeklySchedule.png")}
						resizeMode={"stretch"}
						style={styles.image2}
					/>
					<Text style={styles.text5}>
						{"Weekly Schedule"}
					</Text>
				</View>
				<View style={styles.column3}>
					{sortedSchedule.map((item) => {
						const isToday = item.id === todayIndex;
						const isSunday = item.id === 0;

						if (isToday) {
							return (
								<View key={item.id} style={styles.row5}>
									<View style={styles.row6}>
										<View style={styles.view5}>
											<Text style={styles.text8}>
												{item.day}
											</Text>
										</View>
										<View style={styles.view6}>
											<Text style={styles.text9}>
												{"Today"}
											</Text>
										</View>
									</View>
									<View style={styles.view7}>
										<Text style={styles.text10}>
											{item.time}
										</Text>
									</View>
								</View>
							);
						}

						if (isSunday) {
							return (
								<View key={item.id} style={styles.row8}>
									<View style={styles.view14}>
										<Text style={styles.text11}>
											{item.day}
										</Text>
									</View>
									<View style={styles.view13}>
										<Text style={styles.text7}>
											{item.time}
										</Text>
									</View>
								</View>
							);
						}

						return (
							<View key={item.id} style={styles.row4}>
								<View style={styles.view3}>
									<Text style={styles.text6}>
										{item.day}
									</Text>
								</View>
								<View style={styles.view4}>
									<Text style={styles.text7}>
										{item.time}
									</Text>
								</View>
							</View>
						);
					})}
				</View>
				<View style={styles.row9}>
					<View style={styles.box2}>
					</View>
					<Image
						source={require("../../../assets/images/lastUpdate.png")}
						resizeMode={"stretch"}
						style={styles.image3}
					/>
					<Text style={styles.text12}>
						{"Last updated: 2 hours ago"}
					</Text>
				</View>
				<View style={styles.column4}>
					<View style={styles.column5}>
						<View style={styles.row10}>
							<View style={styles.column6}>
								<View style={styles.row11} onPress={() => alert("Coming Soon")}>
									<Image
										source={require("../../../assets/images/maintenance.png")}
										resizeMode={"stretch"}
										style={styles.image4}
										onPress={() => alert("Coming Soon")}
									/>
									<Text style={styles.text13}
										onPress={() => alert("Coming Soon")}
									>
										{"Maintenance Notice"}
									</Text>
								</View>
								<View style={styles.column7}>
									<Text style={styles.text14}
										onPress={() => alert("Coming Soon")}
									>
										{"The secondary purification unit will undergo annual\ncalibration this coming Sunday. "}
									</Text>
									<View style={styles.row12}>
										{/* <Text style={styles.text15}>
											{"interruptions"}
										</Text>
										<Text style={styles.text3}>
											{" are expected for residential lines."}
										</Text> */}
									</View>
								</View>
							</View>
							<Image

								resizeMode={"stretch"}
								style={styles.image5}
							/>
						</View>
						{/* <Text style={styles.text16}
							onPress={() => alert("Coming Soon")}
						>
							{"Learn More"}
						</Text > */}
					</View>
					<View style={styles.column8}>
						<View style={styles.view15}>
							<Text style={styles.text17}>
								{"Support Contact"}
							</Text>
						</View>
						<View >
							<View style={styles.row13}>
								<Image
									source={require("../../../assets/images/phoneIcon.png")}
									resizeMode={"stretch"}
									style={styles.image6}
								/>
								<View >
									<View style={styles.view16}>
										<Text style={styles.text18}>
											{"Maintenance Team"}
										</Text>
									</View>
									<View style={styles.view17}>
										<Text style={styles.text19}>
											{"+92311-7773997"}
										</Text>
									</View>
								</View>
							</View>
							{/* <View style={styles.row14}>
								<Image
									source={require("../../../assets/images/maintenaceIcon.png")}
									resizeMode={"stretch"}
									style={styles.image7}
								/>
								<View >
									<View style={styles.view18}>
										<Text style={styles.text18}>
											{"Maintenance Team"}
										</Text>
									</View>
									<View style={styles.view19}>
										<Text style={styles.text19}>
											{"Updating Soon"}
										</Text>
									</View>
								</View>
							</View> */}
						</View>
					</View>
					<View style={styles.row15}>
						<Image
							source={require("../../../assets/images/certifiedIcon.png")}
							resizeMode={"stretch"}
							style={styles.image8}
						/>
						<View style={styles.view20}>
							<Text style={styles.text20}>
								{"Certified Safe for Potable Use (ISO 22000)"}
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaProvider>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	imageContainer: {
		width: "100%",
		height: 200,
		borderRadius: 20,
		overflow: "hidden",
		marginBottom: 20,
	},

	box: {
		width: 10,
		height: 10,
		backgroundColor: "#215C45",
		borderRadius: 9999,
		marginRight: 8,
	},
	box2: {
		height: 13,
		flex: 1,
		marginRight: 7,
	},
	column: {
		backgroundColor: "#DDFFF1",
		borderRadius: 20,
		paddingTop: 40,
		paddingHorizontal: 24,
		marginBottom: 40,
		shadowColor: "#30695212",
		shadowOpacity: 0.1,
		shadowOffset: {
			width: 0,
			height: 10
		},
		shadowRadius: 30,
		elevation: 30,
	},
	column2: {
		flex: 1,
		paddingRight: 11,
	},
	column3: {
		backgroundColor: "#F0F4F6",
		borderRadius: 20,
		paddingVertical: 4,
		paddingHorizontal: 8,
		marginBottom: 23,
	},
	column4: {
		marginBottom: 5,
	},
	column5: {
		backgroundColor: "#F472B64D",
		borderRadius: 20,
		paddingBottom: 21,
		marginBottom: 24,
	},
	column6: {
		flex: 1,
		marginTop: 29,
		marginRight: 24,
	},
	column7: {
		paddingVertical: 7,
	},
	column8: {
		backgroundColor: "#E3E9EB",
		borderRadius: 20,
		padding: 24,
		marginBottom: 24,
	},
	image: {
		width: 40,
		height: 44,
		marginRight: 16,
	},
	image2: {
		width: 18,
		height: 20,
		marginRight: 8,
	},
	image3: {
		width: 12,
		height: 12,
		marginRight: 7,
	},
	image4: {
		width: 16,
		height: 16,
		marginRight: 9,
	},
	image5: {
		borderRadius: 20,
		width: 1,
		height: 72,
	},
	image6: {
		width: 18,
		height: 22,
		marginRight: 12,
	},
	image7: {
		width: 20,
		height: 20,
		marginRight: 12,
	},
	image8: {
		borderRadius: 10,
		width: 48,
		height: 48,
		marginRight: 16,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 5,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 24,
		display: "none",
		// paddingBottom: 10,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 6,
		marginBottom: 23,
	},
	row4: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		paddingVertical: 20,
		marginBottom: 9,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#7C3AED",
		borderRadius: 10,
		padding: 20,
		marginBottom: 9,
	},
	row6: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 19,
	},
	row7: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		paddingVertical: 20,
		paddingHorizontal: 9,
		marginBottom: 9,
	},
	row8: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#F0F4F680",
		borderRadius: 10,
		paddingVertical: 21,
		paddingHorizontal: 20,
	},
	row9: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 4,
		marginBottom: 14,
	},
	row10: {
		flexDirection: "row",
		marginBottom: 15,
		marginLeft: 24,
	},
	row11: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 3,
		marginBottom: 12,
	},
	row12: {
		alignSelf: "flex-start",
		flexDirection: "row",
		alignItems: "center",
		marginRight: 27,
	},
	row13: {
		flexDirection: "row",
		marginBottom: 8,
	},
	row14: {
		flexDirection: "row",
	},
	row15: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#7C3AED33",
		borderRadius: 10,
		padding: 16,
		marginBottom: 50,
	},
	scrollView: {
		flex: 1,
		paddingTop: 32,
		paddingHorizontal: 24,
	},
	text: {
		color: "#FFFFFF",
		fontSize: 28,
		height: 70,
		fontWeight: "bold",
		marginBottom: 27,
		width: 204,
	},
	text2: {
		color: "#215C45",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 17,
	},
	text3: {
		color: "#3F3F46",
		fontSize: 10,
		paddingBottom: 10,
	},
	text4: {
		color: "#215C45",
		fontSize: 12,
	},
	text5: {
		color: "#2C3436",
		fontSize: 24,
		fontWeight: "bold",
	},
	text6: {
		color: "#2C3436",
		fontSize: 12,
	},
	text7: {
		color: "#596063",
		fontSize: 10,
		fontWeight: "bold",
	},
	text8: {
		color: "#FFFFFF",
		fontSize: 12,
	},
	text9: {
		color: "#FFFFFF",
		fontSize: 10,
		fontWeight: "bold",
	},
	text10: {
		color: "#FFFFFF",
		fontSize: 10,
		fontWeight: "bold",
		width: 117,
	},
	text11: {
		color: "#596063",
		fontSize: 12,
	},
	text12: {
		color: "#596063",
		fontSize: 10,
		flex: 1,
	},
	text13: {
		color: "#A72368",
		fontSize: 16,
		fontWeight: "bold",
	},
	text14: {
		color: "#3F3F46",
		fontSize: 14,
		marginBottom: 11,
	},
	text15: {
		color: "#3F3F46",
		fontSize: 14,
		fontWeight: "bold",
		marginRight: 5,
	},
	text16: {
		color: "#A72368",
		fontSize: 12,
		fontWeight: "bold",
		marginLeft: 24,
	},
	text17: {
		color: "#2C3436",
		fontSize: 16,
		fontWeight: "bold",
	},
	text18: {
		color: "#596063",
		fontSize: 12,
	},
	text19: {
		color: "#2C3436",
		fontSize: 14,
	},
	text20: {
		color: "#7C3AED",
		fontSize: 12,
		fontWeight: "bold",
	},
	view: {
		paddingTop: 103,
		paddingLeft: 33,
		marginBottom: 32,

	},
	view2: {
		paddingVertical: 1,
		paddingRight: 38,
	},
	view3: {
		paddingVertical: 4,
		paddingHorizontal: 1,
		marginLeft: 14,
	},
	view4: {
		paddingVertical: 6,
		paddingRight: 12,
	},
	view5: {
		paddingVertical: 3,
		marginRight: 13,
	},
	view6: {
		backgroundColor: "#FFFFFF33",
		borderRadius: 9999,
		paddingVertical: 5,
		paddingHorizontal: 8,
	},
	view7: {
		flex: 1,
		paddingLeft: 1,
	},
	view8: {
		paddingVertical: 4,
		marginLeft: 13,
	},
	view9: {
		paddingVertical: 6,
		paddingRight: 11,
	},
	view10: {
		paddingTop: 3,
		marginLeft: 11,
	},
	view11: {
		paddingVertical: 6,
	},
	view12: {
		paddingVertical: 3,
		paddingLeft: 1,
		paddingRight: 20,
		marginLeft: 14,
	},
	view13: {
		paddingVertical: 4,
		paddingHorizontal: 1,
	},
	view14: {
		paddingVertical: 4,
	},
	view15: {
		paddingBottom: 1,
		marginBottom: 16,
	},
	view16: {
		alignSelf: "flex-start",
		paddingVertical: 1,
		paddingRight: 84,
	},
	view17: {
		alignSelf: "flex-start",
		paddingVertical: 4,
		paddingLeft: 1,
		paddingRight: 40,
	},
	view18: {
		alignSelf: "flex-start",
		paddingVertical: 3,
		paddingRight: 73,
	},
	view19: {
		alignSelf: "flex-start",
		paddingVertical: 4,
		paddingRight: 26,
	},
	view20: {
		flex: 1,
		paddingVertical: 1,
	},
});

export default WaterTimingScreen;