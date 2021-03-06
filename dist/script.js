const req = new XMLHttpRequest();
req.open(
"GET",

"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-1-10&api_key=KCwSSHMdpokgwzm9meKCY9ItKT5wMk5znPzYMXIA",

true);


req.send();
req.onload = function () {
  const json = JSON.parse(req.responseText);


  console.log(json.photos[0].earth_date);



  document.getElementById("img1").setAttribute("src", json.photos[0].img_src);
  document.getElementById("heading1").innerText = json.photos[0].rover.name + "  Rover";
  document.getElementById("body1").innerText = json.photos[0].earth_date;


  document.getElementById("img2").setAttribute("src", json.photos[2].img_src);
  document.getElementById("heading2").innerText = json.photos[2].rover.name + "  Rover";
  document.getElementById("body2").innerText = json.photos[2].earth_date;


  document.getElementById("img3").setAttribute("src", json.photos[4].img_src);
  document.getElementById("heading3").innerText = json.photos[4].rover.name + "  Rover";
  document.getElementById("body3").innerText = json.photos[4].earth_date;


  document.getElementById("img4").setAttribute("src", json.photos[5].img_src);
  document.getElementById("heading4").innerText = json.photos[5].rover.name + "  Rover";
  document.getElementById("body4").innerText = json.photos[5].earth_date;



  document.getElementById("img5").setAttribute("src", json.photos[13].img_src);
  document.getElementById("heading5").innerText = json.photos[13].rover.name + "  Rover";
  document.getElementById("body5").innerText = json.photos[13].earth_date;



  document.getElementById("img6").setAttribute("src", json.photos[21].img_src);
  document.getElementById("heading6").innerText = json.photos[21].rover.name + "  Rover";
  document.getElementById("body6").innerText = json.photos[21].earth_date;

};



const req1 = new XMLHttpRequest();
req1.open(
"GET",

"https://api.nasa.gov/planetary/apod?api_key=KCwSSHMdpokgwzm9meKCY9ItKT5wMk5znPzYMXIA",

true);


req1.send();
req1.onload = function () {
  const json1 = JSON.parse(req1.responseText);


  console.log(json1.title);



  document.getElementById("img0").setAttribute("src", json1.url);
  document.getElementById("img0").setAttribute("alt", json1.title);
  document.getElementById("heading0").innerText = json1.date + " - " + json1.title;
  document.getElementById("body0").innerText = json1.explanation;





};



const req2 = new XMLHttpRequest();
req2.open(
"GET",

"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-1-9&api_key=KCwSSHMdpokgwzm9meKCY9ItKT5wMk5znPzYMXIA",

true);


req2.send();
req2.onload = function () {
  const json2 = JSON.parse(req2.responseText);


  document.getElementById("img7").setAttribute("src", json2.photos[1].img_src);
  document.getElementById("heading7").innerText = json2.photos[1].rover.name + "  Rover";
  document.getElementById("body7").innerText = json2.photos[1].earth_date;


  document.getElementById("img8").setAttribute("src", json2.photos[2].img_src);
  document.getElementById("heading8").innerText = json2.photos[2].rover.name + "  Rover";
  document.getElementById("body8").innerText = json2.photos[2].earth_date;

};



class Button0 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: "Like" };

    this.change = this.change.bind(this);
  }
  change() {
    if (this.state.button === "Like") {
      this.setState({
        button: "Unlike" });

    } else
    if (this.state.button === "Unlike") {
      this.setState({
        button: "Like" });

    }
  }
  render() {
    if (this.state.button === "Like") {
      $("#heart0").css("display", "none");

    } else
    {
      $("#heart0").css("display", "");
      document.getElementById("heart0").setAttribute("class", "heart fas fa-heart animate__animated animate__heartBeat");
    }

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "btn btn-dark", onClick: this.change }, this.state.button), /*#__PURE__*/
      React.createElement("i", { id: "heart0" })));


  }}
;


class Button1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: "Like" };

    this.change = this.change.bind(this);
  }
  change() {
    if (this.state.button === "Like") {
      this.setState({
        button: "Unlike" });

    } else
    if (this.state.button === "Unlike") {
      this.setState({
        button: "Like" });

    }
  }
  render() {
    if (this.state.button === "Like") {
      $("#heart1").css("display", "none");

    } else
    {
      $("#heart1").css("display", "");
      document.getElementById("heart1").setAttribute("class", " heart fas fa-heart animate__animated animate__heartBeat");
    }

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "btn btn-dark", onClick: this.change }, this.state.button), /*#__PURE__*/
      React.createElement("i", { id: "heart1" })));


  }}
;

class Button2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: "Like" };

    this.change = this.change.bind(this);
  }
  change() {
    if (this.state.button === "Like") {
      this.setState({
        button: "Unlike" });

    } else
    if (this.state.button === "Unlike") {
      this.setState({
        button: "Like" });

    }
  }
  render() {
    if (this.state.button === "Like") {
      $("#heart2").css("display", "none");

    } else
    {
      $("#heart2").css("display", "");
      document.getElementById("heart2").setAttribute("class", " heart fas fa-heart animate__animated animate__heartBeat");
    }

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "btn btn-dark", onClick: this.change }, this.state.button), /*#__PURE__*/
      React.createElement("i", { id: "heart2" })));


  }}
