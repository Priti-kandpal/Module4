                Database Fundamentals – Conceptual Understanding   (Theory)
 -----------------------------------------------------------------------------------------------------------------------
 ## 1. Why is db.json not suitable as a database for real projects?
 - A basic file-based storage system called db.json is primarily used for practice or brief demonstrations. It has various limitations that make it unsuitable for actual projects:

>Performance problems: Each read/write operation necessitates reading or writing the complete file, which gets slower as the amount of data increases.

>Scalability problems: It is unable to effectively manage high data volumes or numerous concurrent users.

>Reliability problems: If several operations take place at once or if the server crashes, file-based storage is vulnerable to corruption.

>Absence of advanced features: Transactions, indexing, querying, and relationships between data are not supported.
-----------------------------------------------------------------------------------------------------------------------

## 2. What are the ideal characteristics of a database system (apart from just storage)?

>Performance: Quick query execution and effective management of big datasets.

>Concurrency: The ability for several users to read and write data at the same time without experiencing any conflicts.

>Reliability: Even in the event of a system crash, data is protected from loss or corruption.

>Data integrity uses constraints and validations to guarantee that stored data is accurate, consistent, and legitimate.

>Scalability: The capacity to accommodate growing numbers of users and data by expanding either horizontally (by adding servers) or vertically (by building stronger hardware).

>Fault Tolerance: The ability to function properly even in the event that a system component fails.
-----------------------------------------------------------------------------------------------------------------------

## 3. How many types of databases are there? What are their use cases or applications?

- Relational and non-relational (NoSQL) databases are the two main categories of databases:

> 1.RDBMSs, or relational databases

Structure: Support SQL queries and store data in tables with rows and columns.

Use cases: Applications that need ACID transactions, relationships, and structured data.
MySQL, PostgreSQL, and Oracle are a few examples.

Applications in the real world include employee management systems, banking systems, and e-commerce inventory.

>2.NoSQL (Non-Relational Databases)

Structure: Data can be stored in graphs, wide-column stores, documents, and key-value pairs.

Use cases include applications that need fast read/write operations, large amounts of data, or flexible schema.

Examples include Redis (key-value), Cassandra (wide-column), and MongoDB (document).

Applications in the real world include social media feeds, caching systems, real-time analytics, and IoT data storage.

-----------------------------------------------------------------------------------------------------------------------
