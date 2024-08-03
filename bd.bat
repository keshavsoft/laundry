if not exist "node_modules" (
    call npm i
)
call node KCode/Backend.js
call node KCode/Database.js
