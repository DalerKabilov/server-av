 
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query.relise;

    console.log("Получен запрос:", queryParams);
    
    res.writeHead(200, { 
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
        "Access-Control-Allow-Headers": "Content-Type", });
    res.end("Параметры запроса выведены в консоль.\n");
});

server.listen(3000, () => {
    console.log(`Сервер запущен`);
});