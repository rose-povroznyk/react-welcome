// class HeaderComponent extends React.Component {
//   anotherMethod() {}
//   render() {
//     //обовязковий метод!!!
//     console.log(this.props);
//     const p = React.createElement('p', {}, 'Super paragraph');
//     const h2 = React.createElement(
//       'h2',
//       { title: 'i am h2' },
//       `Hello ${this.props.name}`
//     );
//     const article = React.createElement('article', {}, h2, p);
//     console.log(article);
//     return article;
//   }
// }

// class GreetingComponent extends React.Component {
//   anotherMethod() {}
//   render() {
//     //обовязковий метод!!!
//     console.log(this.props);

//     const h1 = React.createElement(
//       'h1',
//       { title: 'i am h1' },
//       `Hello ${this.props.name}`
//     );

//     return h1;
//   }
// }

// const component = React.createElement(
//   HeaderComponent,
//   { name: 'John' },
//   'text JOhn'
// );
// const component2 = React.createElement(
//   HeaderComponent,
//   { name: 'Oleg' },
//   'text Oleg'
// );
// const newComponent = React.createElement(GreetingComponent, { name: 'Ivo' });

// const parentElement = React.createElement(
//   'section',
//   {},
//   component,
//   component2,
//   newComponent
// );

const root = document.querySelector('#root');

// // const h1 = React.createElement('h1', {}, 'Hello React');
// ReactDOM.render(parentElement, root);

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 1,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + this.state.step,
    });
  }

  decrement() {
    if (this.state.count - this.state.step > 0) {
      this.setState({
        count: this.state.count - this.state.step,
      });
    } else {
      alert('oooh');
    }
  }

  incementStep(step) {
    this.setState({
      count: this.state.count + step,
    });
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    const h2 = React.createElement(
      'h2',
      {},
      `Value of counter: ${this.state.count}`
    );

    const h2step = React.createElement(
      'h2',
      {},
      `Value of step: ${this.state.step}`
    );
    const button = React.createElement(
      'button',
      {
        onClick: () => {
          this.increment();
        },
      },
      '+'
    );

    const buttonMin = React.createElement(
      'button',
      {
        onClick: () => {
          this.decrement();
        },
      },
      '-'
    );

    const buttonStep = React.createElement(
      'button',
      {
        onClick: () => {
          this.incementStep(1000);
        },
      },
      'step'
    );

    const buttonRes = React.createElement(
      'button',
      {
        onClick: () => {
          this.reset();
        },
      },
      'reset'
    );

    const buttonPr = React.createElement(
      'button',
      {
        onClick: () => {
          // prompt('Enter new value of step')
          //   console.log();
          this.setState({
            step: Number(prompt('Enter new value of step')),
          });
        },
      },
      'prompt'
    );

    const parEl = React.createElement(
      React.Fragment,
      {},
      h2,
      h2step,
      button,
      buttonMin,
      buttonStep,
      buttonRes,
      buttonPr
    );
    return parEl;
  }
}

const counter = React.createElement(Counter);

ReactDOM.render(counter, root);
