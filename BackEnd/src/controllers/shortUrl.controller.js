import { createShortUrlServiceWithoutUser } from "../services/shortUrl.service.js"
import urlSchema from '../model/shortUrl.Model.js'
export const createShortUrl = async (req, res) => {
    const { url } = req.body
    const shortUrl = await createShortUrlServiceWithoutUser(url);
    res.send(process.env.APP_URL + shortUrl)


}

export const redirectFromShortUrl = async (req, res) => {
    const { id } = req.params;
    const url = await urlSchema.findOneAndUpdate(
    { short_url: id },
    { $inc: { clicks: 1 }},
    {new : true}
  );

  if (!url) return res.status(404).send('Not Found');

  const redirectUrl = url.full_url.startsWith('http://') || url.full_url.startsWith('https://')
    ? url.full_url
    : 'http://' + url.full_url;

  return res.redirect(redirectUrl);

}