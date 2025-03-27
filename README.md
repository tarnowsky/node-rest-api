# Project Name

## Description
A web application built with Node.js and MongoDB. This project provides a robust backend API, data management, and RESTful endpoints.

## Prerequisites
Ensure you have the following installed before proceeding:

- **Node.js** (LTS version recommended) – [Download & Install](https://nodejs.org/)
- **MongoDB** (Community Edition or Atlas) – [Installation Guide](https://www.mongodb.com/docs/manual/installation/)

## Installation

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the node-rest-api directory.
   - Add the following variables:
     ```env
     MONGODB_URI=
     PORT=
     ```

4. **Database Configuration:**
   - Ensure MongoDB is running locally or provide a remote connection URI in `.env`.
   - The connection settings should match the `database.js` configuration.

## Running the Application

### Development Mode
To start the application in development mode:
```sh
npm run dev
```

### Production Mode
To build and start in production:
```sh
npm run build
npm start
```

## API Endpoints
| Method | Endpoint       | Description          |
|--------|---------------|----------------------|
| GET    | `/api/data`   | Fetch all data      |
| POST   | `/api/data`   | Create new entry    |
| PUT    | `/api/data/:id` | Update entry      |
| DELETE | `/api/data/:id` | Delete entry      |

## Technologies Used
- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **dotenv** for environment variable management
- **Nodemon** for automatic server restarts (development mode)
- **Morgan** for HTTP request logging
- **Joi** for data validation schema

## Contributing
Feel free to contribute by submitting issues and pull requests.

## License
This project is licensed under the MIT License.
