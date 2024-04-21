# FireGuardians

Welcome to the official GitHub repository for [FireGuardians](https://www.fire-guardians.com) - a Progressive Web App (PWA) built on the [OctoMesh platform](https://www.meshmakers.io). Our mission is to provide a real-time solution for preventing, tracking and reporting wildfires including restoration. We aim to create a vigilant community of individuals, collectively known as "Fire Guardians", who can report fire incidents and receive alerts promptly, thus aiding in the prevention and mitigation of wildfires.

## Getting Started with FireGuardians

This repository contains two main components:

1. **Construction Kit as Data Space**: This is a set of tools and libraries that serve as the backbone of the FireGuardians data management system.
2. **PWA Application**: Built using Angular, this app allows users to register, log in via Google or Facebook (thanks to OctoMesh's authentication services), track their location, and report fires.

### Prerequisites

Before you begin, ensure you have the following installed:

- Dotnet SDK (v8.0)
- Node.js (v20.x or later)
- NPM (v10.x or later)
- Angular CLI (v17.x)
- A modern web browser to test the PWA

### Installation

Clone the repository to your local machine using:

```bash
git clone https://github.com/meshmakers/FireGuardians.git
cd FireGuardians
dotnet build -c Debug # build in debug configuration
dotnet build -c Release # build in release configuration
```

#### Configure OctoMesh
Clone getting started repository from https://github.com/meshmakers/getting-started

Do the steps to install OctoMesh services as described in the README.md file.

Now, we need to configure the OctoMesh services to connect with the FireGuardians application. Execute following scripts to log-in and to add the needed configuration:

```pwsh
cd scripts
./om-login-local.ps1
./om-setupIdentityService.ps1
```

Now we need to add a new tenant to the OctoMesh services. Execute the following script to add a new tenant:

```pwsh
./om-create-tenants.ps1
./om-importck.ps1
```

Script om-importck.ps1 will import the Construction Kit to the OctoMesh services. Ensure that you have build the solution previously.

## Features
* User Registration and Authentication: Sign up and log in using Google or Facebook credentials.
* Location Tracking: Keep track of your movements and contribute to safety mapping.
* Fire Reporting: Users can report fires with a few clicks.
* Real-Time Notifications: Alerts are sent out to users within a 10 km radius of a reported fire.

FireGuardians send out real-time notifications. If you're within a 10 km radius of a reported fire, you'll receive an alert with the fire's location and the reporter's notes.

## Contributing
We encourage contributions to the FireGuardians project. Please read our CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.