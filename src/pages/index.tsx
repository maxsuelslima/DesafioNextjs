import { render } from '@testing-library/react';
import next, { GetStaticProps } from 'next';
import { FiCalendar, FiUser } from "react-icons/fi";
import styles from './home.module.scss';
import Header from '../components/Header'
import Image from 'next/image'
import { Client } from '../utils/prismicHelpers'
import Prismic from "@prismicio/client";
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';
import { useState } from 'react';
interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({postsPagination}:HomeProps) {
  const teste=postsPagination.results.map(x=>x)
  const [posts,setPosts]=useState<Post[]>(teste)
  const [nextPage, setNextPage]=useState(postsPagination.next_page)
  const [currentPage, setCurrentPage]=useState(1)

  async function handleNextPage():Promise<void>{
    if(currentPage!=1 && nextPage==null){
      return
    }
    const postsResults=await fetch(`${nextPage}`).then(
      response=>response.json()
      );
    setNextPage(postsResults.next_page);
    setCurrentPage(postsResults.page);


    const newPosts = postsResults.results.map(
      x => {
        return {
          uid: x.uid,
          first_publication_date: format(parseISO(x.first_publication_date), "d MMM yyyy", { locale: ptBR }),
          data: {
            title: x.data.title,
            subtitle: x.data.subtitle,
            author: x.data.autor[0].text
          }
        }
      }
    )
    setPosts([...posts,...newPosts]);
  }

  return (
    <main className={styles.mainContainer}>
      <div>
        <Header/>
      </div>
      {posts.map(teste => (
        <>
          <div className={styles.contentContainer} key={teste.uid}>
            <Link href={`/post/${teste.uid}`}>
            <a href="">
              <h1>{teste.data.title}</h1>
              <div className={styles.subTitle}>{teste.data.subtitle}</div>
              <div className={styles.icon}>
                <div><FiCalendar /><span>{teste.first_publication_date}</span></div>
                <div><FiUser /> <span>{teste.data.author}</span></div>
              </div>
            </a>
            </Link>
          </div>

        </>
      ))}
      {nextPage && (      <div className={styles.divCarregar}>
        <button className={styles.carregar} onClick={handleNextPage}>
          Carregar mais posts
        </button>
      </div>)}

    </main>
  )
}


export const getStaticProps = async () => {
  const postsResponse = await Client().query([Prismic.Predicates.at('document.type', 'posts')],
    {
      pageSize: 1
    });

  const results = postsResponse.results.map(
    x => {
      return {
        uid: x.uid,
        first_publication_date: format(parseISO(x.first_publication_date), "d MMM yyyy", { locale: ptBR }),
        data: {
          title: x.data.title,
          subtitle: x.data.subtitle,
          author: x.data.autor[0].text
        }
      }
    }
  )

  const postsPagination = {
    next_page: postsResponse.next_page,
    results: results,
  }

  return {
    props: {
      postsPagination,
    }
  }

};
