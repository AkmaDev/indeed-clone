


import Header from "../Components/Header";
import { Box, Typography, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routhPath } from "../routes/route";

const Component = styled(Box)({
    marginTop: 70,
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    margin: '0 150px',
    '& > div': {
        width: '50%',
        display: 'flex',
        justifycontent: 'center',
        flexDirection: 'column',
        '& > p': {
            fontSize: 56,
            linHeight: 1.25,
            letterSpacing: -1 
        },
        '& > button': {
            width: 220,
            height: 60,
            background: 'rgb(37, 87, 167)',
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 700,
            marginTop: 48

        }
    }
})
const Home = () => {
    const navigate = useNavigate();
    const animatedImage = "https://storage.googleapis.com/joblist-content/hero-images/45-Interview-Question-and-Answers-Most-Common-Questions.png";

    return  (
        <div>
            <Header />
            <Component>
                <Box>
                    <Typography>Let's make your next <br />great hire. Fast.</Typography>
                    <Button variant="contained" onClick={() => navigate(routhPath.create)}>Post a job</Button>
                </Box>
                <Box>
                    <img src={animatedImage} alt="home" style={{ width: 600}} />
                </Box>
            </Component>
        </div>
    
    )
}

export default Home;