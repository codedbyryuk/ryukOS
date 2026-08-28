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
        {
            name: "FireSideTalks",
            url: "https://firesidetalk.pages.dev"
        },
        {
            name: "Modufy",
            url: "https://modufy-workspace.pages.dev"
        },
        {
            name: "PokemonBidWars",
            url: "https://pokemonbidwars.pages.dev"
        }
    ],

    Notes: {
        type: "folder",
        children: {
            "ideas.txt": {
                type: "file",
                content: `Ideas

- Make RyukOS draggable
- Add terminal commands
- Add more apps
`
            },
            "random.txt":{
                type:"file",
                content:`Random thoughts...

This is my little OS.`
            },

            "todos.txt": {
                type: "file",
                content: `TODO

- Finish RyukOS
- Add settings
- Add window manager`
            }
        }
    },
    Comments: []
};