;

class Button3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: "Like" };

    this.change = this.change.bind(this);
  }
  change() {
    if (this.state.button === "Like") {
      this.setState({
        button: "Unlike" });

    } else
    if (this.state.button === "Unlike") {
      this.setState({
        button: "Like" });

    }
  }
  render() {
    if (this.state.button === "Like") {
      $("#heart3").css("display", "none");

    } else
    {
      $("#heart3").css("display", "");
      document.getElementById("heart3").setAttribute("class", " heart fas fa-heart animate__animated animate__heartBeat");
    }

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "btn btn-dark", onClick: this.change }, this.state.button), /*#__PURE__*/
      React.createElement("i", { id: "heart3" })));


  }}
;

class Button4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: "Like" };

    this.change = this.change.bind(this);
  }
  change() {
    if (this.state.button === "Like") {
      this.setState({
        button: "Unlike" });

    } else
    if (this.state.button === "Unlike") {
      this.setState({
        button: "Like" });

    }
  }
  render() {
    if (this.state.button === "Like") {
      $("#heart4").css("display", "none");

    } else
    {
      $("#heart4").css("display", "");
      document.getElementById("heart4").setAttribute("class", " heart fas fa-heart animate__animated animate__heartBeat");
    }

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "btn btn-dark", onClick: this.change }, this.state.button), /*#__PURE__*/
      React.createElement("i", { id: "heart4" })));


  }}
;


class Button5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: "Like" };

    this.change = this.change.bind(this);
  }
  change() {
    if (this.state.button === "Like") {
      this.setState({
        button: "Unlike" });

    } else
    if (this.state.button === "Unlike") {
      this.setState({
        button: "Like" });

    }
  }
  render() {
    if (this.state.button === "Like") {
      $("#heart5").css("display", "none");

    } else
    {
      $("#heart5").css("display", "");
      document.getElementById("heart5").setAttribute("class", " heart fas fa-heart animate__animated animate__heartBeat");
    }

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "btn btn-dark", onClick: this.change }, this.state.button), /*#__PURE__*/
      React.createElement("i", { id: "heart5" })));


  }}
;


class Button6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: "Like" };

    this.change = this.change.bind(this);
  }
  change() {
    if (this.state.button === "Like") {
      this.setState({
        button: "Unlike" });

    } else
    if (this.state.button === "Unlike") {
      this.setState({
        button: "Like" });

    }
  }
  render() {
    if (this.state.button === "Like") {
      $("#heart6").css("display", "none");

    } else
    {
      $("#heart6").css("display", "");
      document.getElementById("heart6").setAttribute("class", " heart fas fa-heart animate__animated animate__heartBeat");
    }

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "btn btn-dark", onClick: this.change }, this.state.button), /*#__PURE__*/
      React.createElement("i", { id: "heart6" })));


  }}
;


class Button7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: "Like" };

    this.change = this.change.bind(this);
  }
  change() {
    if (this.state.button === "Like") {
      this.setState({
        button: "Unlike" });

    } else
    if (this.state.button === "Unlike") {
      this.setState({
        button: "Like" });

    }
  }
  render() {
    if (this.state.button === "Like") {
      $("#heart7").css("display", "none");

    } else
    {
      $("#heart7").css("display", "");
      document.getElementById("heart7").setAttribute("class", " heart fas fa-heart animate__animated animate__heartBeat");
    }

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "btn btn-dark", onClick: this.change }, this.state.button), /*#__PURE__*/
      React.createElement("i", { id: "heart7" })));


  }}
;


class Button8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: "Like" };

    this.change = this.change.bind(this);
  }
  change() {
    if (this.state.button === "Like") {
      this.setState({
        button: "Unlike" });

    } else
    if (this.state.button === "Unlike") {
      this.setState({
        button: "Like" });

    }
  }
  render() {
    if (this.state.button === "Like") {
      $("#heart8").css("display", "none");

    } else
    {
      $("#heart8").css("display", "");
      document.getElementById("heart8").setAttribute("class", " heart fas fa-heart animate__animated animate__heartBeat");
    }

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { type: "button", class: "btn btn-dark", onClick: this.change }, this.state.button), /*#__PURE__*/
      React.createElement("i", { id: "heart8" })));


  }}
;







ReactDOM.render( /*#__PURE__*/React.createElement(Button0, null), document.getElementById("btn0"));
ReactDOM.render( /*#__PURE__*/React.createElement(Button1, null), document.getElementById("btn1"));
ReactDOM.render( /*#__PURE__*/React.createElement(Button2, null), document.getElementById("btn2"));
ReactDOM.render( /*#__PURE__*/React.createElement(Button3, null), document.getElementById("btn3"));
ReactDOM.render( /*#__PURE__*/React.createElement(Button4, null), document.getElementById("btn4"));
ReactDOM.render( /*#__PURE__*/React.createElement(Button5, null), document.getElementById("btn5"));
ReactDOM.render( /*#__PURE__*/React.createElement(Button6, null), document.getElementById("btn6"));
ReactDOM.render( /*#__PURE__*/React.createElement(Button7, null), document.getElementById("btn7"));
ReactDOM.render( /*#__PURE__*/React.createElement(Button8, null), document.getElementById("btn8"));