# User Registration Endpoint

## Endpoint

**POST** `/register`

## Description

This endpoint registers a new user. The service receives user data, hashes the password, creates a user record, and returns an authentication token along with the user data.

## Request Data

- **fullname**: An object containing:
  - **firstname** (string, required, minimum 3 characters)
  - **lastname** (string, optional, minimum 3 characters if provided)
- **email**: (string, required, a valid email format)
- **password**: (string, required, minimum 5 characters)

Example payload:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

## Response

- **201 Created**: Successfully registered user. Returns a JSON object containing a JWT token and user details.
- **400 Bad Request**: Validation errors or missing required fields.

## Status Codes

- **201**: User created successfully.
- **400**: Request validation failed.
