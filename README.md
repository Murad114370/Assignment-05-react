Absolutely. I’ll keep your **original information and answers**, but clean up the Markdown structure, grammar, spacing, headings, and code formatting so it is ready to use as a `README.md`.

# Project Name: An Ideal Development Stack Build

## 📌 Description

In this **DevStack** project, I learned and practiced several important React and TypeScript concepts, including:

* Fetching data from a database
* Creating and handling a Promise
* Passing a Promise through props
* Declaring types for data using TypeScript
* Passing Promise data to the React `use` hook
* Using `.map()` to display data
* Creating a navigation bar
* Creating a banner section
* Creating the main section with:

  * Technology cards
  * Stacking list
* Creating a footer component
* Props lifting
* Passing objects to the stacking list
* Handling **Remove All**
* Removing individual technologies
* Preventing duplicate technologies from being selected

---

## 🛠️ Technologies That I Used

1. TypeScript
2. React
3. Tailwind CSS
4. Vite
5. React Hot Toast

---

## ✨ 3 Features of My Project

### 1. Mobile Responsiveness

The navigation bar and technology card section are responsive for mobile devices.

### 2. Sticky Navigation Bar

The navigation bar stays sticky while scrolling through the page.

### 3. Toast Notification

When the **Add to Stack** button is clicked, a toast notification appears on the right side of the screen.

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a combination of **JavaScript and HTML-like syntax**. It is a syntax extension for JavaScript.

JSX makes React components easier to **read, write, and maintain** because we can write UI structure directly inside JavaScript code.

---

## 2. What is the difference between props and state?

### Props

Props are used to pass data or information from a **parent component to a child component**.

### State

State stores the data of a component and allows the component to **manage and update its own data**.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook that stores data in a component that can change over time.

When the state changes, React **re-renders the component** and displays the updated value.

I used the `useState` React Hook in my `App.tsx` file to manage the state of my project.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook that is commonly used when a component needs to perform a **side effect**, such as fetching data from an API, working with external systems, or responding to changes.

I did **not** use the `useEffect` hook in this project to load the JSON data.

Instead, I used the React `use` hook:

```tsx
const technologies = use(technologiesPromise);
```

The `use` hook allows me to read the value of the Promise and use the technology data inside my component.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify which items in a list have been **added, removed, or changed** when the list is updated.

In my project, I used `technology.id` as the unique `key` for each technology card.

Example:

```tsx
{technologies.map((technology) => (
  <TechnologiesCard
    key={technology.id}
    technology={technology}
  />
))}
```

---

## 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means showing different UI depending on a condition.

In my project, I used conditional rendering to show either the selected technologies or an empty-stack message.

```tsx
{technologies.length > 0 ? (
  <div className="space-y-3 mt-4">
    {technologies.map((item) => (
      <div
        key={item.id}
        className="flex items-center justify-between border border-slate-200 rounded-xl p-3"
      >
        <div className="flex items-center gap-3">
          <img
            src={item.icon}
            alt={item.name}
            className="w-10 h-10 object-contain"
          />

          <div>
            <h3 className="font-semibold">
              {item.name}
            </h3>

            <p className="text-xs text-slate-400">
              {item.category}
            </p>
          </div>
        </div>

        <button
          onClick={() => handleRemoveTechnology(item.id)}
          className="btn btn-ghost btn-sm text-xl"
        >
          ✕
        </button>
      </div>
    ))}

    <button
      type="button"
      disabled={technologies.length === 0}
      onClick={handleClearAll}
      className="btn btn-outline btn-error w-full mt-5"
    >
      Remove All
    </button>
  </div>
) : (
  <div>
    <p className="text-slate-400 mt-2">
      No technologies selected yet.
    </p>

    <div className="border-2 border-dashed border-slate-200 rounded-2xl py-10 mt-3 text-center">
      <p className="text-slate-400">
        Your stack is empty.
      </p>
    </div>
  </div>
)}
```

Here:

* If `technologies.length > 0`, the selected technologies are displayed.
* Otherwise, the **"Your stack is empty"** message is displayed.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

In React, a parent component passes data to a child component through **props**.

To communicate from a child back to the parent, the parent passes a **callback function** as a prop. The child then calls that function with the required data.

In my project:

* `App.tsx` passes `handleSavedTechnology` to the technology components.
* The child component calls `handleSavedTechnology` when the user clicks **Add to Stack**.
* This allows the parent component to update the selected technology list.

This is commonly called **lifting state up**.


