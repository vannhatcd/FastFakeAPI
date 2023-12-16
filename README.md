# API Usage Guide

This API provides endpoints to perform CRUD operations on JSON files.

## How to Use

To use this API, you can send HTTP requests to the following endpoints:

<!-- ... (Other API usage instructions) -->

## Installation Guide

### Clone Source from GitHub

**Clone Source from GitHub**

   - **Clone the source code repository from your GitHub**:
    ```bash
        git clone <https://github.com/vannhatcd/FastFakeAPI.git>
        cd FastFakeAPI
        npm install
        node app.js

## How to Use

To use this API, you can send HTTP requests to the following endpoints:

### Retrieve object information from JSON file

- **Endpoint**: `GET /:type/:id`
- **Description**: Fetch information about an object from a JSON file based on `type` and `id`.
- **Example**: `/users/1` will return information about the user with ID 1.

### Retrieve data of a single user from JSON file

- **Endpoint**: `GET /users/:id`
- **Description**: Fetch data of a single user from the JSON file based on the user `id`.
- **Example**: `/users/1` will retrieve data of the user with ID 1.

### Retrieve data of a single post from JSON file

- **Endpoint**: `GET /posts/:id`
- **Description**: Fetch data of a single post from the JSON file based on the post `id`.
- **Example**: `/posts/1` will retrieve data of the post with ID 1.

### Retrieve data of a single product from JSON file

- **Endpoint**: `GET /products/:id`
- **Description**: Fetch data of a single product from the JSON file based on the product `id`.
- **Example**: `/products/1` will retrieve data of the product with ID 1.

### Add a new object to the JSON file

- **Endpoint**: `POST /:type`
- **Description**: Add a new object to the JSON file based on `type`.
- **Request data**: Data of the object to be added.
- **Example**: `/users` with user data to add a new user.

### Update object information in the JSON file

- **Endpoint**: `PUT /:type/:id`
- **Description**: Update information of an object in the JSON file based on `type` and `id`.
- **Request data**: New data of the object to be updated.
- **Example**: `/users/1` with updated user data to modify the information of the user with ID 1.

### Delete an object from the JSON file

- **Endpoint**: `DELETE /:type/:id`
- **Description**: Delete an object from the JSON file based on `type` and `id`.
- **Example**: `/users/1` to delete the user with ID 1.

## Example Product Structure

Here's an example structure for a product in `product.json`:

```json
{
  "id": 1,
  "name": "Product Name",
  "description": "Product Description",
  "price": 29.99,
  "category": "Electronics"
}
