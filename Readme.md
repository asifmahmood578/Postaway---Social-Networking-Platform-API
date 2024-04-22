## Postaway - Social Networking Platform API

This project implements an Express-Node API for a social networking platform called Postaway.

### Project Overview

1. **Objective**: Build a scalable API for a social networking platform allowing users to create posts, like and comment on posts, and manage user authentication.

2. **Tech Stack**: ExpressJS, Node.js, JWT for authentication.

### Acceptance Criteria

1. **Scalable Architecture**: Utilize ExpressJS to create a scalable architecture that separates data management, application logic, and routing control.

2. **ES6 Modules**: Utilize ES6 Modules for code modularity and organization.

3. **In-memory Data Structures**: Implement data management operations using in-memory data structures for posts, likes, comments, and users.

4. **User Management**: Implement user registration and login functionalities with JWT-based authentication.

5. **Post Management**: Allow users to create, view, update, and delete posts. Include functionalities for liking and commenting on posts.

6. **Error Handling**: Create a custom error class and implement an error handling middleware to send custom error messages.

7. **JWT Authentication**: Use JSON Web Tokens (JWT) to manage authentication tokens and secure application routes, excluding user routes.

8. **File Upload**: Implement a file upload middleware to handle post media.

9. **Request Logging**: Use a logger middleware to log request URL and body for all routes, excluding user routes.

### Tasks

1. **Express.js Setup**: Set up an Express.js application and its related configurations.

2. **Dependencies Installation**: Install necessary project dependencies based on the functionalities required.

3. **User Management**:
   - Create a User model and controller with functions for user registration, login, and authentication.

4. **Post Management**:
   - Create a Post model and controller with functions for managing posts, likes, and comments.

5. **Error Handling**:
   - Create a custom error class and implement an error handling middleware to send custom error messages.

6. **JWT Authentication**:
   - Implement token-based middleware for user authentication and to secure all application routes.

7. **File Upload**:
   - Implement a file upload middleware to handle post media.

8. **Request Logging**:
   - Implement a logger middleware to log request URL and body for all routes, excluding user routes.

### Additional Tasks

1. **Post Filtering**: Add a feature to allow users to filter posts based on the post's caption.

2. **Drafts and Archives**: Implement functionality to save posts as drafts and archive posts.

3. **Sorting**: Allow sorting of posts based on user engagement and date.

4. **Bookmarking**: Add a feature to allow users to bookmark posts.

5. **Pagination**: Implement pagination for posts and comments to efficiently handle large datasets.

### Swagger Documentation

For detailed API documentation, refer to the provided [Swagger JSON file](swagger.json).

### Getting Started

1. Clone this repository to your local machine.
2. Install project dependencies with `npm install`.
3. Set up environment variables as needed.
4. Start the server with `npm start`.

### Conclusion

Postaway provides a robust API solution for building a social networking platform. It incorporates essential functionalities and adheres to modern web development practices.
