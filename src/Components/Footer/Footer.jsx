import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
 
export  function Footer() {
  return (
    <Box
      component="footer"
      paddingTop={'4rem'}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={3}>
          <Box sx={{width:'10rem'}}>
          <Box width={1} component={"img"} src={`${process.env.PUBLIC_URL}/logo.svg`} alt={'logo'} />
          </Box>
            <Typography variant="body2" color="text.secondary">
We make technology produce productive, adaptable and sustainable business experiences.                     
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom fontWeight={'bold'}>
              Company
            </Typography>
            <Box>
            <Link variant="body2" color="#5e6282" underline="none">
             About
            </Link>
            </Box>
            <Box>

            <Link variant="body2" color="#5e6282" underline="none">
             Careers
            </Link>
            </Box>
            <Box>

            <Link variant="body2" color="#5e6282" underline="none">
              Mobile
            </Link>
            </Box>

          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom fontWeight={'bold'}>
              Contact
            </Typography>
            <Box>
            <Link variant="body2" color="#5e6282" underline="none">
             Help/FAQ
            </Link>
            </Box>
            <Box>

            <Link variant="body2" color="#5e6282" underline="none">
             Press
            </Link>
            </Box>
            <Box>

            <Link variant="body2" color="#5e6282" underline="none">
              Affilates
            </Link>
            </Box>
            </Grid>

          <Grid item xs={12} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom fontWeight={'bold'}>
              Media
            </Typography>
            <Box>
            <Link variant="body2" color="#5e6282" underline="none">
             News
            </Link>
            </Box>
            <Box>

            <Link variant="body2" color="#5e6282" underline="none">
             Photo
            </Link>
            </Box>
            <Box>

            <Link variant="body2" color="#5e6282" underline="none">
              Video
            </Link>
            </Box>

          </Grid>


          <Grid item xs={12} sm={3} columnSpacing={7}>
            
            
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Discover our app
            </Typography>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Box component={'img'} src={`${process.env.PUBLIC_URL}/apple.png`}/>
                <Box component={'img'} src={`${process.env.PUBLIC_URL}/playstore.png`}/>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
           All rights reserved@Linkdevelopement.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}