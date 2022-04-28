import './Home.css';

export default function Home() {
  return (
    <section>
      <article>
        <h3>Are you a math magician who loves math?</h3>
        <p>
          If you are someone who loves Maths, this is the place for you. This
          Web app has been creted by React
          <span> A Javascript framework </span>
          {' '}
          to bring you all the good stuff.
          Click on the Navigation Links above to browse through this
          <span> 3 page </span>
          {' '}
          Single Page Application.
        </p>
        <p>
          I know you might be wondering how can a Single Page Application have 3
          pages? Well that is the beauty or shall we say
          {' '}
          <span> Magic </span>
          {' '}
          of
          React. Click the Navigations links to go to the
          {' '}
          <span> Calculator </span>
          {' '}
          page and do some math magic or click the
          {' '}
          <span> Quotes </span>
          {' '}
          link to
        </p>
        <p>
          if you like the app, show your support by adding a star to the project
          on
          {' '}
          <a href="https://github.com/Benmuiruri/math-magician">GitHub</a>
          {' '}
          .
        </p>
      </article>
    </section>
  );
}
