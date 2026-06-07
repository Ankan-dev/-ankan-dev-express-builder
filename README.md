# Express-Builder

A modern CLI tool to quickly scaffold Express.js applications with TypeScript or JavaScript support, complete with MongoDB and MySQL integration, utility helpers, and production-ready project structure.

## Features

✨ **Quick Setup** - Create a fully configured Express app in seconds
🎯 **Multiple Language Support** - Choose between JavaScript or TypeScript
📦 **Flexible Package Managers** - Support for npm, yarn, and pnpm
🗄️ **MongoDB Integration** - Optional pre-configured MongoDB setup with Mongoose
🗄️ **MySQL Integration** - Optional pre-configured MySQL setup with Drizzle ORM
🏗️ **Production-Ready Structure** - Best practices folder organization
🛠️ **Utility Helpers** - Built-in error handling, logging, async handlers, and response formatting
🚀 **Development Ready** - Dev and production scripts pre-configured

## Installation

Install globally via npm:

```bash
npm install -g @ankan-dev/express-builder
```

Or use directly with npx:

```bash
npx @ankan-dev/create-express-app my-app
```

## Quick Start

### Using npx (Recommended - No Installation Required)

```bash
npx @ankan-dev/create-express-app my-app
cd my-app
npm run dev
```

### Using Global Installation

```bash
@ankan-dev/create-express-app my-app
cd my-app
npm run dev
```

### Create App in Current Directory

```bash
npx @ankan-dev/create-express-app .
```

## Setup Wizard

After running the command, you'll be prompted with interactive questions:

### 1. **Select Language**
```
? Select your language:
  ❯ Javascript
    Typescript
```

### 2. **Select Package Manager**
```
? Select Your Package manager:
  ❯ NPM
    YARN
    PNPM
```

### 3. **Setup Database (Optional)**
```
? Do you want to setup a database with your project?
  ❯ Yes
    No
```

### 4. **Select Database** (If database setup selected)
```
? Select your database:
  ❯ MongoDB
    MySQL
```

## Generated Project Structure

### JavaScript Project
```
my-app/
├── src/
│   ├── index.js                 # Application entry point
│   ├── app/
│   │   └── app.js               # Express app configuration
│   ├── config/                  # Configuration files
│   ├── controllers/             # Route controllers
│   ├── middlewares/             # Custom middleware
│   ├── repository/              # Database repository layer
│   ├── routes/                  # API routes
│   ├── services/                # Business logic
│   ├── models/                  # Database models (MongoDB only)
│   ├── Schema/                  # Database table definitions (MySQL only)
│   └── utils/
│       ├── Asynchandler.js      # Async error wrapper
│       ├── Errorhandler.js      # Error handling utility
│       ├── Logger.js            # Logging utility
│       └── Responsehandler.js   # Standard response formatter
├── drizzle/                     # Migration files (MySQL only)
├── drizzle.config.js            # Drizzle ORM config (MySQL only)
├── .env.example                 # Environment variables template
├── package.json
└── .gitignore
```

### TypeScript Project
```
my-app/
├── src/
│   ├── index.ts                 # Application entry point
│   ├── app/
│   │   └── app.ts               # Express app configuration
│   ├── config/
│   │   └── dbConfig.ts          # Database config (MongoDB or MySQL)
│   ├── controllers/             # Route controllers
│   ├── middlewares/             # Custom middleware
│   ├── repository/              # Database repository layer
│   ├── routes/                  # API routes
│   ├── services/                # Business logic
│   ├── models/                  # Database models (MongoDB only)
│   ├── Schema/                  # Database table definitions (MySQL only)
│   └── utils/
│       ├── Asynchandler.ts      # Async error wrapper
│       ├── Errorhandler.ts      # Error handling utility
│       ├── Logger.ts            # Logging utility
│       └── Responsehandler.ts   # Standard response formatter
├── drizzle/                     # Migration files (MySQL only)
├── dist/                        # Compiled JavaScript output
├── drizzle.config.ts            # Drizzle ORM config (MySQL only)
├── tsconfig.json
├── .env.example                 # Environment variables template
├── package.json
└── .gitignore
```

## Available Scripts

### JavaScript Project

**Development**
```bash
npm run dev   # Run with hot reload (node --watch)
```

**Production**
```bash
npm start     # Run compiled application
```

**Database Migrations (MySQL with Drizzle)**
```bash
npm run db:generate # Generate new migrations from schema changes
npm run db:migrate  # Apply pending migrations to the database
npm run db:push     # Push schema changes directly to database (no migration files)
npm run db:studio   # Open Drizzle Studio to visualize and manage your database
```

