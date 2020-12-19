import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue, green } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Rating from '@material-ui/lab/Rating'

const useStyles = makeStyles((theme) => ({
    largeIcon: {
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 20,
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: blue[200],
    },
    centered: {
        alignContent: 'center'
    },
    rating: {
        fontSize: 9
    }
}));

export default function Post(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <div >
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {props.initial}
          </Avatar>
          <Typography variant="body2" color="textSecondary" component="p">{props.name}</Typography>
                        <Rating
                            className={classes.rating}name="read-only" value={props.rating} readOnly
                        />
                        
                    </div>


                }
                action={
                    <div>
                    <IconButton aria-label="buy swipe" style={{padding:0}}>
                        <MonetizationOnIcon
                            style={{ color: green[500] }} className={classes.largeIcon} />
                            
                    </IconButton>
                    <Typography style={{ color: green[500] }} variant="body2" color="textSecondary" component="p">purchase</Typography>
                    </div>
                }
                classes={{
                    title: classes.title, // class name, e.g. `classes-nesting-root-x`
                }}
                title={props.title + ' | ' + props.time + ' | ' + props.price + "$"}
                subheader={"Posted " + props.posted + " minutes ago"}
            />
            {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}


        </Card>
    );
}
