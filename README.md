# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When a person clicks on https://www.techtonic.com/, the browser makes a DNS request to look up the internet address for this domain. The domain name is converted internally to an IP address so that the server knows which computer it is communicating with. The URL lets the server know which protocol it needs to read the instructions. The browser then makes an HTTP get request for the address. The web server gets the request it, processes it and delivers a HTML document or page back to the computer/ client. The computer uses a browser to render that document. It uses programming languages to accomplish this and to present the web page onto the monitor.



## From start to finish, how does data reach you to be rendered in the browser?

When a person is requesting data on the web, they may click on a web page, fill out a form or run a search. The web browser communicates with the web server using HTTP ( HyperText Transfer Protocol) over a TCP socket. The request includes a URL which will define the required action from the web server. The web server is waiting for the client to request messages, then will process them and reply to the web browser. A successful response to a request would contain the data such as a HTML page, which can then be displayed by the web browser.

Some of the important  components that allow this to happen are:  the layout engine, the rendering engine, the user interface, the JavaScript engine, the network layer, storage in the browser and an operating system interface. The layout engine takes input from the browser and gives them over to the rendering engine. The rendering engine takes the HTML code and interprets it to what we visually see. The user interface is the visual presentation of controls in the browser such as the forward or backward buttons. The JavaScript Engine takes the JavaScript code, executes it and returns the results. The network layer handles functions such as encryption and network settings. Browsers store some data to help with functionality such as cached files and cookies. The operating system interface interacts with the browser to draw out elements on the web page such as drop down boxes. If all of these components are working correctly the user should have been able to pull data from the web server and have it displayed on their monitors in the browser for their consumption.


## What code is rendered in the browser?

Typically a browser will render HTML markup, CSS, JavaScript and an image content from a server and interpret them based on certain specifications.


## What is the server-side code’s main function?

The server-side code’s main function is to process and interact with permanent storage like databases or files. It takes input from the client and builds a response document in return. It often talks with other backend resources like databases because it is insecure for a browser client to connect directly to it. Web applications have a disconnected architecture so the majority of the processing is done with code on the server side. When a database needs to be accessed on a server, the web application will post the page back to the web server and the server-side code will process the request. The server side code will also process user input such as user validation, saving and retrieving data. One of the benefits to server-side code is that it can tailor a website content differently to individual users. This can make the website more relevant to each user.


## What is the client-side code’s main function?

The client-side code’s main function is the interact directly with the pages HTML elements along with CSS and JavaScript. It provides interactivity in the browser and communicates with the server. In order for the the client-side code to work, the client’s internet browser must be able to support the languages used. The client side scripts are embedded on the client’s web page and process on the client’s internet browser. The advantages to client-side scripting include faster response times, less overhead on the web servers and more interactive applications. It is most useful for when the page elements need to be changed without the need to contact the database.


## What is runtime?

Runtime or execution time is the time during which a program is running. For example, the javascript runtime is the code that takes your javascript files and turns it into lower level machine code to execute. When a program is to be executed, a loader performs the necessary setup and links the program with any libraries it needs. Then, the execution begins, starting from the program’s entry point. Runtime errors occur only during the execution of the program. They can imply bugs in the program, insufficient memory, poor programming, computer viruses or aging hardware. When an issue occurs and the software is unable to resolve it, a runtime error will generate.


## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I am not too sure about this question because it isn’t clear to me exactly what an instance entails and what client-side assets are considered, even after reading a fair amount of articles. My understanding so far regarding an instance is that it is when an object is realized or equivalent to one copy of code. My interpretation of that is when you have code that is being called upon or declared to function.  According to Wikipedia (https://en.wikipedia.org/wiki/Instance_(computer_science)), “ Each realized variation of that object is an instance of its class.” From what I have gathered, my educated guess would be that the answer to the question is either once or as many times the code is being called upon to instantiate. The full object is only created once and lays dormant until it is called upon to function. If one opens the developer console in chrome, click tab, refresh the page, one can see totals for request/assets.

## How many instances of the server-side code are available at any given time?

My  guess from what I have read so far is that the amount of instances available at any given time on the server-side is as many as the CPU has the capacity to process or how many backend servers are running. There would be one copy of code per server responding to request.


## How many instances of the databases connected to the server application are created?

The amount of instances in the database that are connected to the server application is as many times the server application request information from the database. Usually, all servers are connected to a single shared database and there is one copy of code in the database.
