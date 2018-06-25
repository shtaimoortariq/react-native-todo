import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';

export default class TodoView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // text: this.props.itemTodo,
            allTodo: [],
            id: 0

        };
        this.addTodo = this.addTodo.bind(this);

        console.log(this.props);
    }


    componentWillReceiveProps(changeData) {
        console.log(changeData, "componentWillReceiveProps(changeData)");
        if (changeData.itemTodo != this.props.itemTodo) {
            this.addTodo(changeData.itemTodo);

        }
    }

    addTodo(itemTodo) {

        let arr = this.state.allTodo;
        let id = this.state.id;
        id++;
        arr.push({ id: this.state.id, itemTodo });
        this.setState({
            id: id,
            allTodo: arr
        }, () => {
            console.log(this.state);
        })

    }


    render() {
        return (
            <View>
                {

                    this.state.allTodo.map((data, i) => {
                        return (
                            <View key={data.id} style={{ flexDirection: 'row', margin: 10 }}>
                                <Text>{data.itemTodo}</Text>
                                <Button title="Edit" />
                                <Button title="Delete" />
                            </View>

                        )

                    })
                }
            </View>

        );
    }
}


const styles = StyleSheet.create({
    dFlex: {
        display: 'flex'
    }
})