# RyukOS

**RyukOS** is my personal website, but instead of making it look like a normal portfolio, I decided to turn it into a small operating-system-like interface.

You can open folders, read text files, leave comments, use a terminal, and explore some of my projects and notes — basically, it's my little corner of the internet disguised as an OS.

## What can you do?

*  **Browse folders** — Explore different parts of the site through a simple file-system-like interface.
*  **Notepad** — Write and leave a comment directly from the website.
*  **Comments** — See comments and messages left by other people.
*  **Terminal** — A small terminal built into the site with a few commands to play around with.
*  **Projects** — Check out some of the projects I've worked on.
*  **Notes** — A place for some of my notes and random stuff.
*  **Text files** — Open and read `.txt` files inside the filesystem.

## Why did I make this?

I wanted my personal website to feel like **something you could explore**, instead of just being a page with my name, skills, and a bunch of links.


It's not meant to be an actual operating system. It's just a fun interface that lets me experiment with React, UI design, animations, state management, Firebase, and other things while making something that actually feels like *mine*.

## Built with

* **React / Next.js**
* **TypeScript**
* **Tailwind CSS**
* **Firebase / Firestore** — used for the comments
* **React** — for the UI and window-based interface

## Project structure

The website is built around a virtual filesystem. Different folders and files represent different parts of the site.

```text
RyukOS/
├── Comments/
│   └── Community comments
│
├── Notes/
│   └── Personal notes
│
├── Projects/
│   └── My projects
│
├── RyukOS/
│   ├── about.txt
│   └── skills.txt
│
└── Terminal
```

The exact contents can change as I add more things to the site.

## Comments

One of the main interactive parts of RyukOS is the **Comments** folder.

Anyone can open the Notepad, write something, and submit it. The comments are then stored in Firestore and displayed inside the Comments folder.

So the website isn't completely one-way — visitors can actually leave something behind.

## Terminal

There's also a built-in terminal because apparently a normal portfolio wasn't enough.

It supports a few basic commands and is mainly there to make the whole thing feel more like an actual desktop environment.

More commands may be added later.

## Running locally

Clone the repository:

```bash
git clone https://github.com/your-username/ryukos.git
cd ryukos
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## Status

 **Still in development**

RyukOS is a project I'm actively experimenting with, so things might break, change, or randomly get redesigned.

More folders, files, terminal commands, animations, and features will probably be added over time.

## Made by

**codedbyryuk**

