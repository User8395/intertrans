const lines = [
    {
        "number": "IT1",
        "name": "Pinewood City - New Karachi",
        "type": "Shuttle",
        "status": "Operational",
        "stations": [
            {
                "name": "Pinewood City",
                "platform": "3"
            },
            {
                "name": "New Karachi",
                "platform": "1",
                "transfers": ["IT2"]
            }
        ]
    },
    {
        "number": "IT2",
        "name": "Central Loop",
        "type": "Loop",
        "status": "Operational",
        "stations": [
            {
                "name": "New Karachi",
                "platform": "2",
                "transfers": ["IT1"]
            },
            {
                "name": "Swamp Village",
                "platform": "3A",
            },
            {
                "name": "Hammerbrook North",
                "platform": "1"
            },
            {
                "name": "Hammerbrook South",
                "platform": "1"
            },
            {
                "name": "London Central",
                "platform": "3",
                "transfers": ["IT1"]
            }
        ]
    }
]

const stations = [
    {
        "name": "New Karachi",
        "platforms": "6",
        "lines": ["IT1", "IT2"]
    },
    {
        "name": "London Central",
        "platforms": "4?",
        "lines": ["IT1", "IT2"]
    },
    {
        "name": "Hammerbrook South",
        "platforms": "2",
        "lines": ["IT2"]
    },
    {
        "name": "Hammerbrook North",
        "platforms": "2",
        "lines": ["IT2"]
    },
    {
        "name": "Swamp Village",
        "platforms": "4",
        "lines": ["IT2"]
    },
    {
        "name": "Pinewood City",
        "platforms": "3",
        "lines": ["IT1"]
    }
]