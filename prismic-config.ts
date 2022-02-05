
export const apiEndpoint = `https://desafionextjsmike.prismic.io/api/v2`


export const accessToken = ''


export const linkResolver = (doc) => {
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  return '/'
}


export const routeResolver = {
  routes: [
    {
      "type":"page",
      "path":"/:uid"
    },
  ]
};