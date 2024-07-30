# React core concepts
There are three core concepts of React that you'll need to be familiar with to start building React applications. These are:

- Components
- Props
- State

## Components

User interfaces can be broken down into smaller building blocks called components.

Components allow you to build self-contained, reusable snippets of code. If you think of components as LEGO bricks, you can take these individual bricks and combine them together to form larger structures. If you need to update a piece of the UI, you can update the specific component or brick.

 React components is that they are just JavaScript.

 ### Creating a components

 A component in React is a function that returns a html tag:

 ```
function Header() {
     return (<h1>Develop. Preview. Ship.</h1>)
   }
 ```

 You can nest more components in one:

 ```
function HomePage() {
  return (
    <div>
      {/* Nesting the Header component */}
      <Header />
    </div>
  );
}
 ```

 ## Props

 Props let components have thier own variables. We can have:

```
 function Header({ title }) { // or props if we don't use object destructuring
  return <h1>title</h1>;
}
```

To use it: 

```
function HomePage() {
  return (
    <div>
      <Header title="React" />
    </div>
  );
}
```

Example of interating an array of values:

```
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## States and Event handlers

States and event handlers lets components have interactibility.

Example of a like button:

```
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button>Like</button>
    </div>
  );
}
```

To listen to the onClick event, we can use:

```
function HomePage() {
  // ...
  return (
    <div>
      {/* ... */}
      <button onClick={}>Like</button>
    </div>
  );
}
```

Adding an handler means adding the function name between {}.

To use a state, wich is an information that can change due to user's interaction, we can use:

```
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);
}
```

The first item in the array is the state value. The second item in the array is a function to update the value. You can also take the opportunity to add the initial value of your likes state to 0.

```
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);
 
  function handleClick() {
    setLikes(likes + 1);
  }
 
  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}
```

The code above will increase the likes value by 1 when the button is clicked.

## Installing everything

`npm install react@latest react-dom@latest next@latest`

The only import you need for a basic application is  useState from 'react'.
To run a dev server use 'next dev'.