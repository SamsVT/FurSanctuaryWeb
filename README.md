# fur Sanctuary Web

เว็บไซต์อย่างเป็นทางการของ **fur Sanctuary** — ชุมชน Furry ไทย

## Tech Stack

- Astro (Static Site)
- Preact
- Tailwind CSS v4
- bun

## Commands

| Command          | Action                                    |
| :--------------- | :---------------------------------------- |
| `bun install`    | ติดตั้ง dependencies                      |
| `bun run dev`    | เปิด dev server ที่ `localhost:4321`      |
| `bun run build`  | build โปรเจกต์ไปที่ `./dist/`             |
| `bun run preview`| ดูตัวอย่าง build                          |

## SEO / GEO

- `public/llms.txt` และ `public/llms-full.txt` — ข้อมูลเว็บสำหรับ AI (มาตรฐาน llmstxt.org)
- `@astrojs/sitemap` — สร้าง sitemap อัตโนมัติ
- JSON-LD (`Organization` / `WebSite` / `FAQPage`) ใน `src/layouts/Layout.astro`

## โครงสร้าง

```
/
├── public/          # static assets (logo, robots.txt, llms.txt)
├── src/
│   ├── components/  # Navbar, Header, Footer
│   ├── layouts/     # Layout (head + SEO)
│   └── pages/       # index, cookie-policy
└── package.json
```
