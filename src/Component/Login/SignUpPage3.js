import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../Css/LoginCss'
import { OutlinedTextField } from 'react-native-material-textfield'
import { Button } from 'react-native-elements';

export default class SignUpPage2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            confirm: '',
            visibleIcon: false,
            errors: {}
        };
    }

    validateForm = () => {
        let errors = {};
        let formIsValid = true;

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

        if (typeof this.state.confirm !== "undefined") {
            if (this.state.confirm !== this.state.password) {
                formIsValid = false;
                errors["confirm"] = "*Password does not match.";
            }
        }

        if (!this.state.confirm) {
            errors["confirm"] = "*Enter password";
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
                    Create a strong password
                </Text>

                <Text
                    style={{
                        flex: 0,
                        textAlign: 'center',
                        fontSize: 16,
                        marginLeft: 35,
                        marginRight: 35,
                        top: 60
                    }}>
                    Create a strong password with a mix of letters, numbers and symbols
                </Text>



                <View style={styles.inputContainer}>

                    <View style={styles.passIconView}>
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
                            <TouchableOpacity onPress={ () => this.setState({visibleIcon:!this.state.visibleIcon})}>
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

                    <View style={styles.passView2}>
                        <OutlinedTextField
                            label="Confirm"
                            value={this.state.confirm}
                            onChangeText={(confirm) => this.setState({ confirm })}
                            secureTextEntry={!this.state.visibleIcon}
                            error={this.state.errors.confirm}
                            errorColor='red'
                        />
                    </View>



                </View>

                <View style={styles.nextInSignUp}>
                    <Button
                        title="Next"
                        onPress={this.submitUserSignUp}
                    />
                </View>

            </View>
        );
    }
}