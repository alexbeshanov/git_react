import React from "react";
import firebase from "firebase";
import {createStore} from "redux";
import {combineReducers} from "redux";
import {connect} from "react-redux";

export var userReducer = function(state, action) {
    if (state === undefined) {
        state = [];
    }
    if (action.type === "ADD_USER") {
        var newState = state.concat([action.user.key]);//!!!!!!!!!!!!!!!!!!!!!!!
        return newState;
    }
    return state;
};
export const reducers = combineReducers({
    userState: userReducer
});
export const store = createStore(reducers);
store.dispatch({
	type: "ADD_USER",
	user: {name: ["DanisMisha","zsdcvfr", "rtyuio"], surnane: "Fillipov"}//!!!!!!!!!!!!!!!!!
});

export class Test extends React.Component{
    constructor(props){
        super(props);
        this.state={
            keyList: [],
            valueList: []
        }
    }

    ImportList = (event) =>{
        var linkFirebase = "users/password/";
        var data = firebase.database().ref(linkFirebase).orderByKey().once("value").then(
            function (snapshot) { var key_array = []; var childData_array = [];
                snapshot.forEach(
                    function (childSnapshot) {
                        key_array.push(childSnapshot.key);
                         childData_array.push(childSnapshot.val().NewPassword);
                        //key_array.push(childSnapshot.key);
                        //console.log(childSnapshot.val());
                        //console.log(typeof childSnapshot);
                        //key_array.passwordId=(childSnapshot.val());
                    });
                console.log("Массив: "+ key_array);
                console.log("Значения: "+ childData_array);
                this.setState({keyList: key_array});
                return key_array;
        });
        console.log(data);
    };

    render(){
        return(
            <div>
            <button onClick={this.ImportList}>Press</button>
                <p>Value {this.state.keyList}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {user: state.userState};
}
export default connect(mapStateToProps)(Test);



/*Test.propTypes = {
	children: ImportList.object.isRequired,
	dispatch: ImportList.func.isRequired
};*/