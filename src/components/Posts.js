    import * as React from 'react';
    // import { styled } from '@mui/material/styles';
    import Card from '@mui/material/Card';
    import CardHeader from '@mui/material/CardHeader';
    import CardMedia from '@mui/material/CardMedia';
    import CardActions from '@mui/material/CardActions';
    import Avatar from '@mui/material/Avatar';
    import IconButton from '@mui/material/IconButton';
    import { red } from '@mui/material/colors';
    import FavoriteIcon from '@mui/icons-material/Favorite';
    import ShareIcon from '@mui/icons-material/Share';
    import MoreVertIcon from '@mui/icons-material/MoreVert';
    import CommentIcon from '@mui/icons-material/Comment';
    
    // const ExpandMore = styled((props) => {
    // const { expand, ...other } = props;
    // return <IconButton {...other} />;
    // })(({ theme, expand }) => ({
    // transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    // marginLeft: 'auto',
    // transition: theme.transitions.create('transform', {
    //     duration: theme.transitions.duration.shortest,
    // }),
    // }));

    export default function RecipeReviewCard() {
    // const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    return (
        <Card sx={{ maxWidth: 345,alignItems: 'center',marginLeft:'40%'}}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title="Rafi Shaik"
            subheader="September 14, 2016"
        />
        <CardMedia
            component="img"
            height="194"
            image="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlyeWFuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
            alt="Paella dish"
        />
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="comments">
            <CommentIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
            <IconButton aria-label="share">
            <p>Save Post</p>
            </IconButton>
            {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Save Post"
            >
            <ExpandMoreIcon />
            </ExpandMore> */}
        </CardActions>
        </Card>
    );
    }
