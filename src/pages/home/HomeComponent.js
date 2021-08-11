import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    console.log(this.props.theme);
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <MessengerCustomerChat
          pageId="102360768552591"
          appId="891567418072170"
          htmlRef="https://kcdia.netlify.app/"
        />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
