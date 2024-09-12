// https://nuxt.com/docs/getting-started/views
export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
      // This will be an object representation of the html template.
      console.log(html)
      html.head.push(`<meta name="description" content="My custom description" />`)
      html.body.push(`<script src="/custom.js" defer="true"></script>`);
    })
    // You can also intercept the response here.
    nitroApp.hooks.hook('render:response', (response, { event }) => { console.log(response) })
  })