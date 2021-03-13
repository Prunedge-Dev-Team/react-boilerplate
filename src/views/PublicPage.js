import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { fontSizes, fontWeight } from 'css.js'

function PublicPage() {
    const classes = useStlyes()
    return (
        <div className={classes.container}>
            <p>Let's build 🥂</p>
        </div>
    )
}

const useStlyes = makeStyles({
 container: {
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
    '& p': {
        fontSize: fontSizes.xlarge,
        fontWeight: fontWeight.bold
    }
 }
})

export default PublicPage
