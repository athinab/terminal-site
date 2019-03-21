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
      ':O^600',
      'Someone\'s here!^600',
      'Welcome, our friend...^1000\nIt is nice to see you again! :)',
    ];
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: strings,
      typeSpeed: 80,
      backSpeed: 60
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
          <div className="type-wrap" style={styles.textWrap}>
            <span
            style={{
              whiteSpace: 'pre',
              lineHeight: '1.5em',
            }}
            ref={(el) => { this.el = el; }}
            />
          </div>
          <div style={styles.btnsContainer}>
            <button style={styles.btn} onClick={() => this.typed.toggle()}>Toggle</button>
            <button style={styles.btn} onClick={() => this.typed.start()}>Start</button>
            <button style={styles.btn} onClick={() => this.typed.stop()}>Stop</button>
            <button style={styles.btn} onClick={() => this.typed.reset()}>Reset</button>
            <button style={styles.btn} onClick={() => this.typed.destroy()}>Destroy</button>
          </div>
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
  btnsContainer: {
    display: 'block',
    // textAlign: 'center',
  },
  btn: {
    color: '#2471ec',
    fontWeight: 'bold',
  },
  navigationMenu: {
    margin: 10,
  },
  textWrap: {
    textAlign: 'center',
    selfAlign: 'center',
  },
  terminal: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    backgroundColor: '#000000db' ,
    // color: '#4AF626',
    color: 'white',
    width: 600,
    height: 200,
    padding: 40,
    paddingTop: 100,
    fontFamily: 'Courier,Monaco,monospace',
    webkitFontSmoothing: 'antialiased',
    mozOsxFontSmoothing: 'grayscale',
    fontSize: '22px',
  }
}
const linkStyle = {
  marginRight: 15
};
export default Header
