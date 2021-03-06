//	PACKAGES
import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

//	STYLES
import useStyles from './components/Styles';

//	COMPONENTS
import Layout from './components/layouts';

//	ACTION
import {login,logout} from './actions/authActions';
import {switchTheme} from './actions/themeModeActions';

const App = (props) => {

	let {loggedIn,userData,currentTheme} = props;

	const classes = useStyles();

	useEffect(() =>{
		//	props.login();
	},[]);

	let userMobile = "";
	if(loggedIn){
		userMobile = userData.user.mobileNumber;
	}

	const switchThemeFunc = () => {
		props.switchTheme();
	}

	return (
		<React.Fragment>
			<Layout>
				<Box className={classes.newBox}>
					<Button onClick={switchThemeFunc} variant="contained">{currentTheme}</Button>
				</Box>
			</Layout>
	  	</React.Fragment>
	)
}

const mapStateToProps = (state) => ({
	loggedIn:state.authReducer.loggedIn,
	userData:state.authReducer.userData,
	currentTheme:state.themeModeReducer.theme
});

export default connect(mapStateToProps,{login,logout,switchTheme})(App);