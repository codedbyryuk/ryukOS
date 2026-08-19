export const filesystem = {
    RyukOS: {
        type: "folder",
        children: {
            "about.txt": {
                type: "file",
                content: `Hey!

I'm Fahim, aka Ryuk.

I'm a developer who likes building weird
things with code.

Welcome to my little OS.`
            },

            "skills.txt": {
                type: "file",
                content: `Languages:
- JavaScript
- TypeScript
- Python
- C++
- C
- Java

Tooling:
- Git / Github
- Linux / bash
- Firebase
- Figma
- Cloudflare

Frontend:
- Next.js
- React
- Node.js
- Html
- Vite
- React Native`
            }
        }
    },

    Projects: [
        "Circulr",
        "Modufy",
        "PokemonBidWars"
    ],

    Notes: [
        "ideas.txt",
        "todo.txt",
        "random.txt"
    ],
    Comments:[]
};