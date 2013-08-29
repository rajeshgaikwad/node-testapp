# Test app

## About

Testing streaming response from node

## Install


### Prerequisite
    Node installed
    mocha installed


### Setting up Repositories



### Setting up heroku
    http://polar-eyrie-5007.herokuapp.com/ | git@heroku.com:polar-eyrie-5007.git
    
### Test Heroku
    http://polar-eyrie-5007.herokuapp.com/hello/testme

## Benchmark & Test
###Unit test
    mocha

###Functional Test
    curl http://localhost:3000/hello/testme
    Starting chunked Response
    Hello
     After 5 sec World
      Name:testme 


    
### Benchmarks
#### Running benchmark
        ab -n 100 -c 100 -d -S   http://localhost:3000/hello/testme


#### Results
        This is ApacheBench, Version 2.3 <$Revision: 655654 $>
        Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
        Licensed to The Apache Software Foundation, http://www.apache.org/

        Benchmarking localhost (be patient).....done


        Server Software:        
        Server Hostname:        localhost
        Server Port:            3000

        Document Path:          /hello/testme
        Document Length:        92 bytes

        Concurrency Level:      100
        Time taken for tests:   5.082 seconds
        Complete requests:      100
        Failed requests:        0
        Write errors:           0
        Total transferred:      36244 bytes
        HTML transferred:       9200 bytes
        Requests per second:    19.68 [#/sec] (mean)
Time per request:       5081.576 [ms] (mean)
Time per request:       50.816 [ms] (mean, across all concurrent requests)
Transfer rate:          6.97 [Kbytes/sec] received

Connection Times (ms)
              min   avg   max
              Connect:        1     2    3
              Processing:  5027  5049 5076
              Total:       5028  5051 5079

