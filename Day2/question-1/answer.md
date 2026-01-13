                    Theory (Node.js Internals)
------------------------------------------------------------------------------------------------

## 1.Node.js Architecture
-A single main thread can effectively handle numerous requests thanks to Node.js's event-driven, non-blocking I/O architecture.

-> Important Points:
>executes JavaScript in a single thread.
>Heavy tasks are transferred to background threads.
>Designed for high-performance, scalable applications
>manages asynchronous tasks using an event loop

-> Principal Elements:
>Engine for JavaScript (V8)
>Core APIs for Node.js
>Native Connections
>Loop of Events
>Libuv

**JavaScript Engine (V8):
>V8:Google's high-performance JavaScript engine is called V8.
>it is Composed in C++
>it transforms JavaScript code into machine code
>Function in Node.js:
>carries out JavaScript code

**Node.js Core APIs:
>Node.js Core APIs are Node.js's built-in modules,mostly written in C++ and JavaScript.

>For instance:
File system (fs)
http → Build servers
path → Manage file paths
Crypto → Encryption

>Their goal is to make system-level features accessible.
>Eliminate the requirement for external libraries for routine tasks.

**Native Bindings:
>Native bindings are JavaScript and C/C++ code bridge
>Permit JavaScript to communicate with low-level system functions.
>Operations at the OS level cannot be accessed by JavaScript alone.
>ative bindings link JS APIs to OS and Libuv.

**Events Loops:
>It is a system for managing asynchronous processes.
>It checks queues continuously and runs callbacks.

>Function:
permits non-blocking actions
determines what code runs next and when.
------------------------------------------------------------------------------------------------

## 2.Libuv

>Libuv : Node.js uses a C library that enables asynchronous I/O operations.
>Libuv is necessary for Node.js because JavaScript and OS cannot communicate directly.
>Libuv manages: 
1. System of files
2. Network functions Timers
3. pool of threads.

>Responsibilities of libuv: 
1. Implementation of an event loop
2. Taking care of the thread pool
3. Managing asynchronous input/output
4. Compatibility across platforms.
------------------------------------------------------------------------------------------------

## 3.Threads Pool

>A Thread Pool is a group of worker threads that Libuv manages to carry out blocking tasks is called a thread pool.
>A thread pool  used in Node.js to avoid obstructing the event loop and to manage tasks that aren't async at the OS level.
>operations handled by the thread pool are:
1. File system functions
2. DNS search
3. Decryption and encryption
4. Tasks involving compression
5. Crucial point:
6. Environment variables can be used to configure it.
------------------------------------------------------------------------------------------------

## 4.Workers Threads

>Worker Threads are distinct JavaScript execution threads designed to manage tasks requiring a lot of processing power.
>The necessity of worker threads
>JavaScript uses a single thread.
>The event loop may be blocked by complex computations.
>Parallel computation is made possible by worker threads.

>Qualities:
1. Every employee has a unique event loop.
2. uses message passing to communicate.

> Worker Threads vs. Thread Pool
1.Worker Threads:
-Managed by developer
-Executes JavaScript
-Full control
-Independent threads

2.Thread Pool:
-Managed by libuv
-Executes native tasks	
-Limited control	
-Shared resource

------------------------------------------------------------------------------------------------

## 5. Event Loop Queues

> Macro task queue:retains callbacks pertaining to I/O and timers.
>For Examples:
1.Set a timeout.
2.setInterval
3.setImmediate
4.Callbacks for network I/O

> Micro Task Queue:carries out operations as soon as the current call stack is finished.
>For Examples:
1.Promise.then()
2.catch
3.Lastly,
4.process.nextTick()

>Execution Priority
-Synchronous code
-Micro task queue
-Macro task queue
-Macro tasks are always completed after micro tasks.
------------------------------------------------------------------------------------------------
