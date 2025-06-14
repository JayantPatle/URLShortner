import shortUrl from '../model/shortUrl.Model.js'
import urlSchema from '../model/shortUrl.Model.js'
export const saveShortUrl = async (shortUrl,longUrl,userId)=>{
     const newUrl = new urlSchema({
        full_url: longUrl,
        short_url: shortUrl
    })
    if(userId){
        newUrl.user_id = userId
    }
    newUrl.save()
}