### TypeScript Project

**Development**
```bash
npm run dev   # Run with hot reload using tsx
```

**Build**
```bash
npm run build # Compile TypeScript to JavaScript
```

**Production**
```bash
npm start     # Run compiled application
```

**Database Migrations (MySQL with Drizzle)**
```bash
npm run db:generate # Generate new migrations from schema changes
npm run db:migrate  # Apply pending migrations to the database
npm run db:push     # Push schema changes directly to database (no migration files)
npm run db:studio   # Open Drizzle Studio to visualize and manage your database
```

## Environment Variables

Create a `.env` file in your project root (copy from `.env.example`):

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# MongoDB Configuration (if MongoDB is set up)
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB_NAME=your-database-name

# MySQL Configuration (if MySQL is set up)
DATABASE_URL=mysql://username:password@localhost:3306/database_name
```

### Environment Variable Details

#### Server Configuration
- **PORT** - Server port (default: 3000)
- **NODE_ENV** - Environment mode (`development`, `production`, `staging`)

#### MongoDB Configuration (if selected)
- **MONGODB_URI** - MongoDB connection string (e.g., `mongodb://localhost:27017`)
- **MONGODB_DB_NAME** - MongoDB database name (e.g., `my-app`)

#### MySQL Configuration (if selected)
- **DATABASE_URL** - Complete MySQL connection URL in format: `mysql://username:password@host:port/database_name`
  - Example: `mysql://root:mypassword@localhost:3306/my_app_db`

## Project Details

### Dependencies by Template

#### Both JavaScript & TypeScript
- **express** (^5.2.1) - Web framework
- **cors** (^2.8.6) - Cross-Origin Resource Sharing
- **cookie-parser** (^1.4.7) - Cookie parsing middleware
- **dotenv** (^17.4.2) - Environment variable management
- **chalk** (^5.6.2) - Terminal string styling

#### TypeScript Only (Dev Dependencies)
- **tsx** (^4.22.4) - TypeScript execution and watch mode
- **typescript** (^6.0.3) - TypeScript compiler
- **@types/express** - Type definitions for Express
- **@types/node** - Type definitions for Node.js
- **@types/cors** - Type definitions for CORS
- **@types/cookie-parser** - Type definitions for Cookie Parser

#### MongoDB (Optional)
- **mongoose** - MongoDB ODM library

#### MySQL with Drizzle (Optional)
- **drizzle-orm** - SQL query builder and ORM
- **mysql2** - MySQL database driver
- **drizzle-kit** (Dev) - Migration and schema management tool

### Utility Helpers

#### 1. **Asynchandler** - Async Error Wrapper
Wraps async route handlers to automatically catch errors:
```javascript
// Example usage
import asyncHandler from './utils/Asynchandler';

router.get('/users', asyncHandler(async (req, res) => {
    const users = await User.find();
    res.json(users);
}));
```

#### 2. **Errorhandler** - Global Error Handler
Centralized error handling for consistent error responses.

#### 3. **Logger** - Logging Utility
Structured logging with different levels (info, warn, error, debug).

#### 4. **Responsehandler** - Standard Response Formatter
Standardized API response formatting for consistency across your application.

## MongoDB Setup Details

If you choose to set up MongoDB during initialization:

### What Gets Added:
1. **mongoose** package installation
2. **dbConfig** file in `src/config/` - MongoDB connection configuration
3. **models** directory with sample models
4. **Updated app.ts/app.js** - Database connection initialization

### Environment Variables for MongoDB:
```env
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB_NAME=my-app
```

**Note:** The database name is specified separately from the connection URI for better configuration management.

### Using MongoDB Models:
```typescript
// Example in TypeScript
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.model('User', userSchema);
```

## MySQL Setup Details

If you choose to set up MySQL with Drizzle ORM during initialization:

### What Gets Added:
1. **drizzle-orm** and **mysql2** package installation
2. **drizzle-kit** (Dev dependency) for schema management
3. **dbConfig** file in `src/config/` - MySQL connection configuration
4. **drizzle.config** file in project root - Drizzle ORM configuration
5. **Updated app.ts/app.js** - Database connection initialization
6. **Schema files** in `src/Schema/` - Database table definitions

### Database Migration Commands

The CLI automatically adds the following commands to your `package.json`:

