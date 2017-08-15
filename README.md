NODEJS LOAD-BALANCER

Load balancer is a technology used to distribute the request among the backup server.
Let assume that there are about ten thousands requests per second on a server.It may be
possible that your server can not be so secure to handlet this load or you dont want such a huge traffic on your server them you can use this concept.

There is main server which is load balancer and recieves all the requests.Nothing is hosted on this server.Its duty is only to distrubute the requests among all other backup server which are holding the same project.In case let say we have 10 backup server then 1000 request will be distributed among all the them per second which minimize the traffic of the server.

I have configured the above concept using http-proxy module of nodejs.
