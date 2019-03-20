import Link from 'next/link'
// https://jsfiddle.net/mattboldt/ovat9jmp/
import Typed from 'typed.js'

const linkStyle = {
  marginRight: 15
}

class Header extends React.Component {
  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const strings  = [
    	'Some <i>strings</i> are slanted',
      'Some <strong>strings</strong> are bold',
      'HTML characters &times; &copy;'
    ];
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: strings,
      typeSpeed: 50,
      backSpeed: 50
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div>
        <div className="wrap">
          <h1>Typed.js</h1>
          <div className="type-wrap">
            <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
            />
          </div>
          <button onClick={() => this.typed.toggle()}>Toggle</button>
          <button onClick={() => this.typed.start()}>Start</button>
          <button onClick={() => this.typed.stop()}>Stop</button>
          <button onClick={() => this.typed.reset()}>Reset</button>
          <button onClick={() => this.typed.destroy()}>Destroy</button>
          </div>
          <div>
            <Link href="/">
              <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/about">
              <a style={linkStyle}>About</a>
            </Link>
        </div>
      </div>
    );
  }
}

export default Header
