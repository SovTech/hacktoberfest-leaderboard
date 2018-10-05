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
import Timer from '../components/Timer';
import packagejson from "../../package.json";
import GithubCorner from "react-github-corner";

const loaderAnim = require("../consts/lottie/loader.json");

const VERSION = packagejson.version;

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

  #version {
    color: white;
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

class App extends Component {
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


  render() {
    return (
      <ApolloProvider client={client}>
        <Fragment>
          <GlobalStyle />
          <Base>
            <Leaderboard>
              <Banner>
                <SovtechLogo />
                <h1>Hacktoberfest 2018 Leaderboard</h1>
                <Timer />
              </Banner>
              <GithubCorner href="https://github.com/SovTech/hacktoberfest-leaderboard" />
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
                          <UserCard key={i} userPR={user.pullRequests}>
                            <div className="__user--detail">
                              <h1>{user.pullRequests.length ? i + 1 : "-"}</h1>
                              <img src={user.avatarUrl} alt="" />
                              <h3><a href={'https://github.com/' + user.login} target='_blank' alt={'github user' + user.login}>{user.login}</a></h3>
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
                      <small id="version">v{VERSION}</small>
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
