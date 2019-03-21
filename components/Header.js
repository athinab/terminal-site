import Link from 'next/link'
// https://jsfiddle.net/mattboldt/ovat9jmp/
import Typed from 'typed.js'


class Header extends React.Component {
  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const strings  = [
    	// 'Some <i>strings</i> are slanted',
      // 'Some <strong>strings</strong> are bold',
      // 'HTML characters &times; &copy;'
      'Welcome, my friend...',
      'It is nice to see you again! :)',
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
        <div style={styles.terminal}>
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
          <div style={styles.navigationMenu}>
            <Link href="/">
              <a style={styles.link}>Home</a>
            </Link>
            <Link href="/about">
              <a style={styles.link}>About</a>
            </Link>
        </div>
      </div>
    );
  }
}
const styles = {
  link: {
    marginRight: 15,
  },
  navigationMenu: {
    margin: 10,
  },
  terminal: {
    margin: 'auto',
    backgroundColor: 'black',
    // color: '#4AF626',
    color: 'white',
    width: 600,
    height: 300,
    padding: 10,
    fontFamily: 'Courier,Monaco,monospace',
    // fontWeight: 'normal',
    webkitFontSmoothing: 'antialiased',
    mozOsxFontSmoothing: 'grayscale',
    // display: 'flex',
    // justifyContent: 'center',
  }
}
const linkStyle = {
  marginRight: 15
};
export default Header
