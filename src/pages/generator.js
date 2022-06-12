import React, {useState} from 'react';
import {Fab, Button, TextField, Grid} from '@material-ui/core';
import Alert from '@mui/material/Alert';
import {GetApp} from '@material-ui/icons';
import { Link } from "react-router-dom";
import QRcode from 'qrcode.react'

function QRgenerator() {
    // Style definitions
    const linkStyle = {textDecoration: 'none'}
    const containerStyle = {
        height: '90vh',
        width: '60vw',
        backgroundColor: '#ebeff5',
        boxShadow: '5px 5px 5px #c7d5eb',
    };

    const backButton = {
        width: '10vw',
        height: '6vh',
        backgroundColor: '#40e36b',
        fontSize: '1vw',
        marginRight: '40px',
        marginTop: '5px'
    };
    
    // 
    const [qr, setQr] = useState('TestYouQrCode');
    const handleChange = (event) => {
        setQr(event.target.value);
    };
    const downloadQR = () => {
        const canvas = document.getElementById("myqr");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "myqr.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

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
            
            <div style={{marginTop:30}}>
                <TextField onChange={handleChange} style={{width:320}}
                value={qr} label="QR content" size="medium" variant="outlined" color="primary" 
                />
            </div>

            <div>
                {
                    qr ?
                    <QRcode 
                        id="myqr"
                        value={qr} 
                        size={320}
                        includeMargin={true}
                    /> :
                    <p>No QR code preview</p>
                }
            </div>
            <div>
                {
                    qr ? 
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={5} style={{marginLeft:'20px'}}>
                            <Alert severity="success">
                                {qr}
                            </Alert>
                        </Grid>
                        <Grid item xs={2}>
                        <Fab onClick={downloadQR} style={{marginLeft:10}} color="primary">
                            <GetApp/>
                        </Fab>
                        </Grid>
                    </Grid> :
                    <p></p>
                }
            </div>
          </Grid>
      </div>
    );
  }
  
  export default QRgenerator;
  