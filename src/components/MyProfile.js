

    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardHeader from '@mui/material/CardHeader';
    import CardMedia from '@mui/material/CardMedia';
    import CardContent from '@mui/material/CardContent';
    import CardActions from '@mui/material/CardActions';
    import Collapse from '@mui/material/Collapse';
    import Avatar from '@mui/material/Avatar';
    import Typography from '@mui/material/Typography';
    import { red } from '@mui/material/colors';



    import Button from '@mui/material/Button';


    export default function ViewPosts() {
    
    return (
                <Card 
                    sx={{
                        marginLeft:'35%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: 340,
                        height:500
                    }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500],  }} aria-label="recipe">
                        RS
                    </Avatar>
                    }
                
                    
                    title="Rafi Shaik"
                />
                <CardContent>

                <Typography gutterBottom variant="h4" color="text.primary">
                    <strong>My Profile</strong>
                    </Typography>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2wrXPLf0fSGdZXCPKp3Y-NrRNrnWLqQwvoQ&usqp=CAU"
                />

                    <Typography variant="body5" color="text.primary">
                    <div><strong>First Name : Rafi Shaik </strong></div>  
                    <div><strong>Last Name : Rafi Shaik </strong></div>  
                    <div><strong>Age : Rafi Shaik </strong></div>  
                    </Typography>
                </CardContent>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Edit Profile
                </Button>

                </Card>
    );
    }