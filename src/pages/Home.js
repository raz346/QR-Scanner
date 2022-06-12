import {Grid, Button, Typography} from '@material-ui/core';
import { Link } from "react-router-dom";

// Style definitions
const buttonStyle = {
    width: '20vw',
    height: '10vh',
    backgroundColor: '#40e36b',
    fontSize: '2vw'
};
const linkStyle = {textDecoration: 'none'};
const containerStyle = {
    height: '90vh',
    width: '60vw',
    backgroundColor: '#ebeff5',
    boxShadow: '5px 5px 5px #c7d5eb'
};

function Home() {

    return (
        <div>
            <Grid style={containerStyle} container spacing={6}>
                <Grid item xs={12}>
                    <Typography style={{margin:5, fontSize: '3vw'}}>
                        QR Scanner App
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/qr_generator" style={linkStyle}>
                        <Button variant="contained" style={buttonStyle}>
                            Generate QR
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/qr_scanner" style={linkStyle}>
                        <Button variant="contained" style={buttonStyle}>
                            Scan QR
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
  }
  
  export default Home;
  