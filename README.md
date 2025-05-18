# Reading list test task for JACOFOOD.ru

## Author comments

Здесь напишу по-русски. В коде использовал английский.

Реакт понизил до 18, т.к. в требованиях именно 18^.

Деплой: [Vercel](https://reading-list-one.vercel.app/), [пояснительная записка](https://reading-list-one.vercel.app/about)

[Original task](https://docs.google.com/document/d/1BeBupcA0z8noMpIBwQAjlyo4npKIbchHdGeh6Nnj4lM/edit?tab=t.0)

reminder:

## Stack:

- Next.js 14+
- ReactJS 18.X
- TypeScript
- Tailwind
- Zustand

## Task:

### Book Source

- Use any public JSON/API (Open Library, Google Books API, mock JSON, etc.)
- Display only the first 10 search results.

### Search

- Input with placeholder strictly "Find a book"
- The request is executed when pressing Enter.

### Reading List

- "Add to reading list" button on the search result book card.
- For cards in the list, display: title, author(s), year (if available).
- For books with "War" in the title, highlight the title text with `text-red-500`.

### Editing

In the reading list, each book should have:

- A "Delete" button (removes from the list)
- (Optional) a "Return to search" button, if desired.

### State Management

- Store the reading list in a Zustand store.
- Synchronize the state with localStorage whenever the list changes.
- Restore the list from localStorage when initializing the application.

---

## AI tools used so far

- deepseek helped set up the environment and bend package versions to fit the requirement (when it came to writing code - it's dumb and slow)
- chatgpt supported me with code style advice and made boilerplate (it's opinionated and partially obsolete, but smarter)
- copilot saved time on commenting, but mostly useless for code

---

# DEFAULTS

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
