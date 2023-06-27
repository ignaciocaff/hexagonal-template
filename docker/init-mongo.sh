#!/bin/bash
set -e

mongo <<EOF
use test
db.createCollection("users", { capped : false } );
db.createUser(
  {
    user: 'test-user',
    pwd: 'test-123',
    roles: [{ role: 'readWrite', db: 'test' }],
  },
);

db.users.insertOne({
  userName: 'existing-user',
  password: '\$2a\$10\$ZPnpmnV3NeKvyNKjnK9Wmu0ZmOcuQUHOzzhv1ODny4WX/U8Cn56BK',
  email: 'something@something.com',
  firstName: 'John',
  lastName: 'Doe'
});
EOF
