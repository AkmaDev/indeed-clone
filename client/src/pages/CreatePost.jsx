import { useState } from "react";
import Header from "../Components/Header";
import { Box, Container, Typography, styled, TextField, Button } from "@mui/material";
import Dropdown from "../Components/Dropdown";
import { savePost } from "../services/api";
import { useNavigate } from "react-router-dom";
import { routhPath } from "../routes/route";


const Component = styled(Box)({
    padding: '80px 200px',
    background: '#F5F5F5'
})

const StyledContainer = styled(Box)({
    display: 'flex',
    background: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 70px',
    '& > p': {
        fontSize: 35,
        fontWeight: 700,
        opacity: '.7'
    }
})

const FormWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    padding: 20,
    background: '#FFFFFF',
    borderRadius: 20,
    '& > *': {
        marginTop: '20px !important'
    }
})

const defaultObj  = {
    profile: "",
    type:"",
    description: "",
    experience: "",
    technology: [],
    salary: ""

}

const options = {
    type: ["Online", "Offline"],
    experience: ["0-2 Years", "5-8 Years", "8 and more years"],
    technology: ["Java", "JavaScript", "Angular", "React", "Node.js", "Docker", "AWS", "HTML", "CSS", "C", "C++", "C#", "Python", "Ruby", "R"],
    salary: ["$ 0-30000", "$ 30000-50000", "$ 50000-80000", "$ 80000-130000", "$ 130000 and more"]
}
const CreatePost = () => {
    const [data, setData] = useState(defaultObj);

    const navigate = useNavigate();

    const image= "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/02/01182851/List-of-12th-Pass-Jobs.jpg"

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };    


    const saveJob =async () => {
        await savePost(data);
        navigate(routhPath.posts);
    }
    return (
        <>
            <Header/>
            <Component> 
                <StyledContainer> 
                    <Typography>Create a job post</Typography>
                    <img src={image} alt="create" />
                </StyledContainer>
                <FormWrapper> 
                    <TextField
                        placeholder="Job Title"
                        name="profile"
                        onChange={handleChange}
                    />
                    <Dropdown
                        label="Job Type"
                        id="job-type-label"
                        value={data.type}
                        handleChange={handleChange}
                        name="type"
                        options={options.type}
                    />
                    <TextField
                        placeholder="Job Description"
                        name="description"
                    />
                    <Dropdown
                        label="Experience"
                        id="job-experience-label"
                        value={data.experience}
                        handleChange={handleChange}
                        options={options.experience}
                        name="experience"
                    />
                    <Dropdown
                        label="Technology"
                        id="job-technology-label"
                        value={data.technology}
                        handleChange={handleChange}
                        options={options.technology}
                        name="technology"
                        multiple
                    />
                    <Dropdown
                        label="Salary"
                        id="job-salary-label"
                        value={data.salary}
                        handleChange={handleChange}
                        options={options.salary}
                        name="salary"    
                    />
                    <Button onClick={() => saveJob()} variant="contained">Save Job</Button>
                </FormWrapper>
            </Component>
        </>
    )
}

export default CreatePost;