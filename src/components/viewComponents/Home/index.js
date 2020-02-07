import React from "react";
import theme from "../../../styles/theme"
import * as contentActions from "../../../redux/actions/contentActions";
import {Text, View, TouchableOpacity, StatusBar} from 'react-native';
import styles from "./styles";
import { connect } from "react-redux";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           content:"Hello",
        }
    }
    componentDidMount(){
        this.props.getDummyData();
    }

    static getDerivedStateFromProps(nextProp, prevState) {
        return {
            content : nextProp.content !== prevState.content ? nextProp.content : prevState.content,
        }
    }
    render(){

        return (

           <View style={{flex:1}}>
                <View style={styles.container}>
                    <Text>hello</Text>

                </View>
           </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        content:state.contentReducer.allContent,
    };
};


const mapDispatchToProps = (dispatch) => {

    return {
        getDummyData:()=>{
            console.log("DP called");
            contentActions.getAllContent(dispatch);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

