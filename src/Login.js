import React, { useEffect, useRef, useState } from "react";
import { get, isEmpty, set } from "lodash-es";
import { FormBuilder } from "@jeremyling/react-material-ui-form-builder";
import { Avatar, Button, IconButton, InputAdornment } from "@mui/material";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { indigo, red } from "@mui/material/colors";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { login } from "./Utils/api";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/userReducer/actions";

async function validate(refs, form) {
  for (const [attribute, ref] of Object.entries(refs.current)) {
    var errors;
    if (ref.validate) {
      errors = await ref.validate(get(form, attribute));
    }
    if (!isEmpty(errors)) {
      console.log(errors);
      return false;
    }
  }
  return true;
}

export default function Login({ nav, setNav },props) {
  const dispatch = useDispatch();
  useEffect(() => {
    setNav(false)
})
  let navigate = useNavigate();
  const { setAuthType } = props;
  const [form, setForm] = useState({});
  const [showPassword, setShowPassword] = useState();

  const refs = useRef({});

  const updateForm = (updates) => {
    const copy = { ...form };
    for (const [key, value] of Object.entries(updates)) {
      set(copy, key, value);
    }
    setForm(copy);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isExist = await login(form.phone);
    if (isExist) {
      dispatch(setUser(form))
      navigate('/main')
    }
    else {
      navigate('/register');

    }
  };

  const fields = [
    {
      component: "custom",
      customComponent: () => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar style={{ backgroundColor:"rgb(243, 26, 73)" , color: "white" }}>
            <LockOutlined />
          </Avatar>
        </div>
      )
    },
    {
      component: "display-text",
      title: "כניסה",
      titleProps: {
        style: {
          fontSize: "20px",
          fontWeight: "bold",
          // backgroundColor:"red[500]"
        }
      },
      titleContainerProps: {
        style: {
          justifyContent: "center"
        }
      }
    },
    {
      attribute: "phone",
      component: "text-field",
      label: "טלפון",
      props: {
        required: true
      },
      validations: {
        required: true
      }
    },
    {
      attribute: "email",
      component: "text-field",
      label: "מייל",
      props: {
        required: true
      },
      validations: {
        required: true,
        email: true,

      }
    },
   ];

  return (
    <div className="top" style={{ display: "flex", justifyContent: "center",paddingTop:"10px" }}>
      <div style={{ width: "60%" }}>
        <form onSubmit={handleSubmit}>
          <FormBuilder
            fields={fields}
            form={form}
            updateForm={updateForm}
            refs={refs}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "8px" }}
          >
            לכניסה
          </Button>
        </form>
        <div>
          <Button
            onClick={() => { navigate("/register") }}
            style={{
              textTransform: "initial",
              color: indigo[500]
            }}
          >
            ?אין לך חשבון
          </Button>
        </div>
      </div>
    </div>
  );
}
Login.propTypes = {
  setAuthType: PropTypes.func
};

    // {
    //   attribute: "password",
    //   component: "text-field",
    //   label: "Password",
    //   props: {
    //     type: showPassword ? "text" : "password",
    //     InputProps: {
    //       endAdornment: (
    //         <InputAdornment position="end">
    //           <IconButton
    //             aria-label="toggle password visibility"
    //             onClick={() => setShowPassword(!showPassword)}
    //           >
    //             {showPassword ? <Visibility /> : <VisibilityOff />}
    //           </IconButton>
    //         </InputAdornment>
    //       ),
    //       style: {
    //         paddingRight: 0
    //       }
    //     },
    //     required: true
    //   },
    //   validations: {
    //     required: true,
    //     min: 8,
    //     matches: ["/[a-z]/i", "At least 1 lowercase or uppercase letter"],
    //     test: {
    //       name: "specialChar",
    //       test: (value) =>
    //         /[0-9~!@#$%^&*()_+\-={}|[\]\\:";'<>?,./]/.test(value),
    //       message: "At least 1 number or special character"
    //     }
    //   }
    // },
