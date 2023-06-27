import f from "fastify";
const fastify = f();

fastify.get("/", async (_request, reply) => {
  await reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({ helloFromRoute: "/" });
});

// This route does not seem to send the reply
fastify.get("/empty", async (_request, reply) => {
  await reply
    .code(204)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({ helloFromRoute: "/empty" });
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