#### `npm run db:generate`
Generates SQL migration files based on changes you make to your schema files.
```bash
npm run db:generate
```
This creates migration files in your migrations directory that you can review before applying.

#### `npm run db:migrate`
Applies pending migration files to your database.
```bash
npm run db:migrate
```
Use this in development and production to keep your database schema in sync.

#### `npm run db:push`
Pushes schema changes directly to the database without creating migration files.
```bash
npm run db:push
```
Useful for development when you want to quickly test schema changes without managing migration files.

#### `npm run db:studio`
Opens Drizzle Studio, a visual database management interface.
```bash
npm run db:studio
```
Perfect for browsing data, running queries, and managing your database without using external tools.

### Environment Variables for MySQL:
```env
DATABASE_URL=mysql://root:your_password@localhost:3306/my-app
```

**Format Guide:**
- Replace `root` with your MySQL username
- Replace `your_password` with your MySQL password
- Replace `localhost` with your MySQL host
- Replace `3306` with your MySQL port if different
- Replace `my-app` with your actual database name

### Using MySQL with Drizzle ORM:
```typescript
// Example in TypeScript
import { sql } from 'drizzle-orm';
import { mysqlTable, varchar, int, timestamp } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
    id: int().primaryKey().autoincrement(),
    name: varchar({ length: 255 }),
    email: varchar({ length: 255 }).unique(),
    createdAt: timestamp().defaultNow()
});
```

### Migration Workflow:

1. **Define your schema** in `src/Schema/` files
2. **Generate migration** - Run `npm run db:generate` to create migration files
3. **Review migrations** - Check the generated SQL files in the migrations folder
4. **Apply migrations** - Run `npm run db:migrate` to apply to your database
5. **Repeat** - Make schema changes, generate, and migrate as your app evolves

Alternatively, for rapid development, use `npm run db:push` to sync schema directly without creating migrations.

## Project Architecture

The generated project follows a structured architecture:

- **routes** - API endpoint definitions
- **controllers** - Request handling logic
- **services** - Business logic layer
- **repository** - Database access layer
- **models** - Data schema definitions
- **middlewares** - Custom Express middleware
- **config** - Configuration files
- **utils** - Reusable utility functions

This layered architecture promotes:
- ✅ Code reusability
- ✅ Easy testing
- ✅ Clear separation of concerns
- ✅ Maintainability and scalability

## Getting Started After Creation

1. **Install dependencies** (automatically done during setup)
   ```bash
   npm install
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Create your first route**
   - Add a new file in `src/routes/`
   - Create a controller in `src/controllers/`
   - Register the route in `src/app/app.ts` or `src/app/app.js`

5. **Build for production** (TypeScript only)
   ```bash
   npm run build
   npm start
   ```

## Using Different Package Managers

### NPM
```bash
npm install
npm run dev
```

### Yarn
```bash
yarn install
yarn dev
```

### PNPM
```bash
pnpm install
pnpm dev
```

## Supported Node Versions

- Node.js 16.x or higher
- Node.js 18.x (Recommended)
- Node.js 20.x (Latest LTS)

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or provide correct `MONGODB_URI` in `.env`
- Check connectivity with: `mongosh`

### Port Already in Use
Change the `PORT` environment variable:
```bash
PORT=3001 npm run dev
```

### TypeScript Compilation Errors
Run the TypeScript compiler to check for errors:
```bash
npm run build
```

### Module Not Found
Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Version Information

- **Latest Version**: 1.2.0
- **Package Name**: @ankan-dev/express-builder
- **CLI Command**: @ankan-dev/create-express-app

## Current Status & Future Plans

### Currently Supported
- ✅ **MongoDB** with Mongoose ORM
- ✅ **MySQL** with Drizzle ORM

### Upcoming Integrations
We're actively working on expanding database and ORM support. Future versions will include:
- 🔜 PostgreSQL with Drizzle ORM
- 🔜 PostgreSQL with Prisma ORM
- 🔜 PostgreSQL with TypeORM
- 🔜 MySQL with Sequelize ORM
- 🔜 SQLite for lightweight projects
- 🔜 Firebase/Firestore integration

Stay tuned for more database and ORM options in upcoming releases!

## Author

Ankan Dev

## Repository

GitHub: [https://github.com/Ankan-dev/-ankan-dev-express-builder](https://github.com/Ankan-dev/-ankan-dev-express-builder)

---

**Happy coding! 🚀**

For issues or feature requests, please visit the [GitHub repository](https://github.com/Ankan-dev/-ankan-dev-express-builder) or contact the maintainer.
