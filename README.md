# Campus student directory

A responsive React app that displays each student's name, course name, and faculty
name in a simple table.

## Run locally

```sh
npm install
npm run dev
```

## How props are used

`App` passes each student's record to the reusable `StudentRow` component:

```jsx
<StudentRow student={student} />
```

`StudentRow` receives the record as a prop and renders its name, course, and faculty.
Update the `students` array in `src/App.jsx` to use your own student data.
