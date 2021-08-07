import App from "./App"

function start() {
  App.listen(App.get("port"), () => {
    console.log(
      "  App is running at http://localhost:%d in %s mode",
      App.get("port"),
      App.get("env"),
    )
  })
}
start()
