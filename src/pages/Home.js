import {Grid, Button, Typography} from '@material-ui/core';
import { Link } from "react-router-dom";
import {containerStyle, linkStyle, mainMenuButtonStyle} from './../sharedStyle'
// Style definitions


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
                        <Button variant="contained" style={mainMenuButtonStyle}>
                            Generate QR
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link to="/qr_scanner" style={linkStyle}>
                        <Button variant="contained" style={mainMenuButtonStyle}>
                            Scan QR
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
  }
  
  export default Home;
  