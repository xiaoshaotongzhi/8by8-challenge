# 8by8 Challenge TypeScript Project

Welcome to the TypeScript project for the 8by8 Challenge! This project is designed to foster civic engagement by allowing users to perform various actions such as registering to vote or signing up for election reminders in exchange for badges. Users can also share their challenge with friends via social media. When an invited user registers to vote or takes another similar action, the inviter also receives a badge. When a user receives 8 badges within 8 days, they have completed their challenge.

## Project Structure

- **src/**: Contains the main application code.
  - **app.ts**: The entry point of the application, initializing middleware and routing.
  - **controllers/**: Contains controllers for handling various routes.
  - **routes/**: Defines the routes for the application.
  - **types/**: Contains interfaces and types used throughout the application.

- **docs/**: Contains documentation files.
  - **API_Reference.md**: The main API reference page with a table of contents.
  - **functions.md**: Documentation for all functions in the project.
  - **classes.md**: Documentation for all classes in the project.
  - **interfaces.md**: Documentation for all interfaces in the project.
  - **sidebar.md**: Custom sidebar configuration.

## Getting Started

1. Install Node.js version 18.17 or higher. [Download Node.js](https://nodejs.org/en/download/package-manager)
2. Install Docker. [Download Docker](https://www.docker.com/). Ensure WSL 2 is enabled if running on Windows. [WSL 2 Setup](https://learn.microsoft.com/en-us/windows/wsl/install)
3. Clone this repository and navigate into the project directory.
4. Run `npm install` to install the project's dependencies.
5. Follow the instructions in the **docs/API_Reference.md** for setting up the environment and running the application.

## API Reference

For detailed API documentation, please refer to the [API Reference](docs/API_Reference.md).

## Contributing

New contributors should review the [Style Guide](docs/STYLE_GUIDE.md) for information about code style requirements. This will help maintain uniformity and save time during PR reviews.

## Resources

- [Figma prototype](https://www.figma.com/design/TP1ZMtd6ykIjNql1t0OBoA/8BY8_PROTO_V2)
- [Contributing Guidelines](https://github.com/8by8-org/8by8-challenge/blob/development/CONTRIBUTING.md)
- [Style Guide](https://github.com/8by8-org/8by8-challenge/blob/development/STYLE_GUIDE.md)

## Tests and Tools

- Unit tests are written with Jest and React Testing Library. Run tests with `npm run test`.
- Storybook is available for viewing component stories. Run with `npm run storybook`.
- Selenium tests can be run after setting up the environment as described in the documentation.