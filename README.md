# Personal Portfolio Site

This Astro site is configured as a simple personal portfolio with four public pages:

- Home: `src/pages/index.astro`
- Projects: `src/pages/projects.astro`
- CV: `src/pages/cv.astro`
- Contact: `src/pages/contact.astro`

The sidebar navigation is managed in `src/components/SideBarMenu.astro`.
The bottom sidebar links are managed in `src/components/SideBarFooter.astro`.

## Fill In Your Information

Update these files first:

- `src/config.ts`: site title and description
- `src/components/Header.astro`: mobile header name
- `src/components/Footer.astro`: footer name/text
- `src/components/SideBarFooter.astro`: GitHub and LinkedIn URLs
- `src/pages/index.astro`: name, headline, intro, featured projects
- `src/pages/projects.astro`: project cards and links
- `src/pages/cv.astro`: profile, education, experience, certifications, skills
- `src/pages/contact.astro`: email, GitHub, LinkedIn

## CV PDF

The sidebar download button points to:

```text
/cv.pdf
```

Place your PDF here:

```text
public/cv.pdf
```

## Profile Images

The sidebar avatar currently uses:

```text
public/profile.webp
```

The default social preview image is:

```text
public/social_img.webp
```

Replace those files with your own images when ready.

## Development

Install dependencies:

```bash
pnpm install
```

Run the local dev server:

```bash
pnpm run dev
```

Build the site:

```bash
pnpm run build
```

## Tech Stack

- Astro
- Tailwind CSS
- DaisyUI
