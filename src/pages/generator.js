import React, {useState} from 'react';
import {Fab, Button, TextField, Grid} from '@material-ui/core';
import Alert from '@mui/material/Alert';
import {GetApp} from '@material-ui/icons';
import { Link } from "react-router-dom";
import QRcode from 'qrcode.react'
import {containerStyle, backButton, linkStyle} from './../sharedStyle'

function QRgenerator() {
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
            <Grid style={{marginTop:30}}>
                <TextField onChange={handleChange} style={{width:320}}
                value={qr} label="QR content" size="medium" variant="outlined" color="primary" 
                />
            </Grid>
            <Grid>
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
            </Grid>
            <div>
                {
                    qr ? 
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item style={{width:320}}>
                            <Alert severity="success">
                                {qr}
                            </Alert>
                            <Fab onClick={downloadQR} style={{marginTop:5}} color="primary">
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
  