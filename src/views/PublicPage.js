import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { fontSizes, fontWeight } from 'css.js'
import { Typography } from 'antd';

const { Title } = Typography;

function PublicPage() {
    const classes = useStlyes()
    return (
        <div className={classes.container}>
            <Title level={2}>Let's build 🥂</Title>
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
