import type { NextPage } from 'next';
import Head from 'next/head';
import { NavBar } from '../components/common/navbar';
import { Configuration, OpenAIApi } from 'openai';
import { ChangeEvent, useState } from 'react';

const Home: NextPage = () => {
  const [ingredients, setIngredients] = useState<string>('');


  return (
    <div className='h-screen bg-primary-light'>
      <Head>
        <title>ResteFest</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar />

      <main className='flex flex-col gap-5 p-5 bg-white m-7'>
        <h1 className='font-semibold text-primary-dark font-heading'>
          Hva har du i kjøleskapet?
        </h1>

        <input
          className='p-2 text-sm border rounded-md outline-none border-primary-dark focus:ring-0 font-roboto'
          value={ingredients}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setIngredients(e.target.value)
          }
        ></input>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
