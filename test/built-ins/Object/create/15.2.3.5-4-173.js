// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-173
description: >
    Object.create - one property in 'Properties' is the JSON object
    that uses Object's [[Get]] method to access the 'value' property
    (8.10.5 step 5.a)
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            JSON.value = "JSONValue";

            var newObj = Object.create({}, {
                prop: JSON
            });

            return newObj.prop === "JSONValue";
        } finally {
            delete JSON.value;
        }
    }
runTestCase(testcase);