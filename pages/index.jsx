import react, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import firebase from "../firebase/clientApp";
import Contestant from "../components/Contestant";
import { CONTESTANTS } from "../utils/constants";
import triviaTowerAllStars from "../public/triviatower.png";

const LOCALSTORAGE_KEY = "selected";

export default function Home() {
  const [selected, setSelected] = useState(false);
  const [contestantData, setContestantData] = useState();

  useEffect(() => {
    const ref = firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      setContestantData(data);
    });

    if (window) {
      const localStorageSet = Boolean(
        window.localStorage.getItem(LOCALSTORAGE_KEY)
      );
      setSelected(localStorageSet);
    }
  }, []);

  const [activeContestant, setActiveContestant] = useState(null);

  const handleSelect = (id) => {
    setActiveContestant(id);
  };

  const handleConfirm = (id, username) => {
    const updates = {};
    updates[`/${id}/votes`] = firebase.database.ServerValue.increment(1);
    updates[`/${id}/supporters/${uuidv4()}`] = username;

    firebase.database().ref().update(updates);

    window.localStorage.setItem(LOCALSTORAGE_KEY, id);
    setSelected(true);
  };

  return (
    <div className="container">
      <Head>
        <title>MinnMax Trivia Tower All-Stars!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="banner">
          <Image src={triviaTowerAllStars} layout="fill" objectFit="fill" />
        </div>
        <div className="info">
          <p>
            This Monday, October 18th at 7pm Central, MinnMax is creating the
            biggest cross-over event in games media history with Trivia Tower:
            All-Stars! 24 people from games coverage enter, and only one person
            will win $1,000 for a charity of their choice. The full list of
            competitors and their charity can be found below. There will be four
            rounds of trivia, each floor of the tower will be a different
            format.
          </p>
          <p>
            This website was not made by an employee of Minnmax, just a
            fan/patron who saw people trying to bet on their favorites on Twitter and
            thought he would put something together in a few hours. You can
            select who you think will win below and afterwards see who others
            have picked.{" "}
          </p>
        </div>
        { selected ? (<h2>Live results (Top 10)</h2>) : (<h2>Predict the winner!</h2>) }      
        {selected && contestantData && (
          <div className="resultsTable">
            <div className="result header">
              <div>Name</div>
              <div>Votes</div>
            </div>
            {Object.values(contestantData).sort((a,b) => {
              return b.votes - a.votes;
            })
            .slice(0, 10)
            .map((contestant) => {
              const yourVote = contestant.id == window.localStorage.getItem(LOCALSTORAGE_KEY);
              return (
                <div className="result">
                    <div><span className={yourVote && "yourVote"}>{contestant.name}</span></div>
                    <div>{contestant.votes}</div>
                </div>
              );
            })}
            <div style={{ textAlign: "right", fontStyle: "italic", margin: "8px 6px 0 0"}}>Bolded is your pick</div>
          </div>
        )}
        {!selected && (
          <div className="roster">
            {CONTESTANTS.map((contestant, index) => {
              const { id, fullname, from, charity, picture } = contestant;

              return (
                <Contestant
                  key={index}
                  id={id}
                  picture={picture}
                  fullname={fullname}
                  from={from}
                  charity={charity}
                  isSelected={activeContestant == id}
                  select={handleSelect}
                  confirm={handleConfirm}
                />
              );
            })}
          </div>
        )}
      </main>

      <footer>
        <p>As stated above, this was thrown together in a few hours by Tanner Hoisington – a Javascript developer by day who is very much not a designer and should have started this more than 2 days before the event. If you want to open a pull request to make this prettier let me know in Discord.</p>
        <p>If you are looking for Javascript developers and want to see examples of what we can actually do, check us out at <a href="https://www.peerigon.com">peerigon.com</a></p>
        <p>And most importantly, support MinnMax <a href="https://www.patreon.com/minnmax">on Patreon</a></p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
        }

        .banner {
          width: 100%;
          height: 400px;
          position: relative;
          margin-bottom: 20px;
          object-fit: fill;
        }

        .info {
          width: 80%;
          margin: 60px auto 80px auto;
          line-height: 1.8;
          color: #434343;
          font-size: 1.125rem;
        }

        .roster {
          display: grid;
          /* That's minmax with one n ;) */
          grid-template-columns: repeat(
            auto-fill,
            minmax(min(200px, 100%), 1fr)
          );
          gap: 20px 60px;
        }

        .resultsTable{}

        .header{
          font-weight: 600;
          border-bottom: 2px solid black;
        }

        .result{
          display: flex;
          justify-content: space-between; 
          margin-bottom: 8px;
        }

        .yourVote{
          color: var(--text-orange);
          font-weight: 600;
        }

        h2 {
          color: var(--text-orange);
          font-style: italic;
          font-size: 2rem;
          text-align: center;
        }

        main {
          padding: 6rem 5rem;
          font-family: Lato, arial, sans-serif;
        }

        footer {
          padding: 2rem 5rem;
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
        }

        button {
          font-size: 1.5em;
          margin: 1em 0;
        }

        a {
          color: var(--text-orange);
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        @media (max-width: 500px) { 
          main{
            padding: 1rem 0;
          }

          .banner{
            height: 200px;
          }

          footer{
            padding: 1rem 2rem;
          }
        }

        @media (min-width: 1200px) { 
          .banner{
            width: 70%;
            margin: 0 auto;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;

          --text-orange: #db3a1d;
          --main-orange: #ff5030;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
