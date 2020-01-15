import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../Css/LoginCss'
import { OutlinedTextField } from 'react-native-material-textfield'
import { Button } from 'react-native-elements';

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            visibleIcon: false,
            errors: {}
        };
    }

    validateForm = () => {
        let errors = {};
        let formIsValid = true;

        if (typeof this.state.email !== "undefined") {
            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.email)) {
                formIsValid = false;
                errors["email"] = "*Enter valid email-ID.";
            }
        }

        if (!this.state.email) {
            errors["email"] = "*Enter email id";
            formIsValid = false;
        }

        if (typeof this.state.password !== "undefined") {
            if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Enter secure and strong password.";
            }
        }

        if (!this.state.password) {
            errors["password"] = "*Enter password";
            formIsValid = false;
        }

        this.setState({
            errors: errors
        })

        return formIsValid
    }

    submitUserSignUp = (event) => {
        event.preventDefault();
        if (this.validateForm()) {

        }
    }

    render() {

        return (
            <View style={styles.mainContainer}>

                <Text style={styles.appTitle}>
                    <Text style={{ color: '#4285F4' }}>F</Text>
                    <Text style={{ color: '#DB4437' }}>u</Text>
                    <Text style={{ color: '#F4B400' }}>n</Text>
                    <Text style={{ color: '#4285F4' }}>d</Text>
                    <Text style={{ color: '#0F9D58' }}>o</Text>
                    <Text style={{ color: '#DB4437' }}>o</Text>
                </Text>

                <Text style={styles.createTitle}>
                    Sign in
                </Text>

                <Text
                    style={{
                        flex: 0,
                        textAlign: 'center',
                        fontSize: 16,
                        top: 60
                    }}>
                    with your Fundoo Account
                </Text>



                <View style={styles.inputContainer}>

                    <View style={styles.inputView}>
                        <OutlinedTextField
                            label="Email"
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email })}
                            error={this.state.errors.email}
                            errorColor='red'
                        />
                    </View>

                    <View style={styles.passIconViewInSignIn}>

                        <View style={styles.passView}>
                            <OutlinedTextField
                                label="Password"
                                value={this.state.password}
                                onChangeText={(password) => this.setState({ password })}
                                secureTextEntry={!this.state.visibleIcon}
                                error={this.state.errors.password}
                                errorColor='red'
                            />
                        </View>
                        <View style={{ padding: 12 }}>
                            <TouchableOpacity onPress={() => this.setState({ visibleIcon: !this.state.visibleIcon })}>
                                {
                                    !this.state.visibleIcon ?
                                        <Image
                                            style={styles.passIcon}
                                            source={require('../../Assets/visible.png')}
                                        /> :
                                        <Image
                                            style={styles.passIcon}
                                            source={require('../../Assets/off.png')}
                                        />
                                }

                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View
                    style={{
                        flex: 2,
                        flexDirection: 'row'
                    }}
                >
                    <View style={styles.createButton}>
                        <Button
                            title="Create Account"
                            onPress={()=>this.props.navigation.navigate('SignUpPage1')}
                            type="clear"
                        />
                    </View>

                    <View style={styles.nextInSignIn}>
                        <Button
                            title="Next"
                            onPress={this.submitUserSignUp}
                        />
                    </View>
                </View>

            </View>
        );
    }
}