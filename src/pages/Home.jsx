import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  const snippets = [{ name: "tab" }]

  return (
    <main className="p-5">
    <h1 className="font-bold text-lg my-3">Pius&apos; Personal Snippets</h1>
    <p className="text-neutral-500 mb-5">Each button leads to the snippet is labels</p>
      <div className="flex flex-wrap bg-gray-200 min-h-[300px] p-5">
        {snippets.map((snippet, index) => (
          <Link key={index} to={snippet.name} className="bg-slate-600 py-1 px-5 rounded text-white self-start">
            {snippet.name}
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Home
