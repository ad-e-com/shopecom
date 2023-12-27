-- CREATE USER 'ecommerceapp'@'localhost' IDENTIFIED BY 'ecommerceapp';

-- GRANT ALL PRIVILEGES ON * . * TO 'ecommerceapp'@'localhost';


-- ALTER USER 'ecommerceapp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ecommerceapp';

CREATE USER 'ecommerceapp'@'%' IDENTIFIED BY 'ecommerceapp';
GRANT ALL PRIVILEGES ON * . * TO 'ecommerceapp'@'%';

--ALTER USER 'ecommerceapp'@'%' IDENTIFIED WITH mysql_native_password BY 'ecommerceapp';