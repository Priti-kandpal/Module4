            Introduction to Backend Development & Node.js
------------------------------------------------------------------------------------------------

# Q1. Role of Frontend (FE)

- The Frontend (FE) is the part of a web application that users see and interact with in their browser. It focuses on appearance, usability, and interaction.

1. User Interface
Frontend is responsible for designing and displaying the user interface of the application. This includes layouts, buttons, forms, text, images, and the overall visual structure. Technologies like HTML, CSS, and frameworks such as React are commonly used to create attractive and responsive interfaces.

2. User Interaction
Frontend handles all user actions, such as clicking buttons, filling forms, scrolling pages, and navigating between screens. It also provides instant feedback to users, like form validation errors or loading indicators.

3. Communication with Backend
Frontend communicates with the backend using HTTP requests, including GET, POST, PUT, and DELETE. It sends user data to the server and receives responses like JSON data, which is then shown to the user.

-------------------------------------------------------------------------------------------------

# Q2. Role of Backend (BE)

- The Backend (BE) works behind the scenes and handles all server-side operations that users do not see directly.

1. Server-Side Processing
The backend processes requests sent by the frontend, applies logic, performs calculations, and prepares responses. It ensures the correct data is returned based on the request.

2. Database Management
Data storage, retrieval, updating, and deletion from databases are handled by the backend. It guarantees correct data flow and consistency between the database and the application.


3. Authentication and Security
User authorization and authentication are handled by the backend. It manages permissions, checks login credentials, safeguards private information, and stops illegal access.


-------------------------------------------------------------------------------------------------

## Q3. Business  Logic

- The rules and decision-making procedures that specify how a business functions within an application are referred to as "business logic." When specific actions are carried out, it establishes *what should happen*.
Business logic guarantees that the application operates in accordance with business requirements and is typically implemented in the backend.

> Real-World Examples:

1. E-commerce Website - Determining the total cost after deducting shipping, taxes, and discounts.
   Checkout is only permitted if the products are available.

2. Banking Application - Preventing the transfer of funds if the account balance is inadequate.
   Limiting daily transactions.

3. The online exam system automatically submits the test when the allotted time has passed.
   If only one attempt is permitted, then multiple attempts are blocked.


-------------------------------------------------------------------------------------------------

## Q4. Model of Client-Server

Tasks are split between service providers (servers) and service requesters (clients) in the **Client–Server Model** communication structure.

- Customer:
The client, which sends requests and shows responses, is typically a web browser or mobile application. It communicates with users and makes requests for information or services.

- Server:
The server is a system that receives requests from clients, processes them, applies business logic, and replies.

> The Process of Communication
1. The client submits a request to the server.
2. The request is processed by the server.
3. The server replies to the client.
4. The client shows the user the response.

--------------------------------------------------------------------------------------------------


## Q5.Three Tier Architecture

- To enhance organization, scalability, and maintenance, a web application is divided into three distinct layers using the "3-Tier Architecture".

1. Layer of Presentation
The frontend layer is this. It manages user interaction and the user interface. Frontend frameworks, HTML, CSS, and JavaScript are a few examples.

2. Business (Application) Layer
Application rules and business logic are found in this layer. It determines how data should flow, processes requests, and conducts validations.

3. Layer of Data
Data storage and retrieval are handled by this layer. Databases and database management systems are part of it.

> The Use of 3-Tier Architecture:
Improved security; easier maintenance and scalability; better separation of concerns; and the ability to update each layer independently.

-------------------------------------------------------------------------------------------------

## Q6. JavaScript as a Backend Language

- JavaScript's efficiency and flexibility make it a popular backend language.

1. Execution
JavaScript is quick and effective at managing numerous requests at once because of its non-blocking, event-driven architecture (Node.js).

2. Ecosystem
With millions of packages accessible via npm, JavaScript boasts a vast ecosystem. This facilitates and speeds up development.

3. Well-liked Backend Frameworks
Node.js, Express.js, NestJS, and Fastify are a few well-known JavaScript backend frameworks.

> Developers can use a single language throughout the entire application by using JavaScript on both the frontend and the backend.

-------------------------------------------------------------------------------------------------

