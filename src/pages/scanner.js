import React, {useState} from 'react'
import {Grid, Button} from '@material-ui/core'
import Alert from '@mui/material/Alert';
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'

function QRscanner() {
    const linkStyle = {textDecoration: 'none'}
    const containerStyle = {
        height: '90vh',
        width: '60vw',
        backgroundColor: '#ebeff5',
        boxShadow: '5px 5px 5px #c7d5eb'
    };
    const backButton = {
        width: '10vw',
        height: '6vh',
        backgroundColor: '#40e36b',
        fontSize: '1vw',
        marginRight: '40px',
        marginTop: '5px'
    };
    const [alertStatus, setAlert] = useState('error');
    const [qrscan, setQrscan] = useState('No result');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
            setAlert('success');
        }
    }
    const handleError = err => {
        console.error(err)
        setAlert('error');
    }

    return (
      <div>
            <Grid style={containerStyle}>
                <Grid container>
                    <Grid item xs={4}>
                        <Link style={linkStyle} to="/">
                            <Button style={backButton} variant="contained" size="small">
                                Back
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <span>QR Generator</span>
                    </Grid>
                </Grid>
                <center>
                    <Grid style={{marginTop:30}}>
                        <QrScan
                            delay={300}
                            onError={handleError}
                            onScan={handleScan}
                            style={{ height: 240, width: 320 }}
                        />
                    </Grid>
                </center>
                <Grid container justifyContent="center" alignItems="center" style={{marginTop:110}}>
                    <Alert severity={alertStatus}>
                        {qrscan}
                    </Alert>
                </Grid>
            </Grid>

      </div>
    );
  }
  
  export default QRscanner;
  