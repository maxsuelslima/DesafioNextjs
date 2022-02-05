import { GetStaticPaths, GetStaticProps } from 'next';

import Client from '../../utils/prismicHelpers';
import Image from 'next/image'
import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({post}:PostProps) { 
  return(
    <>

      <main className={styles.contentContainer}>
      <div>
        <Image src="/Logo.svg" width="240px" height="26px" alt="logo"></Image>
      </div>
      <Image src="/Banner.png" width="1440px" height="400px"/>
        <div className={styles.postContent}>
          <div>
            <h1> Craindo app react</h1>
            <div className={styles.iconContainer}>
            <span><FiCalendar/> 12 Dez 1999 </span>
            <span><FiUser/> Maxsuel Lima</span>
            <span><FiClock/> 5 min</span>
            </div>  
            <span>
              <h2>Lorem ipsum dolor sit amet</h2>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium ex ac dui sodales tempor. Nulla facilisi. In et eros et ligula cursus blandit faucibus semper quam. Sed dolor augue, tincidunt at scelerisque finibus, convallis et sapien. Donec congue suscipit sapien pulvinar luctus. Sed tempor ante enim, a placerat orci vulputate non. Sed quam lacus, aliquet eu semper vel, pellentesque sed urna. Donec id sapien eget lacus posuere porttitor non at nulla. Suspendisse potenti. Ut sodales dictum arcu, quis malesuada nulla consectetur ac. Proin in luctus erat. Nam scelerisque imperdiet vulputate. Quisque non bibendum metus.

<br /> 
Etiam vehicula augue eu elit tempor suscipit. Vestibulum ultricies ipsum laoreet lectus vestibulum, id fringilla eros faucibus. Phasellus fringilla justo nec mi aliquet, et pretium quam tempor. Aliquam maximus commodo erat. Nunc interdum ac erat a molestie. Aliquam sed felis a nisi gravida tincidunt eget a ipsum. Cras ac porttitor nisl, vel dignissim turpis. Morbi sapien leo, dapibus a lorem a, venenatis accumsan justo. Vivamus vehicula, dolor quis bibendum aliquet, leo ante suscipit nunc, ut posuere elit massa ut enim. Pellentesque sed metus vel libero hendrerit tempus eu eu felis. Ut quam neque, vestibulum varius mauris at, congue finibus massa. Vivamus tincidunt rhoncus sapien eget ultricies.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ut ultricies dui. Vestibulum congue consequat dapibus. Sed pellentesque dapibus auctor. Duis vitae viverra tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ornare, urna interdum bibendum tristique, velit magna mollis lectus, id placerat nibh sapien id turpis. Duis volutpat et turpis sit amet pharetra. Vivamus cursus sem odio, ut lobortis nibh euismod non. Aliquam est enim, sodales ac posuere nec, venenatis eu nunc. Suspendisse ut dui scelerisque, aliquet magna in, vulputate est. In sagittis leo mattis, tincidunt urna interdum, commodo felis. In non faucibus nibh. Nulla sodales id nulla a laoreet.

Cras sit amet faucibus mi. Praesent tincidunt ante molestie justo posuere euismod aliquam nec lectus. Duis rhoncus mattis massa quis placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sollicitudin, metus et placerat faucibus, dolor metus tristique ligula, sit amet lobortis sem lorem at nisl. Nullam vitae lacinia felis. Etiam dapibus nulla at nisl mollis laoreet. Suspendisse tempor, turpis eget pharetra venenatis, neque est feugiat sapien, vel efficitur dui quam nec purus. Cras sollicitudin, purus facilisis tincidunt venenatis, turpis massa dignissim erat, nec faucibus leo mauris et quam. Vivamus vel nulla sed nisi consequat vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Aenean facilisis eget mauris eget blandit. Duis iaculis felis nunc, nec mollis mauris maximus in. Phasellus at pharetra erat. Donec accumsan tempor dui id fermentum. Curabitur consectetur dictum orci, in bibendum magna molestie et. Duis ut lobortis eros. Ut ut diam ut nisl eleifend volutpat. Maecenas et massa quis leo euismod ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur ac sapien non mauris condimentum tincidunt id a urna. Mauris vel nibh tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur efficitur, ipsum sed tempor faucibus, justo turpis ullamcorper dui, eu rhoncus ligula diam sed quam. Vivamus lobortis, metus a bibendum consectetur, nisi mi placerat lacus, et posuere tellus quam in dolor. Suspendisse eget magna quis nisi dapibus imperdiet.
<h2>Lorem ipsum dolor sit amet</h2>
Phasellus vitae ante in arcu cursus cursus ac at erat. Pellentesque a justo et urna efficitur vulputate. Proin felis ligula, rutrum vel lacus ac, ultricies feugiat ante. Vestibulum quis facilisis ligula. Duis eros tellus, lobortis non vestibulum nec, commodo ac turpis. Sed fringilla dolor ac urna sagittis, accumsan mattis sem mattis. Vivamus eleifend, nibh nec accumsan consequat, ante ex euismod felis, tristique ultrices lorem metus a nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris rhoncus quam dignissim tellus porta aliquet. Nam dignissim turpis orci, eu pharetra eros pharetra vel. In hac habitasse platea dictumst.

Mauris euismod mi in arcu faucibus pretium. Donec sed semper nunc. Nam turpis eros, placerat nec lacinia nec, molestie a lectus. Pellentesque tempus lacus risus, quis bibendum dolor finibus a. Nulla in viverra neque, id tristique nulla. Integer in laoreet dui. Sed felis libero, consectetur quis arcu sit amet, vestibulum consectetur eros. Integer cursus metus ac tincidunt sollicitudin.

Integer molestie nibh et neque sollicitudin, eget tincidunt elit maximus. Nulla placerat purus at efficitur euismod. Quisque cursus interdum feugiat. Maecenas venenatis augue risus. Mauris id augue quis ipsum fermentum finibus. Maecenas dignissim lobortis scelerisque. Sed pharetra ullamcorper consectetur. Morbi pellentesque quam eu nisi auctor, et facilisis est facilisis. Fusce vestibulum sapien eu ante mattis scelerisque. In suscipit venenatis quam, vitae tempor quam vehicula sed. Duis tincidunt euismod lacus id vehicula. Ut scelerisque lacus sapien. Nam sed dolor posuere, elementum urna sed, vehicula felis. Quisque tincidunt suscipit laoreet. Sed lacinia sodales dapibus.

</span>
          </div>
        </div>
      </main>
    </>
  )

}
/*
export const getStaticPaths = async () => {
const prismic = Client().query('')

return {
  paths: [
    // String variant:

    // Object variant:
    { params: { slug: '' } },
  ],
  fallback: true,
}
 };*/

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
