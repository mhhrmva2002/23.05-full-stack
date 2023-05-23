import React, { useEffect,useState } from 'react'
import {Box,Button,Grid, Typography} from "@mui/material";
import { Card } from "antd";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {deleteColorlibById, getAllColorlib} from "../api/requests";
import '../index.css';

const Home = () => {
    const [colorlibs, setColorlibs] = useState([]);
    useEffect(()=>{
        getAllColorlib().then(res=>{
            setColorlibs(res);
        })
    }, [])
  return (
    <>
        <section className='one'>
            <div >
                <h1 style={{backgroundColor:"#8a90ff"}}>Improved <br/> Production level <br/> with Robotics</h1>
                <button className='get-started'>GET STARTED</button>
            </div>
            <div className='shekil'></div>
        </section>
        <section>
            <div  className='Featured'>
                <h1>Featured Robotics Products to Show</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>
<div className='box'>
            <Box sx={{ flexGrow: 1, width: "90%", margin: "25px auto" }}>
        <Grid container spacing={2}>
          {colorlibs && colorlibs.map((colorlib)=>{
            return <Grid key={colorlib.id} item lg={3} md={6} sm={12}>
            <Card 
              hoverable
              cover={
                <img
                  style={{padding:"10px",
                    height: "250px",
                    objectFit: "",
                    objectPosition: "top center",
                  }}
                  alt="example"
                  src={colorlib.ImageURL}
                />
              }
            >
              <Typography> <Link to={`/colorlib/${colorlib._id}`}>{colorlib.Body}</Link></Typography>
              <Typography>{colorlib.Title}</Typography>
              <Typography>{colorlib.Likes}</Typography>
              <Button className='delete' onClick={()=>{
                  Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      setColorlibs(colorlibs.filter((x)=>x._id!==colorlib._id))
                      Swal.fire(
                        `${colorlib.Body} Deleted!`,
                        'Your colorlib has been deleted.',
                        'success'
                      )
                      deleteColorlibById(colorlib._id)
                     
                    }
                  })
                }
              } variant="outlined" color="warning">Delete</Button>
            </Card>
          </Grid>
          })}
        </Grid>
      </Box>
            <div>

            </div>
            </div>
        </section>
    </>
  )
}

export default Home