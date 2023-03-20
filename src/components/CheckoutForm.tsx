import { Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { theme } from '../theme';

export default function CheckoutForm() {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .min(2, 'Name must be at least two characters')
      .required('First name required'),
    lastName: yup
      .string()
      .min(2, 'Name must be at least two characters')
      .required('Last name required'),
    address: yup
      .string()
      .min(2, 'Please enter a valid address')
      .required('Address required'),
    postalCode: yup
      .number()
      .typeError('Postal code must be a number')
      .min(4, 'Please enter a valid postal code')
      .required('Postal code required'),
    city: yup
      .string()
      .min(2, 'Please enter a valid city')
      .required('City required'),
    phone: yup
      .number()
      .typeError('The value must be a number')
      .integer('The value must be a number')
      .min(6, 'Please enter a valid phone number')
      .required('Phone number required'),
    email: yup
      .string()
      .email()
      .min(4, 'Please enter a valid email')
      .required('Email required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      postalCode: '',
      phone: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
      console.log('confirm');
      navigate(`/confirm`);
    },
  });

  return (
    <div>
      <Typography variant="h6">Shipping address</Typography>
      <StyledForm
        onSubmit={formik.handleSubmit}
        data-cy="customer-form"
      >
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="firstName"
          name="firstName"
          label="First name"
          data-cy="customer-name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={
            <span data-cy="customer-name-error">
              {formik.touched.firstName && formik.errors.firstName}
            </span>
          }
          required={true}
          onBlur={formik.handleBlur}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="lastName"
          name="lastName"
          label="Last name"
          type="last name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          required={true}
          onBlur={formik.handleBlur}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="address"
          name="address"
          label="Address"
          type="address"
          data-cy="customer-address"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={
            <span data-cy="customer-address-error">
              {formik.touched.address && formik.errors.address}
            </span>
          }
          required={true}
          onBlur={formik.handleBlur}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="city"
          name="city"
          label="City"
          type="city"
          data-cy="customer-city"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          required={true}
          onBlur={formik.handleBlur}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="postalCode"
          name="postalCode"
          label="Postal code"
          type="postalCode"
          data-cy="customer-zipcode"
          value={formik.values.postalCode}
          onChange={formik.handleChange}
          error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
          helperText={formik.touched.postalCode && formik.errors.postalCode}
          required={true}
          onBlur={formik.handleBlur}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="phone"
          name="phone"
          label="Phone"
          type="phone"
          data-cy="customer-phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={
            <span data-cy="customer-phone-error">
              {formik.touched.phone && formik.errors.phone}
            </span>
          }
          required={true}
          onBlur={formik.handleBlur}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="standard"
          id="email"
          name="email"
          label="Email"
          type="email"
          data-cy="customer-email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={
            <span data-cy="customer-email-error">
              {formik.touched.email && formik.errors.email}
            </span>
          }
          required={true}
          onBlur={formik.handleBlur}
        />
        <Button
          sx={styledButton}
          color="primary"
          variant="contained"
          type="submit"
          data-cy="product-buy-button"
        >
          Confirm
        </Button>
      </StyledForm>
    </div>
  );
}

const styledButton = {
  margin: '2rem 0',
  padding: '.6rem 2rem',
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
};

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});
