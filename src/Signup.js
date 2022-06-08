import React, { useEffect, useRef, useState } from "react";
import { get, isEmpty, set } from "lodash-es";
import { FormBuilder } from "@jeremyling/react-material-ui-form-builder";
import { Avatar, Button, IconButton, InputAdornment } from "@mui/material";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { indigo, red } from "@mui/material/colors";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { register } from "./Utils/api";

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

export default function Signup({ nav, setNav },props) {
  useEffect(() => {
    setNav(false)
<<<<<<< HEAD
},[])
=======

})
>>>>>>> e500aa98e8f7bcc646738da7cad00214b6c63234
  const navigate=useNavigate();
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
    const ok = await validate(refs, form);
    if (ok) {
      register(form);
      navigate("/main")
    }
    console.log(form);
  };

  const fields = [
    {
      component: "custom",
      customComponent: () => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar style={{ backgroundColor:"rgb(243, 26, 73)", color: "white" }}>
            <LockOutlined />
          </Avatar>
        </div>
      )
    },
    {
      component: "display-text",
      title: "הרשמה",
      titleProps: {
        style: {
          fontSize: "20px",
          fontWeight: "bold"
        }
      },
      titleContainerProps: {
        style: {
          justifyContent: "center"
        }
      }
    },
    {
      attribute: "firstName",
      component: "text-field",
      label: "שם פרטי",
      props: {
        required: true
      },
      col: {
        xs: 6
      },
      validations: {
        required: true
      }
    },
    {
      attribute: "lastName",
      component: "text-field",
      label: "שם משפחה",
      props: {
        required: true
      },
      col: {
        xs: 6
      },
      validations: {
        required: true
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
        email: true
      }
    },
    {
      attribute: "password",
      component: "text-field",
      label: "סיסמא",
      props: {
        type: showPassword ? "text" : "password",
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
          style: {
            paddingRight: 0
          }
        },
        required: true
      },
      validations: {
        required: true,
        min: 8,
        matches: ["/[a-z]/i", "At least 1 lowercase or uppercase letter"],
        test: {
          name: "specialChar",
          test: (value) =>
            /[0-9~!@#$%^&*()_+\-={}|[\]\\:";'<>?,./]/.test(value),
          message: "At least 1 number or special character"
        }
      }
    },

   ];

  return (
    <div className="top" style={{ display: "flex", justifyContent: "center" }}>
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
         להרשמה
          </Button>
        </form>
        <div>
          <Button
            onClick={() =>navigate("/login") }
            style={{
              textTransform: "initial",
              marginTop: "16px",
              color: indigo[500]
            }}
          >
            ?יש לך חשבון
          </Button>
        </div>
      </div>
    </div>
  );
}

Signup.propTypes = {
  setAuthType: PropTypes.func
};
  //   {
  //     attribute: "remember",
  //     component: "checkbox-group",
  //     options: [
  //       {
  //         label: "Remember Me",
  //         value: true
  //       }
  //     ],
  //     optionConfig: {
  //       key: "label",
  //       label: "label",
  //       value: "value"
  //     }
  //   }