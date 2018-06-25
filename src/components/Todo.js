import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import TodoView from './TodoView';

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            text: '',
            passtext: ''
         };
         this.onPressLearnMore = this.onPressLearnMore.bind(this);
    }

    onPressLearnMore() {
        console.log("onPressLearnMore");
        console.log(this.state);   
        
        this.setState({
            passtext: this.state.text,
            text : ""
        });

    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Learn"
                    style={{width: 200}}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <Button onPress={this.onPressLearnMore} title="Add Todo" color="#841584" />

                 <TodoView itemTodo={this.state.passtext}></TodoView>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
})