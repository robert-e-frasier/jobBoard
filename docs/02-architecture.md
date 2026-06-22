# 02 - Architecture

## Overview

This project uses a full-stack architecture with a separate frontend, backend, and database.

## Frontend

The frontend is built with React and TypeScript. It is responsible for displaying pages, forms, navigation, job listings, profiles, and user interactions.

The frontend does not directly access the database. It communicates with the backend through API requests.

## Backend

The backend is built with Node.js and Express. It handles authentication, authorization, validation, business logic, and communication with the database.

The backend is responsible for enforcing security rules, including which users can create job posts, submit applications, or access protected profile data.

## Database

PostgreSQL is used as the relational database. It stores users, profiles, companies, job postings, applications, sessions, and authentication-related records.

## Repository Structure

The frontend and backend are developed in the same repository for easier version control, documentation, and project management.

They remain separate applications with separate dependencies and build processes.

## Deployment Model

Although the frontend and backend are developed in one repository, they are intended to be deployed separately.

The frontend can be deployed as static files through a web host, CDN, or static hosting provider. The backend should be deployed as an API service. The database should not be publicly accessible and should only be reachable by the backend.
