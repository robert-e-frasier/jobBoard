# 03 - Database Design

## Overview

The database is designed around two main user roles: job seekers and recruiters.

Users authenticate with an email address and password or by using Google sign-in. The application uses internal numeric IDs as primary keys, but users never see or create these IDs.

## Core Tables

### users

Stores account-level information.

Fields:

* id
* email
* password_hash
* role
* created_at
* updated_at

### auth_accounts

Stores external authentication provider records.

Fields:

* id
* user_id
* provider
* provider_user_id
* provider_email
* created_at
* updated_at

### job_seeker_profiles

Stores profile information for users with the job seeker role.

Fields:

* id
* user_id
* first_name
* last_name
* phone
* location
* headline
* bio
* resume_url
* created_at
* updated_at

### recruiter_profiles

Stores profile information for users with the recruiter role.

Fields:

* id
* user_id
* company_id
* first_name
* last_name
* title
* created_at
* updated_at

### companies

Stores company information entered by recruiters.

Fields:

* id
* name
* website
* location
* description
* created_at
* updated_at

### jobs

Stores job postings created by recruiters.

Fields:

* id
* company_id
* recruiter_id
* title
* description
* location
* remote_type
* employment_type
* salary_min
* salary_max
* status
* created_at
* updated_at

### applications

Stores applications submitted by job seekers.

Fields:

* id
* job_id
* job_seeker_id
* status
* cover_letter
* resume_url
* created_at
* updated_at

## Design Notes

Email is used as the login identifier, but not as the primary key. Internal numeric IDs are used to maintain stable relationships between records if a user changes their email address.

Recruiters and job seekers have separate profile tables because they require different information and have different permissions.

Job postings are connected to both the recruiter who created them and the company they belong to.
