export function useDummyData() {

    const ORDERS = [
        {
            "location": {
                "type": "Point",
                "coordinates": [
                    -97.0103414,
                    32.847619
                ]
            },
            "_id": "67506bf85a1b8937d15cddf0",
            "transaction_id": "e2c08a76-da64-4942-996b-472366be5e06",
            "purchaser_email": "newtest@test.com",
            "purchaser_name": "Test Account",
            "chef_email": "fatemaali75062@gmail.com",
            "chef_name": "Fatema Ali",
            "items": "[{\"quantity\":2,\"item_category\":\"Baked Goods\",\"quantityRemaining\":85,\"item_description\":\"Rose pastry\",\"itemizedSubtotal\":3.5,\"item_title\":\"Rose Pastry\",\"sales_tax_rate\":0.0825,\"item_id\":\"fatemaali75062@gmail.com 1732546840962.jpg\",\"unit_price\":1.75},{\"item_category\":\"Baked Goods\",\"unit_price\":2,\"item_description\":\"Crossaints sandwich\",\"quantityRemaining\":90,\"sales_tax_rate\":0.0825,\"quantity\":4,\"itemizedSubtotal\":8,\"item_id\":\"fatemaali75062@gmail.com 1732549818863.jpg\",\"item_title\":\"Croissant sandwich \"}]",
            "subtotal": "1150",
            "tax": "95",
            "total": "1245",
            "order_status": 0,
            "ready_in_time": "",
            "declined_at_time": null,
            "declination_reason": null,
            "note": "Ready to eat (taxable)",
            "timestamp": "1733323768033",
            "__v": 0
        },
        {
            "location": {
                "type": "Point",
                "coordinates": [
                    -97.0103414,
                    32.847619
                ]
            },
            "_id": "67506ca15a1b8937d15cde07",
            "transaction_id": "b520dee0-0fcf-453e-8ddd-289f618ad58f",
            "purchaser_email": "newtest@test.com",
            "purchaser_name": "Test Account",
            "chef_email": "fatemaali75062@gmail.com",
            "chef_name": "Fatema Ali",
            "items": "[{\"item_title\":\"Croissant sandwich \",\"item_id\":\"fatemaali75062@gmail.com 1732549818863.jpg\",\"item_category\":\"Baked Goods\",\"quantity\":5,\"sales_tax_rate\":0.0825,\"itemizedSubtotal\":10,\"item_description\":\"Crossaints sandwich\",\"quantityRemaining\":90,\"unit_price\":2}]",
            "subtotal": "1000",
            "tax": "0",
            "total": "1000",
            "order_status": 0,
            "ready_in_time": "",
            "declined_at_time": null,
            "declination_reason": null,
            "note": "Not ready to eat (non-taxable)",
            "timestamp": "1733323936673",
            "__v": 0
        },
        {
            "location": {
                "type": "Point",
                "coordinates": [
                    -97.0103414,
                    32.847619
                ]
            },
            "_id": "675071844a2a47894248e78e",
            "transaction_id": "4770f738-600c-45d2-a8e6-4920e66b3c51",
            "purchaser_email": "newtest@test.com",
            "purchaser_name": "Test Account",
            "chef_email": "fatemaali75062@gmail.com",
            "chef_name": "Fatema Ali",
            "items": "[{\"item_title\":\"Croissant sandwich \",\"sales_tax_rate\":0.0825,\"item_category\":\"Baked Goods\",\"quantity\":5,\"item_description\":\"Crossaints sandwich\",\"item_id\":\"fatemaali75062@gmail.com 1732549818863.jpg\",\"quantityRemaining\":81,\"unit_price\":2,\"itemizedSubtotal\":10},{\"quantityRemaining\":83,\"sales_tax_rate\":0.0825,\"itemizedSubtotal\":1.75,\"item_id\":\"fatemaali75062@gmail.com 1732546840962.jpg\",\"item_title\":\"Rose Pastry\",\"quantity\":1,\"unit_price\":1.75,\"item_category\":\"Baked Goods\",\"item_description\":\"Rose pastry\"}]",
            "subtotal": "1175",
            "tax": "97",
            "total": "1272",
            "order_status": 0,
            "ready_in_time": "",
            "declined_at_time": null,
            "declination_reason": null,
            "note": "Ready to eat (taxable)",
            "timestamp": "1733325187850",
            "__v": 0
        },
        {
            "location": {
                "type": "Point",
                "coordinates": [
                    -97.0103414,
                    32.847619
                ]
            },
            "_id": "67525ce34a2a47894248e943",
            "transaction_id": "7fdac7bc-9001-4418-a064-691a15caad96",
            "purchaser_email": "saad@surplate.net",
            "purchaser_name": "Saad Ayub",
            "chef_email": "fatemaali75062@gmail.com",
            "chef_name": "Fatema Ali",
            "items": "[{\"item_category\":\"Baked Goods\",\"item_description\":\"Rose pastry\",\"item_id\":\"fatemaali75062@gmail.com 1732546840962.jpg\",\"item_title\":\"Rose Pastry\",\"itemizedSubtotal\":10.5,\"quantity\":6,\"quantityRemaining\":82,\"salesTaxRate\":0.0825,\"unit_price\":1.75}]",
            "subtotal": "1050",
            "tax": "0",
            "total": "1050",
            "order_status": 0,
            "ready_in_time": "",
            "declined_at_time": null,
            "declination_reason": null,
            "note": "Not ready to eat (non-taxable)",
            "timestamp": "1733450979405",
            "__v": 0
        },
        {
            "location": {
                "type": "Point",
                "coordinates": [
                    -97.0103414,
                    32.847619
                ]
            },
            "_id": "675b2b9c38ab6ee72e160b7b",
            "transaction_id": "8d3fb193-414c-488b-8027-02567aa375ce",
            "purchaser_email": "usertest@test.com",
            "purchaser_name": "Saad Test",
            "chef_email": "fatemaali75062@gmail.com",
            "chef_name": "Fatema Ali",
            "items": "[{\"item_category\":\"Baked Goods\",\"quantityRemaining\":200,\"item_id\":\"fatemaali75062@gmail.com 1733787046613.jpg\",\"item_title\":\"Muffins\",\"sales_tax_rate\":0.0825,\"unit_price\":1,\"quantity\":2,\"itemizedSubtotal\":2,\"item_description\":\"Muffins\"},{\"item_title\":\"Test 1\",\"sales_tax_rate\":0.0825,\"itemizedSubtotal\":1,\"quantity\":2,\"item_description\":\"Test\",\"unit_price\":0.5,\"item_id\":\"fatemaali75062@gmail.com 1733786840923.jpg\",\"quantityRemaining\":100,\"item_category\":\"Baked Goods\"},{\"item_title\":\"Image Test\",\"itemizedSubtotal\":3,\"sales_tax_rate\":0.0825,\"item_category\":\"Baked Goods\",\"item_id\":\"fatemaali75062@gmail.com 1733786216265.jpg\",\"quantityRemaining\":50,\"item_description\":\"Test\",\"unit_price\":1.5,\"quantity\":2},{\"item_title\":\"Muffins\",\"quantity\":3,\"item_description\":\"Muffins\",\"itemizedSubtotal\":3,\"sales_tax_rate\":0.0825,\"item_category\":\"Baked Goods\",\"unit_price\":1,\"item_id\":\"fatemaali75062@gmail.com 1733786104465.jpg\",\"quantityRemaining\":50},{\"item_category\":\"Baked Goods\",\"quantityRemaining\":76,\"item_description\":\"Crossaints sandwich\",\"item_id\":\"fatemaali75062@gmail.com 1732549818863.jpg\",\"unit_price\":2,\"item_title\":\"Croissant sandwich \",\"quantity\":3,\"itemizedSubtotal\":6,\"sales_tax_rate\":0.0825},{\"itemizedSubtotal\":5.25,\"unit_price\":1.75,\"item_category\":\"Baked Goods\",\"item_title\":\"Rose Pastry\",\"item_id\":\"fatemaali75062@gmail.com 1732546840962.jpg\",\"quantity\":3,\"item_description\":\"Rose pastry\",\"quantityRemaining\":76,\"sales_tax_rate\":0.0825}]",
            "subtotal": "2025",
            "tax": "167",
            "total": "2192",
            "order_status": 3,
            "ready_in_time": "15 Min",
            "declined_at_time": null,
            "declination_reason": null,
            "note": "Ready to eat (taxable)",
            "timestamp": "1734028188441",
            "__v": 0,
            "accepted_at_time": "1734028208592"
        },
        {
            "location": {
                "type": "Point",
                "coordinates": [
                    -97.0103414,
                    32.847619
                ]
            },
            "_id": "675b344838ab6ee72e160be1",
            "transaction_id": "13da769d-1b5d-407d-8c6f-939352de2514",
            "purchaser_email": "ayub.saad@ymail.com",
            "purchaser_name": "Saad Ayub",
            "chef_email": "fatemaali75062@gmail.com",
            "chef_name": "Fatema Ali",
            "items": "[{\"item_category\":\"Baked Goods\",\"unit_price\":10,\"item_id\":\"fatemaali75062@gmail.com 1734030233267.jpg\",\"itemizedSubtotal\":20,\"item_description\":\"Babu\",\"item_title\":\"Test123\",\"quantity\":2,\"sales_tax_rate\":0.0825,\"quantityRemaining\":100}]",
            "subtotal": "2000",
            "tax": "0",
            "total": "2000",
            "order_status": 3,
            "ready_in_time": "20 Min",
            "declined_at_time": null,
            "declination_reason": null,
            "note": "Not ready to eat (non-taxable)",
            "timestamp": "1734030407803",
            "__v": 0,
            "accepted_at_time": "1734030454764"
        },
        {
            "location": {
                "type": "Point",
                "coordinates": [
                    -97.0103414,
                    32.847619
                ]
            },
            "_id": "675b34f738ab6ee72e160c16",
            "transaction_id": "a56a87b5-a9e7-4dd2-912e-069029732558",
            "purchaser_email": "ayub.saad@ymail.com",
            "purchaser_name": "Saad Ayub",
            "chef_email": "fatemaali75062@gmail.com",
            "chef_name": "Fatema Ali",
            "items": "[{\"item_description\":\"Babu\",\"unit_price\":10,\"sales_tax_rate\":0.0825,\"quantityRemaining\":498,\"quantity\":1,\"itemizedSubtotal\":10,\"item_category\":\"Baked Goods\",\"item_id\":\"fatemaali75062@gmail.com 1734030233267.jpg\",\"item_title\":\"Test123\"}]",
            "subtotal": "1000",
            "tax": "82",
            "total": "1082",
            "order_status": 1,
            "ready_in_time": "0 Min",
            "declined_at_time": null,
            "declination_reason": null,
            "note": "Ready to eat (taxable)",
            "timestamp": "1734030583241",
            "__v": 0,
            "accepted_at_time": "1734030598564"
        },
        {
            "location": {
                "type": "Point",
                "coordinates": [
                    -97.0103414,
                    32.847619
                ]
            },
            "_id": "67619974acec778ae0a589b4",
            "transaction_id": "3bd39ad7-531b-40a0-8dd8-edec88159b9d",
            "purchaser_email": "saad@surplate.net",
            "purchaser_name": "Saad Ayub",
            "chef_email": "fatemaali75062@gmail.com",
            "chef_name": "Fatema Ali",
            "items": "[{\"item_category\":\"Baked Goods\",\"quantity\":1,\"item_id\":\"fatemaali75062@gmail.com 1734030233267.jpg\",\"item_description\":\"Babu\",\"quantityRemaining\":497,\"sales_tax_rate\":0.0825,\"itemizedSubtotal\":10,\"item_title\":\"Test123\",\"unit_price\":10}]",
            "subtotal": "1000",
            "tax": "82",
            "total": "1082",
            "order_status": 3,
            "ready_in_time": "10 Min",
            "declined_at_time": null,
            "declination_reason": null,
            "note": "Ready to eat (taxable)",
            "timestamp": "1734449524416",
            "__v": 0,
            "accepted_at_time": "1734449573028"
        },
        {
            "location": {
                "type": "Point",
                "coordinates": [
                    -97.0103414,
                    32.847619
                ]
            },
            "_id": "67619a06acec778ae0a589e7",
            "transaction_id": "80be6d36-91cb-4560-a79f-6170a06ae16d",
            "purchaser_email": "saad@surplate.net",
            "purchaser_name": "Saad Ayub",
            "chef_email": "fatemaali75062@gmail.com",
            "chef_name": "Fatema Ali",
            "items": "[{\"item_category\":\"Baked Goods\",\"item_title\":\"Test123\",\"item_id\":\"fatemaali75062@gmail.com 1734030233267.jpg\",\"itemizedSubtotal\":10,\"quantityRemaining\":496,\"quantity\":1,\"unit_price\":10,\"sales_tax_rate\":0.0825,\"item_description\":\"Babu\"},{\"item_id\":\"fatemaali75062@gmail.com 1733787046613.jpg\",\"quantityRemaining\":198,\"itemizedSubtotal\":1,\"quantity\":1,\"sales_tax_rate\":0.0825,\"unit_price\":1,\"item_category\":\"Baked Goods\",\"item_title\":\"Muffins\",\"item_description\":\"Muffins\"},{\"item_description\":\"Test\",\"unit_price\":0.5,\"sales_tax_rate\":0.0825,\"quantity\":1,\"item_id\":\"fatemaali75062@gmail.com 1733786840923.jpg\",\"item_category\":\"Baked Goods\",\"item_title\":\"Test 1\",\"itemizedSubtotal\":0.5,\"quantityRemaining\":98},{\"unit_price\":1.5,\"item_title\":\"Image Test\",\"quantity\":1,\"quantityRemaining\":48,\"sales_tax_rate\":0.0825,\"item_id\":\"fatemaali75062@gmail.com 1733786216265.jpg\",\"itemizedSubtotal\":1.5,\"item_category\":\"Baked Goods\",\"item_description\":\"Test\"}]",
            "subtotal": "1300",
            "tax": "0",
            "total": "1300",
            "order_status": 3,
            "ready_in_time": "25 Min",
            "declined_at_time": null,
            "declination_reason": null,
            "note": "Not ready to eat (non-taxable)",
            "timestamp": "1734449669638",
            "__v": 0,
            "accepted_at_time": "1734449690115"
        }
    ]
    


    return {
        ORDERS
    }
}