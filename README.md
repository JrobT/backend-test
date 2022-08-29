# Backend test

## ACs

What we've testing for:

- Can we add a new todo?
  - Yes.
- Can we update a todo to "completed"?
  - Yes.
- Are there sensible tests written in the API?
  - I've added unit tests for the API endpoints. Jest is reporting good coverage. I expand on what else I would do below.
- Do the CRUD actions work correctly, including updating the database?
  - Yes.

✨ Bonus Round ✨

- How would you implement a tag system for the todos? i.e. if each Todo could have multiple tags? How would this effect your database architecture?
  - I'd need to have a separate DB table schema for a 'tag' and probably a third table to allow for the many-to-many relationship. Once that's done I could alter the queries to produce a joined up response i.e. return all tags for a ToDo.
- How would you implement infinite scrolling or pagination in this app? Please write a comment
  - There's probably a load of third-party libraries for this but I think you can create a custom hook in React which uses `useEffect` or similar to call the 'GET' API endpoint. This call would probably have to have some sort of pagination option via SWR. With the results you would then produce your list. As for when this call would be made, you'd need to based it off of some Maths or whether an particular element is hit.
- Do you have any ideas on how you would improve the app? Please write a comment
  - I've used ORMs before (mainly QuerySet etc. from Django) but I haven't used Prisma before. I mocked it for the unit tests to avoid interacting with the DB. I would like to add more tests which also include coverage of the queries, such as E2E tests.
  - There's a general lack of error handling across the board. I'd implement some responses from the backend that are returned for errors and then in the frontend I would probably look to implement some popups to describe the error which occurred.
  - Probably more of a preference but I'd rather use the 'PUT' for updating the text of a ToDo and call 'DELETE' when the ToDo 'card' is clicked on (so completing = delete).
  - Adding features like sorting columns of ToDos.
- How would you add the functionality to delete todos? Please write a comment or ideally, implement the feature
  - I've added a small cross button to each ToDo which calls the delete endpoint when clicked.

## Setup

### Postgres

MACOS install:

```shell
brew install postgresql
brew install --cask pgadmin4
brew services start postgresql
psql postgres
```

Create role:

```sql
CREATE ROLE jackt WITH LOGIN PASSWORD 'test';
ALTER ROLE jackt CREATEDB;
```

Migrate:

```shell
npm i
npx prisma migrate dev --name init
```

Test:

```sql
INSERT INTO "ToDo" (title, completed) VALUES ('This is a test TODO', false);
```

Result:

```sql
todo=> SELECT * FROM "ToDo";
id |        title        | completed
----+---------------------+-----------
1 | This is a test TODO | f
(1 row)
```

### Backend

#### `.env`

```shell
API_PORT=3001
DATABASE_URL="postgresql://jackt:test@localhost:5432/todo?schema=public"
FRONTEND_URL="http://localhost:3000"
```

#### Run Backend

```shell
cd backend
npm i
npm run serve
```

Navigate to `localhost:3001/todo`.

### Frontend

#### Run Frontend

```shell
cd frontend
npm i
npm run dev
```

Navigate to `localhost:3000`.

### Run together

```shell
npm i
npm run start
```

Navigate to `localhost:3000`.
