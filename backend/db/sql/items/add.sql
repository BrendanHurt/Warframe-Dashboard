INSERT INTO items(name) 
    VALUES (${name})
    RETURNING *;