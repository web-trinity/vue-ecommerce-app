# Contributing to Vue E-commerce App

We're excited that you're interested in contributing to our Vue E-commerce App! This document outlines the process for contributing to this project.

## Getting Started

1. Clone the repository locally.
   ```
   git clone https://github.com/your-username/vue-ecommerce-app.git
   cd vue-ecommerce-app
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a new branch for your feature or bug fix from the **dev** branch:
   ```
   git checkout dev
   git pull origin dev
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. Make your changes in your feature branch.
2. Run the application locally to test your changes:
   ```
   npm run dev
   ```
3. Ensure your code follows our style guide by running:
   ```
   npm run lint
   ```
4. Commit your changes:
   ```
   git commit -m "Your descriptive commit message"
   ```
5. Push to the repo:
   ```
   git push origin feature/your-feature-name
   ```
6. Submit a pull request from to the `dev` branch.

## Pull Request Process

1. Ensure your PR title clearly describes the change.
2. In the PR description, explain the changes you've made and any relevant issue numbers.
3. Make sure all automated checks pass (linting, tests, etc.).
4. Wait for a review from a teammate.
5. Address any feedback or requested changes.
6. Once approved, your PR will be merged by a teammate.

## Coding Standards

- Follow the [Vue.js Style Guide](https://vuejs.org/style-guide/).
- Use TypeScript for type safety.
- Write clear, descriptive commit messages.
- Keep components focused and single-purpose.
- Comment your code where necessary, especially for complex logic.

## Branch Naming Convention

- Feature branches: `feature/your-feature-name`
- Bug fix branches: `fix/bug-description`
- Documentation branches: `docs/what-you-are-documenting`

## Commit Message Guidelines

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

## Code Review Process

- All submissions require review.
- We use GitHub's pull request features for code reviews.
- Reviewers should leave helpful, constructive feedback.
- Address review comments in follow-up commits.

## Testing

- Write unit tests for new features using Vue Test Library.
- Ensure all tests pass before submitting a pull request:
  ```
  npm run test
  ```

## Documentation

- Update the README.md with details of changes to the interface or significant new features.
- Maintain clear and concise comments in the code.

## Questions?

If you have any questions or need further clarification, please don't hesitate to ask in the project's issues section or contact the team lead.
