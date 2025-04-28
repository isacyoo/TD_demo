export const entities = [
    {
        name: "user",
        description: "A user of the system, who manages the facilities equipped with IP cameras.",
        columns: [
            { name: "id", type: "string", primaryKey: true, description: "Unique identifier of the user." },
            { name: "name", type: "string", description: "Name of the user." },
            { name: "password", type: "string", description: "Hash of the user's password." },
            { name: "is_admin", type: "bool", description: "Indicates if the user has admin privileges." },
            { name: "api_key", type: "string", description: "Hashed of the user's API key" },
            { name: "api_key_expiry_date", type: "datetime", description: "Date when the API key expires" },
            { name: "video_retention_days", type: "int", description: "Account-level setting for the number of days to retain video clips." },
            { name: "stream_retention_hours", type: "int", description: "Account-level setting for the number of hours to retain live stream in KVS." },
            { name: "review_high_risk_members", type: "bool", description: "Account-level setting to determine if high-risk members should always be reviewed by agents" },
        ]
    },
    {
        name: "location",
        description: "A location managed by a user, equipped with cameras.",
        columns: [
            { name: "id", type: "int", primaryKey: true, description: "Unique identifier of the location." },
            { name: "user_id", type: "string", foreignKey: "user.id", description: "The user who owns this location." },
            { name: "name", type: "string", description: "Name of the location." },
            { name: "upload_method", type: "enum", description: "Method of uploading video streams." },
            { name: "custom_upload_method", type: "string", description: "Custom upload method if applicable." },
            { name: "operational_hours", type: "json", description: "Operational hours of the location." },
            { name: "video_retention_days", type: "int", description: "Number of days to retain video clips." },
            { name: "stream_retention_hours", type: "int", description: "Number of hours to retain live streams." },
            { name: "review_high_risk_members", type: "bool", description: "Whether high-risk members should always be reviewed." },
        ]
    },
    {
        name: "camera",
        description: "A camera installed at a location.",
        columns: [
            { name: "id", type: "int", primaryKey: true, description: "Unique identifier of the camera." },
            { name: "location_id", type: "int", foreignKey: "location.id", description: "The location where the camera is installed." },
            { name: "name", type: "string", description: "Name of the camera." },
            { name: "stream_url", type: "string", description: "URL of the camera's video stream." },
            { name: "threshold", type: "float", description: "Threshold for detection." },
            { name: "minimum_time", type: "float", description: "Minimum time for detection." },
            { name: "x1", type: "float", description: "Coordinate x1 for the camera's field of view." },
            { name: "y1", type: "float", description: "Coordinate y1 for the camera's field of view." },
            { name: "x2", type: "float", description: "Coordinate x2 for the camera's field of view." },
            { name: "y2", type: "float", description: "Coordinate y2 for the camera's field of view." },
            { name: "x3", type: "float", description: "Coordinate x3 for the camera's field of view." },
            { name: "y3", type: "float", description: "Coordinate y3 for the camera's field of view." },
            { name: "x4", type: "float", description: "Coordinate x4 for the camera's field of view." },
            { name: "y4", type: "float", description: "Coordinate y4 for the camera's field of view." },
        ]
    },
    {
        name: "action",
        description: "An action performed by a user.",
        columns: [
            { name: "id", type: "int", primaryKey: true, description: "Unique identifier of the action." },
            { name: "user_id", type: "string", foreignKey: "user.id", description: "The user who performed the action." },
            { name: "name", type: "string", description: "Name of the action." },
            { name: "is_tailgating", type: "bool", description: "Indicates if the action is related to tailgating." },
            { name: "is_enabled", type: "bool", description: "Whether the action is enabled." },
            { name: "is_deleted", type: "bool", description: "Whether the action is deleted." },
        ]
    },
    {
        name: "high_risk_member",
        description: "A member flagged as high risk.",
        columns: [
            { name: "id", type: "int", primaryKey: true, description: "Unique identifier of the high-risk member." },
            { name: "user_id", type: "string", foreignKey: "user.id", description: "The user who flagged the member." },
            { name: "member_id", type: "string", description: "Identifier of the high-risk member." },
            { name: "is_deleted", type: "bool", description: "Whether the member is deleted." },
            { name: "created_at", type: "datetime", description: "Timestamp when the member was flagged." },
        ]
    },
    {
        name: "event",
        description: "An event recorded in the system.",
        columns: [
            { name: "id", type: "string", primaryKey: true, description: "Unique identifier of the event." },
            { name: "location_id", type: "int", foreignKey: "location.id", description: "The location where the event occurred." },
            { name: "processed_at", type: "datetime", description: "Timestamp when the event was processed." },
            { name: "reviewed_at", type: "datetime", description: "Timestamp when the event was reviewed." },
            { name: "deleted_at", type: "datetime", description: "Timestamp when the event was deleted." },
            { name: "is_merged", type: "bool", description: "Whether the event is merged." },
            { name: "action_id", type: "int", foreignKey: "action.id", description: "The action associated with the event." },
            { name: "is_saved", type: "bool", description: "Whether the event is saved." },
        ]
    },
    {
        name: "entry",
        description: "An entry associated with an event.",
        columns: [
            { name: "id", type: "string", primaryKey: true, description: "Unique identifier of the entry." },
            { name: "event_id", type: "string", foreignKey: "event.id", description: "The event associated with the entry." },
            { name: "member_id", type: "string", description: "Identifier of the member involved in the entry." },
            { name: "member_meta", type: "json", description: "Metadata about the member." },
            { name: "entered_at", type: "datetime", description: "Timestamp when the entry occurred." },
            { name: "status", type: "enum", description: "Status of the entry." },
        ]
    },
    {
        name: "video",
        description: "A video associated with an entry.",
        columns: [
            { name: "id", type: "string", primaryKey: true, description: "Unique identifier of the video." },
            { name: "camera_id", type: "int", foreignKey: "camera.id", description: "The camera that recorded the video." },
            { name: "entry_id", type: "string", foreignKey: "entry.id", description: "The entry associated with the video." },
            { name: "status", type: "enum", description: "Status of the video." },
            { name: "uploaded_at", type: "datetime", description: "Timestamp when the video was uploaded." },
        ]
    }
];