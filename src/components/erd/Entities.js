export const entities = [
    {
        name: "user",
        description: <p>A user of the system, who manages the facilities equipped with IP cameras. A user must belong to an organization.</p>,
        columns: [
            { name: "id", type: "string", description: "Unique identifier of the user." },
            { name: "name", type: "string", description: "Name of the user." },
            { name: "password", type: "string", description: "Hash of the user's password." },
            { name: "is_admin", type: "bool", description: "Indicates if the user has admin privileges." },
            { name: "api_key", type: "string", description: "Hash of the user's API key" },
            { name: "api_key_expiry_date", type: "datetime", description: "Date when the API key expires" },
            { name: "video_retention_days", type: "int", description: "Account-level setting for the number of days to retain video clips." },
            { name: "stream_retention_hours", type: "int", description: "Account-level setting for the number of hours to retain live stream in KVS." },
            { name: "review_high_risk_members", type: "bool", description: "Account-level setting to determine if high-risk members should always be reviewed by agents" },
            { name: "organization_id", type: "int", description: "The organization to which the user belongs." },
        ]
    },
    {
        name: "organization",
        description: <p>An organization that manages multiple users and locations. Billing is done at an organization level.</p>,
        columns: [
            { name: "id", type: "int", description: "Unique identifier of the organization." },
            { name: "name", type: "string", description: "Name of the organization." },
            { name: "email", type: "string", description: "Email address of the organization." },
            { name: "phone", type: "string", description: "Phone number of the organization." },
            { name: "address", type: "string", description: "Address of the organization." },
            { name: "created_at", type: "datetime", description: "Timestamp when the organization was created." },
            { name: "is_active", type: "bool", description: "Indicates if the organization is active." },
            { name: "is_admin", type: "bool", description: "Indicates if the organization has admin privileges." },
        ]
    },
    {
        name: "location",
        description: <p>A location managed by a user, equipped with cameras. A location is typically an entrance, so a facility can have multiple locations.</p>,
        columns: [
            { name: "id", type: "int", description: "Unique identifier of the location." },
            { name: "user_id", type: "string", description: "The user who owns this location." },
            { name: "name", type: "string", description: "Name of the location." },
            { name: "upload_method", type: "enum", description: "Method of uploading video streams. Enum of ( UserUpload, RTSP, Custom )" },
            { name: "custom_upload_method", type: "string", description: "Custom upload method if applicable." },
            { name: "operational_hours", type: "json", description: "Operational schedule of the TAILDET-AI for the location." },
            { name: "video_retention_days", type: "int", description: "Number of days to retain video clips." },
            { name: "stream_retention_hours", type: "int", description: "Number of hours to retain live streams." },
            { name: "review_high_risk_members", type: "bool", description: "Whether high-risk members should always be reviewed." },
        ]
    },
    {
        name: "camera",
        description: <p>A camera installed at a location.</p>,
        columns: [
            { name: "id", type: "int", description: "Unique identifier of the camera." },
            { name: "location_id", type: "int", description: "The location where the camera is installed." },
            { name: "display_order", type: "int", description: "Display order of the camera." },
            { name: "name", type: "string", description: "Name of the camera." },
            { name: "stream_url", type: "string", description: "URL of the camera's RTSP stream." },
            { name: "threshold", type: "float", description: "Threshold for detection." },
            { name: "minimum_time", type: "float", description: "Minimum time for detection." },
            { name: "offset_amount", type: "int", description: "Offset amount in seconds when creating a video clip from KVS." },
            { name: "x1", type: "float", description: "x coordinate of the 1st point of the entrance" },
            { name: "y1", type: "float", description: "y coordinate of the 1st point of the entrance" },
            { name: "x2", type: "float", description: "x coordinate of the 2nd point of the entrance" },
            { name: "y2", type: "float", description: "y coordinate of the 2nd point of the entrance" },
            { name: "x3", type: "float", description: "x coordinate of the 3rd point of the entrance" },
            { name: "y3", type: "float", description: "y coordinate of the 3rd point of the entrance" },
            { name: "x4", type: "float", description: "x coordinate of the 4th point of the entrance" },
            { name: "y4", type: "float", description: "y coordinate of the 4th point of the entrance" },
            { name: "nx", type: "float", description: "x component of the normalized vector that is normal to the entrance" },
            { name: "ny", type: "float", description: "y component of the normalized vector that is normal to the entrance" },
        ]
    },
    {
        name: "action",
        description: <p>An action performed by a user on an event.</p>,
        page: "/pages/actions",
        columns: [
            { name: "id", type: "int", description: "Unique identifier of the action." },
            { name: "user_id", type: "string", description: "The user who performed the action." },
            { name: "name", type: "string", description: "Name of the action." },
            { name: "is_tailgating", type: "bool", description: "Indicates if the action is done on a tailgating event." },
            { name: "is_enabled", type: "bool", description: "Whether the action is enabled." },
            { name: "is_deleted", type: "bool", description: "Whether the action is deleted." },
        ]
    },
    {
        name: "event",
        description: <>
                        <p>An event recorded in the system. Review is done on a per-event basis.</p>
                        <br />
                        <p>It consists of a collection of entries. When multiple people scan their cards within certain amount of time, they will be considered as one event, and each scan will create an entry.</p>
                        <br />
                        <p> An event will be marked as tailgating if the number of people detected exceeds the number of people scanned in an event.</p>
                    </>,
        page: "/pages/review-event",
        columns: [
            { name: "id", type: "string", description: "Unique identifier of the event." },
            { name: "location_id", type: "int", description: "The location where the event occurred." },
            { name: "processed_at", type: "datetime", description: "Timestamp when the event was processed by the AI engine." },
            { name: "reviewed_at", type: "datetime", description: "Timestamp when the event was reviewed by an agent." },
            { name: "deleted_at", type: "datetime", description: "Timestamp when the event was deleted." },
            { name: "is_merged", type: "bool", description: "Whether the event is merged." },
            { name: "action_id", type: "int", description: "The action associated with the event." },
            { name: "is_saved", type: "bool", description: "Whether the event is saved." },
            { name: "coment", type: "string", description: "Comment associated with the event." },
        ]
    },
    {
        name: "entry",
        description: <>
                        <p>An entry associated with an event. Scanning a card creates an entry by calling POST /entry</p>
                        <br />
                        <p>An entry consists of a collection of videos as a location can have multiple cameras. Each camera creates a video on member entry.</p>
                    </>,
        columns: [
            { name: "id", type: "string", description: "Unique identifier of the entry." },
            { name: "event_id", type: "string", description: "The event associated with the entry." },
            { name: "member_id", type: "string", description: "User-side identifier of the member involved in the entry." },
            { name: "member_meta", type: "json", description: "Metadata about the member provided by the user." },
            { name: "entered_at", type: "datetime", description: "Timestamp when the entry occurred." },
            { name: "status", type: "enum", description: "Status of the entry." },
        ]
    },
    {
        name: "video",
        description: <p>A video associated with an entry and a camera.</p>,
        columns: [
            { name: "id", type: "string", description: "Unique identifier of the video." },
            { name: "camera_id", type: "int", description: "The camera that recorded the video." },
            { name: "entry_id", type: "string", description: "The entry associated with the video." },
            { name: "status", type: "enum", description: "Status of the video." },
            { name: "uploaded_at", type: "datetime", description: "Timestamp when the video was uploaded." },
        ]
    },
    {
        name: "high_risk_member",
        description: <p>A member flagged as high risk.</p>,
        page: "/pages/members",
        columns: [
            { name: "id", type: "int", description: "Unique identifier of the high-risk member." },
            { name: "user_id", type: "string", description: "The user who flagged the member." },
            { name: "member_id", type: "string", description: "User-side identifier of the high-risk member." },
            { name: "is_deleted", type: "bool", description: "Whether the member is deleted." },
            { name: "created_at", type: "datetime", description: "Timestamp when the member was flagged." },
        ]
    }
];