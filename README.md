# a NestJS backend for bookbook
Making this to practice my NestJS.

## Description
Started from the NestJS TypeScript starter repository in October 2024.

### Technologies
* [NestJS](https://github.com/nestjs/nest) as our backend framework. See [NestJS docs here](https://docs.nestjs.com). Check out [NestJS Devtools here](https://devtools.nestjs.com).
* [pnpm](https://pnpm.io/) as our node package manager.
* [prettier](https://prettier.io/) for code formatting.
* [TypeScript](https://www.typescriptlang.org/) for type safety.
* [TypeORM](https://typeorm.io/) is the standard ORM for NestJS.
* [MySQL](https://www.mysql.com/) as our database. (sorry)
* AWS: [RDS](https://aws.amazon.com/rds/) to host our database; [App Runner](https://aws.amazon.com/apprunner/) to host our API; [ECR](https://aws.amazon.com/ecr/) to host our Docker image.

Soon:
- [Swagger](https://swagger.io/)
- [Zod](https://zod.dev/)

## Project setup for local development
```bash
# install dependencies
pnpm install

# copy environmental variables
cp .env.example .env

# run the database in Docker
docker compose up database -d

# start the API. Defaults to localhost:8001
pnpm run start:dev
```

### Testing

unit tests
 $ `pnpm run test`

e2e tests
 $ `pnpm run test:e2e`

test coverage
 $ `pnpm run test:cov`

## Deployment to production

Database is hosted on AWS RDS. Region is `us-east-1`.

The Docker image is pushed to AWS ECR. Build it with `docker build --platform linux/amd64 -t bookbook-repo .`

The API is hosted on AWS App Runner.
