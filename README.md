# Dodo-Website

Dodo-Website is a task management web application built using the MERN stack (MongoDB, Express, React, Node.js). This README file provides an overview of the project, setup instructions, and other useful information to help you get started and contribute.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)

## Introduction

Dodo-Website is a simple task management application that allows users to create accounts, add tasks, edit them, delete them, and mark tasks as complete. The application aims to provide a user-friendly way to manage daily tasks.

## Features

- User registration and authentication
- Create, edit, and delete tasks
- Mark tasks as complete
- Intuitive user interface
- Real-time task updates (if applicable)
- Task categorization (optional)

## Project Structure

The project is organized as follows:

- **Backend**: The main folder contains the server-side code using Node.js, Express, and MongoDB.
- **Frontend**: The `client` folder contains the client-side code using React.

## Installation and Setup

To set up Dodo-Website on your local machine, follow these steps:

### Prerequisites

- Node.js (version 14 or later recommended)
- npm or yarn
- MongoDB (local or remote instance)

### Clone the Repository

```bash
git clone [your-repo-link]
cd Dodo-Website
```

### Install Backend Dependencies

```bash
npm install
```

### Install Frontend Dependencies

```bash
cd client
npm install
cd ..
```

### Set Up Environment Variables

Create a `.env` file in the main folder with the following environment variables:

```bash
# MongoDB connection string
DB_URL=[your-mongodb-connection-string]

# Secret key for JWT
JWT_SECRET=[your-secret-key]
```

### Run the Application

To start the backend server with `nodemon`, use the following command:

```bash
nodemon server.js
```

In a separate terminal, start the frontend server:

```bash
cd client
npm start
```

The backend should be running on `http://localhost:[PORT]`, and the frontend on `http://localhost:3000`. Open these URLs in your browser to interact with the website.

## Usage

Once the application is running, you can create an account and log in. After logging in, you can:

- Add new tasks with a title and description
- Edit existing tasks to update their content
- Delete tasks that are no longer needed
- Mark tasks as complete when done
