![image](https://github.com/user-attachments/assets/daf2e07d-817b-4a77-a606-28162cbd7e67)


# Delivery Management System

Demo credential

## Getting Started

This instruction will get you a copy of this project up and running on your local machine

### Prerequisites

You need [Node JS](https://nodejs.org) (v18.x.x) installed on your local machine.

### Installing ⚙️

Run the followning command to install all the packages:

```sh
npm run setup
```

#### Setup Environment Variable

Set the following environment variable to `backend` directory. Also, an example file is given with the name of `.env.example`:

```
PORT = 8000
DATABASE_URL = "mysql://root:password@localhost:3306/delivery"
JWT_SECRET = 'ANYTHING_YOU_LIKE'
BCRYPT_SALT_OR_ROUNDS = "10"
```

Set the following environment variable to `frontend` directory. Also, an example file is given with the name of `.env.example`:

```
SESSION_SECRET = "dearMj"
API_BASE_URL = "http://localhost:8000"
```

### Database Migration 💿

Run the followning command to migrate the prisma schema:

```sh
npm run prisma:migrate
```

You only have to run this for only one time at the beginning of project setup

#### Seed Database 🌱

Run the following command to seed your database with some preset dataset. It includes delivery area info (Division, Districs, Areas), Delivery zones, Parcel pricing (for 0.5KG, 1KG, 2KG, 3KG, 4KG, 5KG), Parcel products categories, Shop products categories, a default user and admin, etc.

```sh
cd backend
npm run seed
```

#### Run 🏃🏻‍♂️

By this command your app and server will be run concurrently

```sh
npm start
```

An server will be run at http://localhost:8000 <br/>
And frontend server will be run at http://localhost:3000

## Screenshots


![image](https://github.com/user-attachments/assets/57dc775d-6b43-4d62-bb8e-1534d32a72b8)

![image](https://github.com/user-attachments/assets/4d2a9993-d16f-4ca3-9cfd-7a6d0e5e8e94)

![image](https://github.com/user-attachments/assets/11fb4f91-9b7a-4b1b-8caf-9d87e254bc64)

![image](https://github.com/user-attachments/assets/e8335b31-0633-486f-a36d-f0ad7c5ddeae)


![image](https://github.com/user-attachments/assets/2d107dee-8e90-468d-b692-8d44092a81ae)

![image](https://github.com/user-attachments/assets/86c78014-036b-4d11-92e2-10b67459247a)

![image](https://github.com/user-attachments/assets/2071287c-1802-450e-979a-ae67355acf35)

![image](https://github.com/user-attachments/assets/2edf81e3-8f37-4108-9642-4a36c5d8a67d)


## Built With 🏗️👷🏻

-   [NodeJs](https://nodejs.org/en/) - Node.js® is an open-source, cross-platform JavaScript runtime environment.
-   [NestJs](https://nestjs.com/) - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
-   [Prisma](https://nestjs.com/) - Next-generation Node.js and TypeScript ORM
-   [Remix](https://remix.run/) - Remix is a full stack web framework
-   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes
-   [Chakra UI](https://chakra-ui.com/) - Chakra UI is a simple, modular and accessible component library


## Authors

-   **Md Maruf Ahmed** - _Software Engineer_
