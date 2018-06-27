import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>{this.props.homeText} </div>
        )
    }
}

function mapStateToProps(state){
    return{
        homeText: state.home
    }
}
// export default Home;
export default connect(mapStateToProps)(Home);