import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from "react-redux"


function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your Info
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="名（First name）"
            fullWidth
            autoComplete="fname"
            onChange={e=>console.log(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="姓（Last name）"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="市町村（City）"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            id="state"
            name="state" 
            label="都道府県（State/Province/Region）" 
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="郵便番号（Zip / Postal code）"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="国（Country）"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="プライバシーポリシーへの同意"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = state => {

}
const mapDispatchToProps = dispatch => {
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressForm);
