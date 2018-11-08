import React, { Component } from "react";
import { StackActions, NavigationActions } from "react-navigation";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    username: ""
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem("@twitter:username");

    if (username) return this.navigateToTimeline();
  }

  handleLogin = async () => {
    const { username } = this.state;

    if (!username.length) return;
    await AsyncStorage.setItem("@twitter:username", username);

    // this.props.navigation.navigate("Timeline");
    this.navigateToTimeline();
  };

  navigateToTimeline = () => {
    //Reset history of navigation for user can't navigate back to login
    const resetActions = StackActions.reset({
      index: 0, //First position of array
      actions: [NavigationActions.navigate({ routeName: "Timeline" })] //Set history navigation
    });

    this.props.navigation.dispatch(resetActions);
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
        <View style={styles.content}>
          <View>
            <Icon name="twitter" size={64} color="#4BB0EE" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Nome de Usuário"
            value={this.state.username}
            onChangeText={value => this.setState({ username: value })}
            returnKeyType="send"
            onSubmitEditing={this.handleLogin}
          />
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 30
  },

  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    backgroundColor: "#4BB0EE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default Login;
