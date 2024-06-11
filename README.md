Sure! Here's a concise version of the README file:

---

# IMDb Clone

An IMDb clone built using Node.js, Express.js, and MongoDB, featuring pagination and search functionality.

## Features

- Movie listing with pagination
- Detailed movie pages
- Search functionality
- RESTful API

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **ORM**: Mongoose

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/yourusername/imdb-clone.git
   cd imdb-clone
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up MongoDB**

   Ensure MongoDB is running. Use a local instance or MongoDB Atlas.

4. **Environment variables**

   Create a `.env` file:

   ```env
   PORT=8000
   MONGODB_URI=mongodb://localhost:27017/imdb-clone
   ```

5. **Start the server**

   ```sh
   nodemon server.js
   ```

## Usage

- **Development server with hot reloading**: `nodemon server.js`
- **Access the app**: `http://localhost:8000`

## API Endpoints

- **Movies**: `GET /api/movies` (with pagination)
- **Search**: `GET /api/movies?search=movie_title`

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
