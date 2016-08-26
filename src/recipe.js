/*
 import React from "react";

 const Recipe = ({name}) => (
 <li>{name}</li>
 );

 export default Recipe;
*/






import React from "react";

class Recipe extends React.Component {

    constructor(props) {
        super();

        console.log('constructor' ,props);
    }

    render() {
        console.log('render',this.props);

        return (
            <li>{this.props.name}</li>
        )
    }

    componentDidMount() {
        console.log('I am mounted ! - Recipe')
    }
}

export default Recipe;