# Traction Frontend

This repository contains the Traction web client in [`frontend/`](frontend/). It uses the Traction API for project, document, chat, and public-share workflows.

The client includes dashboard and ideation routes, document views, chat, and public project pages. The API is maintained separately in [traction-ai-backend](https://github.com/AbhiramVSA/traction-ai-backend).

## Architecture and Tech Stack

| Layer               | Technology                                                        |
| ------------------- | ----------------------------------------------------------------- |
| Framework           | Next.js 16 (App Router, React Server Components)                 |
| Language            | TypeScript (strict mode)                                          |
| UI                  | Tailwind CSS 4 with a custom enterprise design system             |
| Presentation        | Reveal.js for slide rendering, PptxGenJS for PowerPoint export    |
| Runtime             | React 19                                                          |

## Getting Started

### Prerequisites

- Node.js v20.x or higher
- npm (ships with Node.js)

### Installation

```bash
git clone https://github.com/AbhiramVSA/traction-ai.git
cd traction-ai/frontend
```

```bash
npm ci
```

The client uses `https://api.traction-ai.me` by default. Set `NEXT_PUBLIC_API_URL` to use another API base URL.

```bash
npm run dev
```

## Scripts

Run these commands from `frontend/`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Build the production app. |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run ESLint. |

The package manifest does not define a test command.

## Roadmap

- [ ] Advanced Visualization -- Graph Neural Network (GNN) visualization for lead-to-account mapping.
- [ ] Local LLM Integration -- WebGPU-based processing for client-side data filtering.
- [ ] Multi-Agent Canvas -- Drag-and-drop interface for building custom agentic workflows.
