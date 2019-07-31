const server = "http://mymobinnet.mobinyar.com/";
//const server = "http://192.168.1.151:3000/";
//iisexpress-proxy 5454 to 3000

export default ApiConfig = {
    server: server,
    serverApi: server + "api/",
    serverTimeout: 30 * 1000
}