1. Annabbelle
2. Patrick
3. Damour
4. fiston
5. Egide
6. Yassin
7. Phina
8. Liberi


## Versions
[ ]  console version : for only backend
[ ] UI version : for both frontend


### 1. console version tasks
  [ ]  **Logs levels** : this ensures that user tell us which logs level want to see, he may not want to se info logs, may be want to se only warnings and errors or he may also want to not see warnings, just only errors wo wee will need to make customisation for user so that he can do it or even turn of the logger [reference](https://github.com/jonnyreeves/js-logger#usage)
  
  [ ]  **Tracing logs**: something like `console.trace`
  
  [ ]  **Show timestamps** : when user want timestamps they'll have also to be printed
  
  [ ]  **Show log source** : show source of the log, i mean file

  [ ]  **Profiling/Timing functions** : this should be something like `console.time`

  [ ]  **Prod and Dev configs** : this should let user determine what level should he want logger to consoles on depending on the environment

  [ ]  **Le user format the output of the logger** : simple take ref [here](https://github.com/winstonjs/winston#formats)
  
  [ ]  **Let user set his custom log levels** : ref here [](https://github.com/winstonjs/winston#formats)
  
  [ ]  **Exit on error** Let user determin if app will exit on error or not especially node
