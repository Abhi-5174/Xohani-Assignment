# Xohani-Assignment

## Deployed link [Click me 😊](https://xohani-assignment.onrender.com)

## Note
The api are encripted with and Authorization custom middleware so you need to pass Berear token in headers.

- required: 
    ```json
    {
        "headers": "authorization", "Bearer dummy_auth"
    }
    ```

## Endpoints

1. GET "/"

- response:
    ```json
    Welcome to the home route.
    ```

2. POST "/auth/login"
- Generating jwt token if user's credentails is correct and saving it in the cookie and sending message.

- required:
    email, password

- response:
    ```json
    { "message": "User can login successfully." }
    ```

3. POST "/auth/signup"
- Hashing user's password and saving it in mongodb also generating jwt token and rending response.

- required:
    fullName, email, password

- response:
    ```json
    { "message": "User created successfully.", "data", "token" }
    ```

4. GET "/users/profile"
- Sending user's details leaving password.

- required:
    userId

- response:
    ```json
    { "_id": "mongoose.ObjectID", "fullName": "Username", "email", "webinars"_ }
    ```

5. POST "/webinars/add"
- Saving webinar's data in mongodb and also adding the webinar's id to user's data and video uploading is not added yet.

- required:
    {
      title,
      short_description,
      description,
      enrollment_date,
      price,
      status,
      userId,
    }

- response:
    ```json
    { "message": "Webinar created successfully.", "data" }
    ```

6. GET "/webinars"
- Get all webinars with added full support of searching pagination and sorting. Serving 10 items by default.

- required:
    {
      title,
      short_description,
      description,
      enrollment_date,
      price,
      status,
      userId,
    }

- response:
    ```json
    { "message": "Webinar created successfully.", "data" }
    ```

7. PUT "/webinars//update/:webinarId"
- Added updating route for webinar.

- required:
    {
     webinarId
    }

- response:
    ```json
    {
      "message": "Webinar updated.",
      "data"
    }
    ```

8. DELETE "/webinars//update/:webinarId"
- Added updating route for webinar.

- required:
    {
     webinarId
    }

- response:
    ```json
    {
      "message": "Webinar deleted.",
      "data"
    }
    ```
