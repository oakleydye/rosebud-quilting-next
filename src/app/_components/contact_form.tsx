"use client";

import {
  TextField,
  MenuItem,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { quiltSizes } from "@/lib/quilt_sizes";
import { EmailRequest } from "@/types/email_request";
import { enqueueSnackbar } from "notistack";

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quiltSize, setQuiltSize] = useState("");
  const [message, setMessage] = useState("");
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const messageRequest: EmailRequest = {
      firstName,
      lastName,
      email,
      phoneNumber: phone,
      quiltSize: quiltSize,
      message,
    };

    (async () => {
      await fetch("/api/quilt-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `Quilt Order Request from ${firstName} ${lastName}`,
          message: JSON.stringify(messageRequest, null, 2),
        }),
      })
        .then(() => {
          setShowThankYouMessage(true);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setQuiltSize("");
          setMessage("");
          enqueueSnackbar("Your request has been submitted successfully!", {
            variant: "success",
          });
        })
        .catch((error) => {
          enqueueSnackbar(
            "There was an error submitting your request. Please call or email us directly, and we will get back to you as soon as possible.",
            {
              variant: "error",
            }
          );
        });
    })();
  };

  return (
    <React.Fragment>
      {showThankYouMessage && (
        <div
          style={{
            margin: "1rem",
            padding: "1rem",
            border: "1px solid #000",
            borderRadius: "5px",
          }}
        >
          <p>
            Thank you for your request! We will contact you shortly to discuss
            the details of your order.
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ margin: "1rem", padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <TextField
            label="First Name"
            id="firstName"
            variant="outlined"
            fullWidth
            required
            sx={{ mr: "1rem", mb: "1rem" }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            id="lastName"
            variant="outlined"
            fullWidth
            required
            sx={{ mb: "1rem" }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <TextField
            label="Email"
            id="email"
            variant="outlined"
            fullWidth
            required
            sx={{ mr: "1rem", mb: "1rem" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Phone Number"
            id="phone"
            variant="outlined"
            fullWidth
            sx={{ mb: "1rem" }}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <TextField
          select
          label="Quilt Size"
          id="quiltSize"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: "1rem" }}
          value={quiltSize}
          onChange={(e) => setQuiltSize(e.target.value)}
        >
          {quiltSizes.map((type, index) => (
            <MenuItem key={index} value={type.size}>
              {`${type.size} (${type.width}" x ${type.length}")`}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Additional Information"
          id="message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          sx={{ mb: "1rem" }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: isMobile ? "100%" : undefined, borderRadius: 0 }}
          >
            Submit
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
