# 05 - API Design

## Authentication

POST /api/auth/register  
Create a new account.

POST /api/auth/login  
Sign in with email and password.

POST /api/auth/google  
Sign in or create an account with Google.

POST /api/auth/logout  
End the current session.

GET /api/auth/me  
Return the currently signed-in user.

## Job Seeker Profiles

GET /api/job-seeker/profile  
Get the current job seeker's profile.

PUT /api/job-seeker/profile  
Create or update the current job seeker's profile.

## Recruiter Profiles

GET /api/recruiter/profile  
Get the current recruiter's profile.

PUT /api/recruiter/profile  
Create or update the current recruiter's profile.

## Companies

POST /api/companies  
Create a company profile.

GET /api/companies/:id  
Get a company profile.

PUT /api/companies/:id  
Update a company profile.

## Jobs

GET /api/jobs  
Get public job listings.

GET /api/jobs/:id  
Get a single job listing.

POST /api/jobs  
Create a job posting.

PUT /api/jobs/:id  
Update a job posting.

DELETE /api/jobs/:id  
Close or delete a job posting.

## Applications

POST /api/jobs/:id/apply  
Apply to a job.

GET /api/applications/me  
Get the current job seeker's applications.

GET /api/jobs/:id/applications  
Get applications for a recruiter's job posting.

PUT /api/applications/:id/status  
Update an application status.
