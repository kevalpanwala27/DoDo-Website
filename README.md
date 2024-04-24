# Dodo-Website

Dodo-Website is a task management web application built using the MERN stack (MongoDB, Express, React, Node.js). This README provides an overview of the project, setup instructions, and other useful information to help you get started and contribute.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)

## Introduction

Dodo-Website is a simple and intuitive task management application. It allows users to create accounts, add tasks, edit them, delete them, and mark tasks as complete. The application aims to provide a straightforward interface for managing daily tasks.

## Features

- User registration and authentication
- Create, edit, and delete tasks
- Mark tasks as complete
- Simple, user-friendly interface
- Real-time task updates (if applicable)
- Task categorization (optional)

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

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```bash
# MongoDB connection string
MONGODB_URI=[your-mongodb-connection-string]

# Application port
PORT=[your-port, default is 3000]

# Secret key for JWT
JWT_SECRET=[your-secret-key]
```

### Run the Application

To start the development server, use the following command:

```bash
npm start
```

The application should be running on `http://localhost:[PORT]`. Open this URL in your browser to view the website.

## Usage

Once the application is running, you can create an account and log in. After logging in, you can:

- Add new tasks with a title and description
- Edit existing tasks to update their content
- Delete tasks that are no longer needed
- Mark tasks as complete when done

