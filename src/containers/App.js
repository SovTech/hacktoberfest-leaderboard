import React, { Component, Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import { Query } from "react-apollo";
import { ApolloProvider } from "react-apollo";
import { client } from "../apollo";
import gql from "graphql-tag";
import Base from "../components/Base";
import FadeUp from "../components/FadeUp";
import Leaderboard from "../components/Leaderboard";
import UserCard from "../components/UserCard";
import Banner from "../components/Banner";
import LottieWrapper from "../components/LottieWrapper";
import SovtechLogo from "../components/SovtechLogo";
import ErrorWrapper from "../components/ErrorWrapper";
import packagejson from "../../package.json";

const loaderAnim = require("../consts/lottie/loader.json");

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono|Rubik:400,700,900');

  body {
    margin: 0;
    padding: 0;
  }
  *{
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }

  .sticky{
    position: -webkit-sticky;
    position: sticky;
    top:0;
  }
`;

const GET_USERS = gql`
  {
    users {
      id
      name
      login
      avatarUrl
      pullRequests
      updatedAt
    }
  }
`;
const dateFuture = new Date(2018,9,31,23,59,59);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: ''
    };
    this.GetCount = this.GetCount.bind(this);
  }

  componentDidMount() {
    this.GetCount();
  }

  transformPullRequests(data) {
    return data.users
      .map(user => {
        user.stats = {
          open: user.pullRequests.reduce((a, b) => {
            return a + (b.state === "OPEN");
          }, 0),

          closed: user.pullRequests.reduce((a, b) => {
            return a + (b.state === "CLOSED");
          }, 0),

          merged: user.pullRequests.reduce((a, b) => {
            return a + (b.state === "MERGED");
          }, 0)
        };
        return user;
      })
      .sort((a, b) => {
        return b.pullRequests.length - a.pullRequests.length;
      });
  }

  GetCount() {
    let dateNow = new Date();                              // grab current date
    let amount = dateFuture.getTime() - dateNow.getTime(); // calc milliseconds between dates
    let out = '';

    // time is already past
    if (amount < 0) {
      out = "Now!";
    } else {
      // date is still good
      let days = 0;
      let hours = 0;
      let mins = 0;
      let secs = 0;

      amount = Math.floor(amount/1000);                 // kill the "milliseconds" so just secs

      days=Math.floor(amount/86400);                    // days
      amount=amount%86400;

      hours=Math.floor(amount/3600);                    // hours
      amount=amount%3600;

      mins=Math.floor(amount/60);                       // minutes
      amount=amount%60;

      secs=Math.floor(amount);                          // seconds

      if(days !== 0){out += days +" day"+((days!==1)?"s":"")+", ";}
      if(days !== 0 || hours !== 0){out += hours +" hour"+((hours!==1)?"s":"")+", ";}
      if(days !== 0 || hours !== 0 || mins !== 0){out += mins +" minute"+((mins!==1)?"s":"")+", ";}
      out += secs + " seconds";

      setTimeout(() => {
        this.GetCount();
      }, 1000);
    }
    this.setState({ time: out });
}

  render() {
    return (
      <ApolloProvider client={client}>
        <Fragment>
          <GlobalStyle />
          <Base>
            <Leaderboard>
              <Banner>
                <SovtechLogo />
                <h1>Hacktoberfest 2018 Leaderboard v{packagejson.version}</h1>
                <h3>{this.state.time}</h3>
              </Banner>
              <Query query={GET_USERS}>
                {({ loading, error, data }) => {
                  if (loading) return <LottieWrapper loop anim={loaderAnim} />;
                  if (error)
                    return (
                      <ErrorWrapper loop text={`Error! ${error.message}`} />
                    );
                  return (
                    <div>
                      {this.transformPullRequests(data).map((user, i) => (
                        <FadeUp style={{ width: "100%" }} delay={i * 100}>
                          <UserCard key={i}>
                            <div className="__user--detail">
                              <h1>{user.pullRequests.length ? i + 1 : "-"}</h1>
                              <img src={user.avatarUrl} alt="" />
                              <h3><a href={'https://github.com/' + user.login} target='_blank' alt={'github user' + user.login}></a>{user.login}</h3>
                            </div>
                            <div className="__score-cont">
                              <div className="__score">
                                <div className="__label">open</div>
                                <h2>{user.stats.open}</h2>
                              </div>
                              <div className="__score">
                                <div className="__label">closed</div>
                                <h2>{user.stats.closed}</h2>
                              </div>
                              <div className="__score">
                                <div className="__label">merged</div>
                                <h2>{user.stats.merged}</h2>
                              </div>
                              <div className="__score">
                                <div className="__label">total</div>
                                <h2>{user.pullRequests.length}</h2>
                              </div>
                            </div>
                          </UserCard>
                        </FadeUp>
                      ))}
                    </div>
                  );
                }}
              </Query>
            </Leaderboard>
          </Base>
        </Fragment>
      </ApolloProvider>
    );
  }
}

export default App;
