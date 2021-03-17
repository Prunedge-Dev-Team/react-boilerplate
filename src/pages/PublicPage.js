import React from 'react'
import Auth from "../utils/Auth";
import { useHistory } from "react-router-dom";
import { PrivatePaths } from "../routes";
import { makeStyles } from '@material-ui/styles'
import { fontSizes, fontWeight } from 'css.js'


function PublicPage() {
    const classes = useStlyes();
    let history = useHistory();

    const handleLogIn=()=>{
      Auth.setToken("exampleToken");
      history.push(PrivatePaths.PRIVATE);
    }

    return (
        <div className={classes.container}>
            <p>Let's build 🥂</p>
            <div><button onClick={handleLogIn}> LOG IN</button></div>
        </div>
    )
}

const useStlyes = makeStyles({
 container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    '& p': {
        width: "100%",
        fontSize: fontSizes.xlarge,
        fontWeight: fontWeight.bold
    }
 }
})

export default PublicPage
