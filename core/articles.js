import { siteinfo } from "./config.js";
let wpsite = siteinfo.site;
(async () => {
    async function getWPposts(wpsite) {
        const url = `https://public-api.wordpress.com/rest/v1.1/sites/${wpsite}/posts/`;
        const response = await fetch (url);
        const awpp = await response.json();
        return awpp.posts;
    }
    const articles = await getWPposts(wpsite);
    
    console.log(articles);
    articles.forEach(
        (article) => {
            const articlesContainer = document.querySelector('#articles');
            articlesContainer.innerHTML += `<img src="${article.featured_image}" style="width:100%"/><p>No.<strong>${article.ID}</strong> ${article.title}</p><p>Published: ${article.date}, Modified: ${article.modified}</p>`;
            // console.log(No.${article.ID} ${article.title});
        }
    )
}) ();