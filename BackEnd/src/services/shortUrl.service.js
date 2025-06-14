import { generateNanoId } from "../utils/helper.js";
import { nanoid } from "nanoid";
import urlSchema from "../model/shortUrl.Model.js";
import { saveShortUrl } from "../Dao/shortUrl.js";

export const createShortUrlServiceWithoutUser = async(url)=>{
    const shortUrl = await generateNanoId(7);
    if(!shortUrl) throw Error ("Short Url Not Generated")
   await saveShortUrl(shortUrl,url)
    return shortUrl;

}
export const createShortUrlServiceWithUser = async(url,userId)=>{
    const shortUrl = await generateNanoId(7);
   await saveShortUrl(shortUrl,url,userId)
    return shortUrl;

}