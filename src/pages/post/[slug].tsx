import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from "@prismicio/client";
import Client from '../../utils/prismicHelpers';
import Image from 'next/image'
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import styles from './post.module.scss';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface Post {
  first_publication_date: string | null;
  timeToRead:string
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    contentone: {
      heading: string;
      bodyone: {
        text: string;
      }
    };
    contenttwo: {
      headingtwo: string;
      bodytwo: {
        text: string;
      }
    };
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Carregando...</h1>
  }
  return (
    <>
      { 
              <main className={styles.contentContainer}>
              <div className={styles.logoContainer}>
                <Image src="/Logo.svg" width="240px" height="26px" alt="Logo"></Image>
              </div>
              <img src={post.data.banner.url} alt="" />
              <div className={styles.postContent}>
                <div>
                  <h1> Craindo app react</h1>
                  <div className={styles.iconContainer}>
                    <span><FiCalendar /> {post.first_publication_date} </span>
                    <span><FiUser /> {post.data.author}</span>
                    <span><FiClock /> {post.timeToRead} min</span>
                  </div>
                  <span>
                    <h2>{post.data.contentone.heading}</h2>
                    <span>{RichText.asText(post.data.contentone.bodyone.text)}</span>

                    <h2>{post.data.contenttwo.headingtwo}</h2>
                    <span>{RichText.asText(post.data.contenttwo.bodytwo.text)}</span>
                  </span>
                </div>
              </div>
            </main>
      }
    </>
  )

}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params
  const response = await Client().getByUID('posts', String(slug), {});
  const text=response.data.contentone[0].bodyone.map(x=>x.text)+response.data.contenttwo[0].bodytwo.map(x=>x.text)+response.data.contentone[0].heading+response.data.contenttwo[0].headingtwo
  function countWords(s){
    s = s.replace(/(^\s*)|(\s*$)/gi,"");
    s = s.replace(/[ ]{2,}/gi," ");
    s = s.replace(/\n /,"\n");
    return s.split(' ').filter(function(str){return str!="";}).length;
} 
  
  const textCounter=Math.round((countWords(text)+5)/200)
  console.log(textCounter)

  const post = {
    uid: response.uid,
    timeToRead:textCounter,
    first_publication_date:format(parseISO(response.first_publication_date), "d MMM yyyy", { locale: ptBR }),
    data: {
      title: response.data.title,
      banner: {
        url: response.data.banner.url,
      },
      author: response.data.autor[0].text,
      contentone: {
        heading: response.data.contentone[0].heading,
        bodyone: {
          text: response.data.contentone[0].bodyone,
        }
      },
      contenttwo: {
        headingtwo: response.data.contenttwo[0].headingtwo,
        bodytwo: {
          text: response.data.contenttwo[0].bodytwo,
        }
      }
    },
  }
  return {
    props: {
      post,
    },
    revalidate: 1800,
  };
};
