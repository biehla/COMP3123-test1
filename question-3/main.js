import * as fs from 'node:fs/promises' 

async function clearLogs() {
  fs.stat("./logs").catch(() => {
    console.log("There are no logs. Exiting")
    return
  })

  let logNames = Array()

  let logsDir = await fs.opendir("./logs")
  for await (const file of logsDir) {
    console.log(file.name)
    logNames.push(file.name)
  }
  logsDir.close()

  for (const name of logNames) {
    console.log(`Deleted ${name} from logs folder`)
    await fs.rm("./logs/" + name)
  }

  fs.rmdir("./logs").then(succ => {
    console.log("Deleted logs folder")
  }, fail => {
    console.log("we hecced up " + fail)
  })
}

async function createLogs() {
  await fs.stat("./logs").catch(async () => {
    await fs.mkdir("./logs")
  })


  for (let i = 1; i <= 10; i++) {
    console.log(`log${i}.txt`)
    await fs.writeFile(`./logs/log${i}.txt`, "Logged info!")
  }
}

createLogs()
clearLogs()
