--------------------------------Schema Design Fundamentals----------------------------
--------------------------------------------------------------------------------------

## 1.What schema design is and what a database schema represents

ANSWER:The planning and structuring of how data will be stored, arranged, and connected within a relational database is known as schema design. It specifies the types of tables that are present, the columns they hold, the data types of those columns, and the relationships between tables using constraints and keys.

The database's blueprint is represented by a database schema. A schema specifies tables, fields, relationships, constraints, and rules that data must adhere to, much like a building blueprint specifies rooms, doors, and connections. It specifies how data can be stored rather than storing data itself.
__________________________________________________________________________________________________________________

## 2.Why schema design is required before writing backend code

ANSWER:Because the database structure directly affects the backend, schema design should be finished before writing backend code. Tables, columns, and relationships must be clearly defined for APIs, services, and business logic.

- Without a well-defined schema:
- Backend programmers might assume the wrong things about data.
- When the database structure is altered, APIs could malfunction.
- The application's data validation logic becomes inconsistent.

>Future refactoring and bugs are decreased when backend code is stable, predictable, and simple to implement thanks to a well-designed schema.
__________________________________________________________________________________________________________________

## 3.How poor schema design impacts data consistency, maintenance, and scalability

ANSWER:Serious long-term problems can result from poor schema design:

>Data consistency: Mismatched or conflicting values may result from duplicate or incorrectly related data (e.g., storing the same user email in multiple tables).

>Maintenance: It is more difficult to comprehend and alter poorly organized schemas, which makes bug fixes and feature updates dangerous and time-consuming.

>Scalability: As an application expands, inefficient schemas may make it more difficult to manage massive volumes of data, slow down queries, and use more storage.
__________________________________________________________________________________________________________________


## 4.What validations are in schema design and why databases enforce validations (for example: NOT NULL, UNIQUE, DEFAULT, PRIMARY KEY)

ANSWER:Rules used at the database level to guarantee data integrity and accuracy are known as validations in schema design. Even in cases where the backend contains errors, databases enforce these validations to prevent the storage of invalid data.

Typical validations consist of:

>NOT NULL: Guarantees that a column always contains a value (for example, a user must have a name).

>UNIQUE: Prevents duplicate values, such as email addresses.

>DEFAULT: When no value is supplied, a default value is assigned (e.g., status = 'active').

>PRIMARY KEY: Uniquely identifies each row in a table.

These validations act as a final safety layer to protect the data.
__________________________________________________________________________________________________________________

## 5.The difference between a database schema and a database table

ANSWER:The general framework or logical container that specifies tables, relationships, constraints, and rules is called a database schema.
One structure in the schema that holds data in rows and columns is called a database table.

-To put it simply, tables are the actual components created using the design plan, which is represented by the schema.
__________________________________________________________________________________________________________________


## 6.Why a table should represent only one entity

ANSWER:To maintain data organization and meaning, each table should represent a single real-world entity (e.g., User, Product, or Order).

If several entities are represented by a table:

1.Data starts to repeat itself.

2.Relationships become ambiguous

3.Errors may be introduced by updates.

For example, since user and order details represent different entities, they should be kept in different tables.
__________________________________________________________________________________________________________________


## 7.Why redundant or derived data should be avoided in table design

ANSWER:Redundant data is information that can be computed from preexisting values, whereas redundant data is information that is stored more than once.

-Such data should not be stored because:
-It uses more storage.
-When one copy is updated while others are not, it results in inconsistency.
-It makes maintenance more difficult.


For example, storing both date_of_birth and age is unnecessary since age can be derived from the date of birth.
__________________________________________________________________________________________________________________


## 8.The importance of choosing correct data types while designing tables

ANSWER:Choosing correct data types ensures:

>Efficient storage

>Faster query performance

>Accurate data validation

>For example:

Using INTEGER for age instead of TEXT

Using DATE for dates instead of strings

Using BOOLEAN for true/false values

Correct data types prevent invalid data entry and improve database performance.
__________________________________________________________________________________________________________________
