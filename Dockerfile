FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV COREPACK_NPM_REGISTRY="https://registry.npmmirror.com"
RUN apk add --no-cache openssl 



FROM base AS prod-deps

RUN corepack enable
RUN apk add --no-cache g++ make python3
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm fetch --frozen-lockfile
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile
COPY prisma ./
RUN pnpm prisma:gen
RUN pnpm prisma:deploy
RUN pnpm prisma:seed

FROM base AS build

RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm fetch --frozen-lockfile
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM base
WORKDIR /app
COPY package.json ./
COPY prisma ./prisma
COPY templates ./templates
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
ENV NODE_ENV production
CMD ["sh", "-c", "npm run prisma:mig; node ./dist/src/main.js"]
EXPOSE 3000