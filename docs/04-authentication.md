# 04 - Authentication

## Overview

The application supports email/password authentication and Google sign-in.

Users sign in with their email address. The application does not use public usernames or user-created account IDs.

## Login Methods

### Email and Password

Users can create an account with an email address, password, and selected role.

Passwords are never stored directly. The backend stores only a secure password hash.

### Continue with Google

Users can also sign up or sign in using Google authentication.

Google is used only to verify identity. The application does not request Gmail mailbox access or integrate with Gmail features.

## User Identity

The database uses internal numeric IDs for stable backend relationships. These IDs are not shown to users and are not used for sign-in.

Users sign in with:

* email
* password

or:

* Continue with Google

## Roles

The application supports two user roles:

* JOB_SEEKER
* RECRUITER

The selected role determines which profile setup flow the user sees after registration.

## Authorization

Frontend routing can hide or show pages based on user role, but the backend is responsible for enforcing permissions.

Examples:

* Only recruiters can create job postings.
* Only recruiters can edit jobs they created.
* Only job seekers can apply to jobs.
* Users can only edit their own profile.

## Security Notes

* Passwords are stored as hashes only.
* Backend authorization is required for protected actions.
* Secrets are never stored in frontend code.
* Google sign-in is used only for authentication, not Gmail access.
