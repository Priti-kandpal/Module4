-----------------------------Q2 :Database Relationships--------------------------------------------

---------------------------------------------------------------------------------------------------

## 1.Definition of database relationship

- The logical connection between two or more tables in a relational database is described by a database relationship. It describes how keys, mostly primary and foreign keys, are used to link data in one table to data in another.
- To prevent duplication and maintain organization, data in a relational database is divided into several tables. Relationships enable the following:

1.Combine relevant information from several tables.
2.Preserve accuracy and consistency of the data
3.Make sure related records genuinely exist by enforcing referential integrity.
4.Cut down on redundant data
4.Use JOIN operations to support complex queries.

>When a column in one table (foreign key) references the primary key of another table, a relationship is typically established. This guarantees that the database is aware of the relationships between records.

>EXAMPLE:   In an e-commerce application, customers and orders are stored in separate tables. A database relationship links them so that each order is associated with the customer who placed it. This allows the system to easily retrieve all orders of a specific customer using the relationship between the two tables.

------------------------------------------------------------------------------------------------------------------------------------------------________________________________________________________________________________________________________________________________________________


## 2.Types of relationships

- There are three main types of database relationships:

a.One-to-One (1:1)

b.One-to-Many (1:N)

c.Many-to-Many (M:N)

---------------------------------------------------------------------------------------------

a. One-to-One Relationship (1:1)

- When a single record in one table is connected to exactly one record in another, this is known as a one-to-one relationship.

This type of relationship is usually used when:

>Data is rarely accessed or is optional.
>Sensitive data must be kept apart.


------------------------------------------------------------------------------------------------------------

b.One-to-Many (1:N)

- When a single record in one table can be linked to several records in another, this is known as a one-to-many relationship.

- In databases, this kind of relationship is the most prevalent.



---------------------------------------------------------------------------------------



c.Many-to-Many (M:N)

- When several records in one table are connected to several records in another table, this is known as a Many-to-Many relationship.

- A junction (bridge) table is used to implement this kind of relationship.


------------------------------------------------------------------------------------------------------------------------------------------------________________________________________________________________________________________________________________________________________________


## 3.Clear e-commerce examples for each type

1. One-to-One Relationship (1:1)

 example of e-commerce:
- User -> Profile

>Every user has a single profile.
>Every profile is unique to a single user.

2. One-to-Many (1:N)

An example of e-commerce
- Customer -> Orders

>Multiple orders can be placed by a single customer.
>Every order is owned by a single customer.

3. Many-to-Many (M:N)

An example of e-commerce
- Orders <-> Products

>Many products can be included in a single order.
>One item may be included in multiple orders


------------------------------------------------------------------------------------------------------------------------------------------------________________________________________________________________________________________________________________________________________________