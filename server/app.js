import cluster from "cluster";
import app from "./router/app.js";
import router from "./router/router.js";

if (cluster.isMaster) {
  const numWorkers = 4;
  console.log(`Master cluster setting up ${numWorkers} workers...`);
  for (let i = 0; i < numWorkers; i += 1) {
    cluster.fork();
  }
  cluster.on("online", worker => {
    console.log(`Worker ${worker.process.pid} is online`);
  });

  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker ${
        worker.process.pid
      } died with code: ${code}, and signal: ${signal}`
    );
    console.log("Starting a new worker");
    cluster.fork();
  });
} else {
  app.use("/", router);
  app.listen(3000, () => {
    console.log("we are listening on port: ", 3000);
  });
}
