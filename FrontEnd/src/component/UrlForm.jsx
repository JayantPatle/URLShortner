import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const UrlForm = () => {

  const [url, seturl] = useState("https://www.google.com")
  const [shortUrl, setShortUrl] = useState("")
  const [copied, setCopied] = useState(false)
  const handleSubmit = async () => {
    const { data } = await axios.post("http://localhost:5000/api/create", { url })
    setShortUrl(data)
    setCopied(false)
  }

  const handleCopy = async () => {
    if (shortUrl) {
      await navigator.clipboard.writeText(shortUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }


  return (
    <div onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="url" className='block text-sm font-medium text-gray-700'>
          Enter Your Url
        </label>

        <input
          type="url"
          value={url}
          onChange={(event) => seturl(event.target.value)}
          className="border border-pink-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Enter your long URL"
          required
        />
        <button onClick={handleSubmit}
          type="submit"
          className="bg-pink-500 text-white rounded px-4 py-2 font-semibold hover:bg-pink-600 transition"
        >
          Shorten URL
        </button>

      </div>

      {shortUrl && (
        <div className="flex flex-col items-center gap-2 mt-4">
          <span className="font-medium text-pink-700">Short URL:</span>
          <div className="flex items-center gap-2">
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono underline text-pink-700"
            >
              {shortUrl}
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className={`px-2 py-1 rounded text-xs transition ${
                copied
                  ? 'bg-pink-200 text-pink-800'
                  : 'bg-pink-600 text-white hover:bg-pink-700'
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default UrlForm