import { useState } from "react";
import Head from "next/head";
import Board from "../components/Board";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tic Tac Toe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="app">
          <div className="app__board">
            <Board />
          </div>
          <div className="app__info">
            <div>{/* {Status} */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </main>
    </div>
  );
}
